/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
 class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    if (element === undefined) {
      throw new Error('No such an element');
    }
    this.element = element;
    this.registerEvents();
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
    for (let i =0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', () => this.onClose());
    }

    // Add possibility to close modal by clicking outside of modal and pressing escape button
    const closeModal = Array.from(document.querySelectorAll('.modal'));

    closeModal.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.close();
          }
        });
      document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            this.close();
        }
      });
    });
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose() {
    this.close(); 
  }


  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style = 'display: block';
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style = 'display: none';
  }
}