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
  const modalMessage = document.getElementById('modal-message');
  const modalSuccess = document.getElementById('modal-success');
  const appointmentForm = modal?.querySelector('.appointment-form');
  const calendarHeader = modal?.querySelector('.calendar-header');
  const calendarWeekdays = modal?.querySelector('.calendar-weekdays');
  const calendarDays = modal?.querySelector('#calendar-days');
  const timeSlotsSection = modal?.querySelector('.time-slots');

  let currentDate = new Date();
  let selectedDate = null;
  let selectedTime = null;
  let lastFocusedElement = null;

  const focusableSelector = 'button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function getFocusableElements() {
    if (!modal) return [];
    return Array.from(modal.querySelectorAll(focusableSelector)).filter(
      el => !el.closest('.hidden') && !el.disabled && el.offsetParent !== null
    );
  }

  function trapFocus(e) {
    const focusable = getFocusableElements();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function showMessage(text, isError) {
    if (!modalMessage) return;
    modalMessage.textContent = text;
    modalMessage.classList.remove('hidden', 'is-error');
    if (isError) modalMessage.classList.add('is-error');
    setTimeout(() => {
      modalMessage.classList.add('hidden');
    }, 5000);
  }

  function resetForm() {
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (phoneInput) phoneInput.value = '';
    selectedDate = null;
    selectedTime = null;
  }

  function openModal() {
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    if (modalOverlay) modalOverlay.setAttribute('aria-hidden', 'false');
    if (modalMessage) modalMessage.classList.add('hidden');
    if (modalSuccess) modalSuccess.classList.add('hidden');
    if (appointmentForm) appointmentForm.classList.remove('hidden');
    if (calendarHeader) calendarHeader.classList.remove('hidden');
    if (calendarWeekdays) calendarWeekdays.classList.remove('hidden');
    if (calendarDays) calendarDays.closest('.calendar-header')?.classList.remove('hidden');
    if (timeSlotsSection) timeSlotsSection.classList.remove('hidden');
    if (cancelBtn) cancelBtn.classList.remove('hidden');
    if (confirmBtn) confirmBtn.classList.remove('hidden');
    if (modalClose) modalClose.style.display = '';
    renderCalendar();
    renderTimeSlots();
    resetForm();
    setTimeout(() => nameInput?.focus(), 100);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    if (modalOverlay) modalOverlay.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  document.querySelectorAll('.header-cta, .mobile-cta, .cta-agendar .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
    if (e.key === 'Tab' && modal && !modal.classList.contains('hidden')) {
      trapFocus(e);
    }
  });

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

    const prevLastDay = new Date(year, month, 0).getDate();
    const prevDaysCount = startingDay === 0 ? 6 : startingDay - 1;

    for (let i = prevDaysCount; i > 0; i--) {
      const dayElement = document.createElement('button');
      dayElement.className = 'day-btn other-month disabled';
      dayElement.textContent = prevLastDay - i + 1;
      daysContainer.appendChild(dayElement);
    }

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

    const totalDays = daysContainer.children.length;
    const remainingDays = 42 - totalDays;

    for (let day = 1; day <= remainingDays; day++) {
      const dayElement = document.createElement('button');
      dayElement.className = 'day-btn other-month disabled';
      dayElement.textContent = day;
      daysContainer.appendChild(dayElement);
    }
  }

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
      timeElement.innerHTML = '<div class="time-number">' + time + '</div><div class="time-label">hrs</div>';

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

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (modalMessage) modalMessage.classList.add('hidden');

      const name = nameInput?.value.trim() ?? '';
      const email = emailInput?.value.trim() ?? '';
      const phone = phoneInput?.value.trim() ?? '';

      if (!name || !email || !phone) {
        showMessage('Por favor complete todos los campos obligatorios: nombre, correo y celular.', true);
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showMessage('Por favor ingrese un correo electrónico válido.', true);
        return;
      }

      if (!selectedDate || !selectedTime) {
        showMessage('Por favor seleccione una fecha y hora para su consulta.', true);
        return;
      }

      if (appointmentForm) appointmentForm.classList.add('hidden');
      if (calendarHeader) calendarHeader.classList.add('hidden');
      if (calendarWeekdays) calendarWeekdays.classList.add('hidden');
      if (calendarDays) calendarDays.closest('.calendar-header')?.classList.add('hidden');
      if (timeSlotsSection) timeSlotsSection.classList.add('hidden');
      if (cancelBtn) cancelBtn.classList.add('hidden');
      if (confirmBtn) confirmBtn.classList.add('hidden');
      if (modalClose) modalClose.style.display = 'none';
      if (modalMessage) modalMessage.classList.add('hidden');

      if (modalSuccess) {
        modalSuccess.classList.remove('hidden');
        setTimeout(() => modalSuccess.querySelector('button, a')?.focus(), 100);
      }

      setTimeout(closeModal, 4000);
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