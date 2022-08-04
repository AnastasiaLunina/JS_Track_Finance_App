/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */

  onSubmit(options) {

    User.register(options, (e, response) => {
      if (response.success) {
        const registerForm = document.querySelector("#register-form");
        registerForm.reset();
        App.setState('user-logged');
        App.getModal('register').close();
      }
    });
  }
}

