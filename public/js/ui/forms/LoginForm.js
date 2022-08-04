/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(options) {

    User.login(options, (e, response) => {
      if (response.success) {
        const loginForm = document.querySelector("#login-form");
        loginForm.reset();
        App.setState('user-logged');
        App.getModal('login').close();
      }
    });
  }
}

