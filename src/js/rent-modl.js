// Получаем форму по её id
const form = document.getElementById('myForm');

// Получаем модальное окно по его id
const modal = document.getElementById('myModal');

// Получаем кнопку отправки формы
const submitButton = document.getElementById('submitButton');

// Получаем кнопку закрытия модального окна
const closeButton = document.getElementById('closeButton');

// Получаем основной контейнер страницы
const pageContainer = document.querySelector('.page-container');

// Скрываем модальное окно изначально
modal.hidden = true;

// Функция для отображения модального окна и отключения активности страницы
function showModal() {
  modal.hidden = false;
  pageContainer.style.pointerEvents = 'none';
  modal.style.pointerEvents = 'auto';
}

// Функция для скрытия модального окна, включения активности страницы и очистки полей формы
function hideModal() {
  modal.hidden = true;
  pageContainer.style.pointerEvents = 'auto';
}

// Функция для проверки заполнения обязательных полей
function validateForm() {
  // Проверяем, все ли обязательные поля заполнены
  const requiredFields = document.querySelectorAll('.required-field');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (field.value.trim() === '') {
      isValid = false;
    }
  });

  return isValid;
}

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  if (validateForm()) {
    // Отправляем данные формы
    const formData = new FormData(form);
    // Вместо этого кода выполните логику отправки данных на сервер
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    // Отображаем модальное окно, отключаем активность страницы и очищаем поля формы
    showModal();
    form.reset();
  } else {
    // Показываем сообщение о незаполненных полях или предпринимаем другие действия
    console.log('Пожалуйста, заполните все обязательные поля.');
  }
});

// Обработчик события нажатия на кнопку закрытия
closeButton.addEventListener('click', function() {
  // Скрываем модальное окно, включаем активность страницы
  hideModal();
});
