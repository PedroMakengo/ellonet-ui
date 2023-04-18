AOS.init();

// Menu mobile
const menu = document.querySelector("header .menu");
function MenuMobile(btnOpen, btnClose) {
  btnOpen.addEventListener("click", function () {
    menu.style.display = "flex";
  });

  btnClose.addEventListener("click", function () {
    menu.style.display = "none";
  });
}

const btnOpenMenu = document.querySelector("#open-menu");
const btnCloseMenu = document.querySelector("#close-menu");
MenuMobile(btnOpenMenu, btnCloseMenu);

// Máquina de escrita
function TypeWriterDescribeEllonet(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((letra, i) => {
    setTimeout(() => (element.innerHTML += letra), 75 * i);
  });
}

const title = document.querySelector(".meaching");
TypeWriterDescribeEllonet(title);

// Tab Course
function TabCouse(contentButton, contentCourse) {
  for (let i = 0; i < contentButton.length; i++) {
    contentButton[i].addEventListener("click", function (event) {
      event.preventDefault();
      const contentButtonActive = document.querySelector(
        ".tab-course button.active"
      );
      const contentCourseActive = document.querySelector(".courses.tab-active");

      contentButtonActive.classList.remove("active");
      contentButton[i].classList.add("active");

      contentCourseActive.classList.remove("tab-active");
      contentCourse[i].classList.add("tab-active");
    });
  }
}

const tabNavegator = document.querySelectorAll(".tab-course button");
const contentTab = document.querySelectorAll(".content-courses .courses");
TabCouse(tabNavegator, contentTab);

// Formulário
// function NewsletterForm(btnOpenForm, btnCloseForm, contentForms) {
//   const company = document.querySelector(".ellonet-growth-company");
//   btnOpenForm.addEventListener("click", function (event) {
//     event.preventDefault();
//     btnOpenForm.style.display = "none";

//     contentForms.style.display = "block";
//     company.classList.add("p-4");
//   });

//   btnCloseForm.addEventListener("click", function (event) {
//     event.preventDefault();
//     company.classList.remove("p-4");
//     contentForms.style.display = "none";

//     btnOpenForm.style.display = "flex";
//   });
// }

// const btnOpen = document.querySelector(".btn-open");
// const btnClose = document.querySelector(".form button");
// const content = document.querySelector(".form");
// NewsletterForm(btnOpen, btnClose, content);

// Open Modal
const modal = document.querySelector("#modal");
function OpenPresentationModal() {
  const openModal = document.querySelectorAll(".openModel");
  for (buttonOpenModal of openModal) {
    buttonOpenModal.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("open-modal");
    });
  }
}

OpenPresentationModal();

// Close Modal

function CloseApresentationModal() {
  const close = document.querySelector("#close");
  close.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("open-modal");
  });
}

CloseApresentationModal();

// Apresentar o ano atual no footer
function DisplayYearNow() {
  const elementYear = document.querySelector(".year");
  const dateYearNow = new Date().getFullYear();
  elementYear.innerHTML = dateYearNow;
}
DisplayYearNow();
