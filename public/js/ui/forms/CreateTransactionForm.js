/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.element = element;
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    if (!User.current()) {
      return;
    } else
      Account.list(User.current(), (e, response) => {

    if (response.success) {
      const select = this.element.querySelector(".accounts-select");
      select.innerHTML = '';
      response.data.forEach(element => {
      select.insertAdjacentHTML("beforeend", `<option value="${element.id}">${element.name}</option>`);
      });
    }
  });
}

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(options) {
    Transaction.create(options, (e, response) => {

      if (response.success) {
        this.element.reset();
        App.getModal('newExpense').close();
        App.getModal('newIncome').close();
        App.update();
      }
    });
  }
}
