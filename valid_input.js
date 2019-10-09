/*------------------------------7-----------------------*/
const link = document.querySelector('#link');
const linkValid = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

document.querySelector('.popup-edit__button').addEventListener('click',(event)=> {
  event.preventDefault();
  document.querySelector('.user-info__name').textContent= formEdit.elements.user.value;
  document.querySelector('.user-info__job').textContent = formEdit.elements.prof.value;
  editPopup.close();
});


  form.addEventListener('input', (elem) => {
      validate(event.target);
      validPopup(elem);
  });

  formEdit.addEventListener('input', (elem) => {
    if (elem.value==document.querySelector('.user-info__name').textContent || 
    elem.value==document.querySelector('.user-info__job').textContent) {
    setError();
    } else if (elem.value!==document.querySelector('.user-info__name').textContent || 
    elem.value!==document.querySelector('.user-info__job').textContent) {
    validate(event.target);
    validEditPopup(elem);
    }
  });


  function validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
     if (element.value.length == 0) {
      setError(event);
      errorElement.textContent = 'Это обязательное поле';
      return false
    } else if (!element.checkValidity()) {
      errorElement.textContent = 'Должно быть от 2 до 30 символов';
      setError(event);
      return false
    } else if (!isLink(element)) {
      errorElement.textContent = 'Здесь должна быть ссылка';
      setError(element);
      return false
    }  else {
      errorElement.textContent = '';
      resetError(event.target);

    }
    return true
    }

  function isLink(element) {
    let test = link.value.length === 0 || linkValid.test(link.value)
    if (element.id !== link.id ) {
      return true
    } else if (!test) {
      setError(link);
        return false
      } 
      return true
    }


  function setError() {
    document.querySelector('.popup-edit__button').setAttribute('disabled',true);
    document.querySelector('.popup-edit__button').classList.remove('popup-edit__button_active');
    document.querySelector('.popup__button').setAttribute('disabled',true);
    document.querySelector('.popup__button').classList.remove('popup__button_active');
  }


  function resetError() {
    document.querySelector('.popup-edit__button').classList.add('popup-edit__button_active');
    document.querySelector('.popup-edit__button').removeAttribute('disabled',true);
    document.querySelector('.popup__button').classList.add('popup__button_active');
    document.querySelector('.popup__button').removeAttribute('disabled',true);
  }

  function validEditPopup(event) {
     event.preventDefault();
     let inputsuser = Array.from(formEdit.elements);
     console.log(inputsuser);
     inputsuser.forEach((elem) => {
      if (elem.id !== submit.id) {
        validate(elem);
      }
    });
  }
  
  function validPopup(event) {
    event.preventDefault();
    let inputsuser = Array.from(form.elements);
    console.log(inputsuser);
    inputsuser.forEach((elem) => {
     if (elem.id !== submit.id && elem.id == link.id) {
       validate(elem);
     } else if (elem.id == link.id) {
       isLink(elem);
     }
   });
 }

// Хорошо
// Выполнен функционал задания
// Можно обратить внимание на форматирование кода в едином стиле
// очистку лишних переменных