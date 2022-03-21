const Menu = {
  element: document.querySelector('nav.menu-wrap'),

  toggleVisibility() {
    Menu.element.classList.toggle('open');
  }
}
