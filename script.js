(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !expanded);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const search = document.querySelector('[data-course-search]');
  const department = document.querySelector('[data-course-department]');
  const courseCards = [...document.querySelectorAll('[data-course-card]')];
  const courseEmpty = document.querySelector('[data-course-empty]');

  const filterCourses = () => {
    if (!search || !department) return;
    const query = search.value.trim().toLowerCase();
    const selectedDepartment = department.value;
    let visibleCount = 0;

    courseCards.forEach((card) => {
      const matchesText = card.textContent.toLowerCase().includes(query);
      const matchesDepartment = selectedDepartment === 'all' || card.dataset.department === selectedDepartment;
      const visible = matchesText && matchesDepartment;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (courseEmpty) courseEmpty.hidden = visibleCount > 0;
  };

  search?.addEventListener('input', filterCourses);
  department?.addEventListener('change', filterCourses);

  document.querySelectorAll('[data-local-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      const invalid = [...form.querySelectorAll('[required]')].find((field) => !field.checkValidity());

      form.querySelectorAll('[data-error-for]').forEach((error) => { error.textContent = ''; });
      if (invalid) {
        invalid.setAttribute('aria-invalid', 'true');
        const error = form.querySelector(`[data-error-for="${invalid.id}"]`);
        if (error) error.textContent = invalid.validity.valueMissing ? 'This field is required.' : 'Enter a valid value.';
        status.textContent = 'Please review the highlighted field and try again.';
        status.dataset.state = 'error';
        invalid.focus();
        return;
      }

      form.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute('aria-invalid'));
      status.textContent = 'Your entries passed the browser checks. Nothing was sent or saved; connect a secure backend to receive enquiries.';
      status.dataset.state = 'success';
      form.reset();
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        if (field.checkValidity()) field.removeAttribute('aria-invalid');
      });
    });
  });

  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('[data-lightbox-caption]');
    const closeButton = lightbox.querySelector('[data-lightbox-close]');
    let previousFocus;

    document.querySelectorAll('[data-gallery-image]').forEach((button) => {
      button.addEventListener('click', () => {
        const thumbnail = button.querySelector('img');
        previousFocus = button;
        image.src = button.dataset.full || thumbnail.src;
        image.alt = thumbnail.alt;
        caption.textContent = thumbnail.alt;
        lightbox.showModal();
        closeButton.focus();
      });
    });

    closeButton.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('close', () => previousFocus?.focus());
  }

  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) {
    const updateBackToTop = () => backToTop.classList.toggle('visible', window.scrollY > 420);
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
})();
