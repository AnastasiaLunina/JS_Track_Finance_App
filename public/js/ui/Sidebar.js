const body = document.getElementsByTagName("body");

/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    sidebarToggle.addEventListener("click", () => {
      body[0].classList.toggle("sidebar-open");
      body[0].classList.toggle("sidebar-collapse");
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {

    const registerButton = document.getElementsByClassName("menu-item_register");
    registerButton[0].addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal('register').open();
    });
    const loginButton = document.getElementsByClassName("menu-item_login");

    loginButton[0].addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal('login').open();
    });
    const logOutButton = document.getElementsByClassName("menu-item_logout");
    logOutButton[0].addEventListener("click", () => {

      User.logout(User.current(), (err, response) => {
        if (response && response.success) {
          App.setState('init');
        }
      });
    });
  }
}
