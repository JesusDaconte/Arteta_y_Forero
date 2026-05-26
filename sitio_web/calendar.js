// Calendar functionality for Arteta & Forero website

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('calendar-modal');
  const modalOverlay = modal?.querySelector('.modal-overlay');
  const modalClose = modal?.querySelector('.modal-close');
  const cancelBtn = modal?.querySelector('#cancel-btn');
  const confirmBtn = modal?.querySelector('#confirm-btn');
  const prevMonthBtn = modal?.querySelector('.nav-btn.prev');
  const nextMonthBtn = modal?.querySelector('.nav-btn.next');
  const monthDisplay = modal?.querySelector('.calendar-month-year .month');
  const yearDisplay = modal?.querySelector('.calendar-month-year .year');
  const daysContainer = document.getElementById('calendar-days');
  const timeSlotsContainer = document.getElementById('time-slots');
  const nameInput = modal?.querySelector('#appt-name');
  const emailInput = modal?.querySelector('#appt-email');
  const phoneInput = modal?.querySelector('#appt-phone');

  let currentDate = new Date();
  let selectedDate = null;
  let selectedTime = null;

  // Open modal
  function openModal() {
    if (modal) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      if (modalOverlay) modalOverlay.setAttribute('aria-hidden', 'false');
      renderCalendar();
      renderTimeSlots();
    }
  }

  // Close modal
  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      if (modalOverlay) modalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  // Event listeners for trigger buttons
  document.querySelectorAll('.header-cta, .mobile-cta').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  // Close modal events
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Calendar navigation
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
  }

  // Render calendar
  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    if (monthDisplay) {
      monthDisplay.textContent = currentDate.toLocaleString('es-ES', { month: 'long' });
    }
    if (yearDisplay) {
      yearDisplay.textContent = year;
    }

    if (!daysContainer) return;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();

    daysContainer.innerHTML = '';

    // Previous month days
    const prevLastDay = new Date(year, month, 0).getDate();
    const prevDaysCount = startingDay === 0 ? 6 : startingDay - 1;

    for (let i = prevDaysCount; i > 0; i--) {
      const dayElement = document.createElement('button');
      dayElement.className = 'day-btn other-month disabled';
      dayElement.textContent = prevLastDay - i + 1;
      daysContainer.appendChild(dayElement);
    }

    // Current month days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dayElement = document.createElement('button');
      dayElement.className = 'day-btn';
      dayElement.textContent = day;

      const today = new Date();
      if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
        dayElement.classList.add('today');
      }

      dayElement.addEventListener('click', () => {
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('selected'));
        dayElement.classList.add('selected');
        selectedDate = new Date(year, month, day);
        renderTimeSlots();
      });

      daysContainer.appendChild(dayElement);
    }

    // Next month days to fill grid
    const totalDays = daysContainer.children.length;
    const remainingDays = 42 - totalDays;

    for (let day = 1; day <= remainingDays; day++) {
      const dayElement = document.createElement('button');
      dayElement.className = 'day-btn other-month disabled';
      dayElement.textContent = day;
      daysContainer.appendChild(dayElement);
    }
  }

  // Render time slots
  function renderTimeSlots() {
    if (!timeSlotsContainer) return;

    timeSlotsContainer.innerHTML = '';

    if (!selectedDate) {
      const placeholder = document.createElement('div');
      placeholder.className = 'time-btn disabled';
      placeholder.textContent = 'Seleccione una fecha';
      timeSlotsContainer.appendChild(placeholder);
      return;
    }

    const timeSlots = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    const currentHour = today.getHours();

    timeSlots.forEach(time => {
      const timeElement = document.createElement('button');
      timeElement.className = 'time-btn';
      timeElement.innerHTML = `<div class="time-number">${time}</div><div class="time-label">hrs</div>`;

      if (isToday) {
        const [hours] = time.split(':').map(Number);
        if (hours < currentHour) {
          timeElement.classList.add('disabled');
        }
      }

      timeElement.addEventListener('click', () => {
        if (!timeElement.classList.contains('disabled')) {
          document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('selected'));
          timeElement.classList.add('selected');
          selectedTime = time;
        }
      });

      timeSlotsContainer.appendChild(timeElement);
    });
  }

  // Confirm booking
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const name = nameInput?.value.trim() ?? '';
      const email = emailInput?.value.trim() ?? '';
      const phone = phoneInput?.value.trim() ?? '';

      if (!name || !email || !phone) {
        alert('Por favor complete todos los campos obligatorios: nombre, correo y celular.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
        return;
      }

      if (!selectedDate || !selectedTime) {
        alert('Por favor seleccione una fecha y hora para su consulta.');
        return;
      }

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = selectedDate.toLocaleDateString('es-ES', options);

      alert(`¡Cita agendada!\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nFecha: ${formattedDate}\nHora: ${selectedTime}\n\nUn miembro de nuestro equipo se pondrá en contacto con usted.`);

      closeModal();

      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      selectedDate = null;
      selectedTime = null;
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('is-active');
      this.setAttribute('aria-expanded', this.classList.contains('is-active'));
      mobileMenu.classList.toggle('is-open');
      mobileMenu.setAttribute('aria-hidden', !mobileMenu.classList.contains('is-open'));
    });
  }
});