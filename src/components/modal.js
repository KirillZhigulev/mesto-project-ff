//Функция обработки нажатия на Esc

function escKeyHandler(evt) {
    if (evt.key === "Escape") {
      closeModal(document.querySelector(".popup_is-opened"));
    }
  }
  
//Функция открытия модального окна

  export function openModal(element) {
    element.classList.add("popup_is-opened");
    document.addEventListener("keydown", escKeyHandler);
  }
 
//Функция закрытия модального окна

  export function closeModal(element) {
    element.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", escKeyHandler);
  }
  
//Функция события клика по оверлею

  export function overlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
    }
  }