document.addEventListener("DOMContentLoaded", () => {
  const inputFile = document.getElementById("file");
  const inputFileLab = document.querySelector(".form__file");
  const inputFileLabel = document.querySelector(".form__file-button-text");
  const inputRange = document.getElementById("range");
  const percentVal = document.getElementById("percent-value");
  const selectType = document.getElementById("type");
  const inputEmail = document.getElementById("email");
  const inputName = document.getElementById("name");
  const btnForm = document.querySelector(".order__btn");
  const orderForm = document.querySelector(".order__form");
  const btnBusiness = document.querySelector(".business__btn_order");
  const businessBlock = document.getElementById("order");
  const menuBtn = document.querySelector(".menu");
  const menuList = document.querySelector(".header__list");
  const headerLinks = document.querySelectorAll(".header__link");

  inputFile.addEventListener("change", loadFile);
  inputRange.addEventListener("change", changePercent);
  percentVal.innerText = inputRange.value + " %";
  btnForm.addEventListener("click", validationForm);
  if (inputFile.files.length > 0) {
    inputFileLabel.innerText = "Выбрано файлов: " + inputFile.files.length;
  }
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuList.classList.toggle("open");
  });
  headerLinks.forEach((item) => {
    item.addEventListener("click", () => {
      menuList.classList.remove("open");
      menuBtn.classList.remove("open");
    });
  });

  btnBusiness.addEventListener("click", () => {
    const heightHeader = document.querySelector(".header").clientHeight;
    // console.log(heightHeader);
    businessBlock.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  function loadFile() {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles) inputFileLabel.innerText = "Выбрано файлов: " + countFiles;
    else inputFileLabel.innerText = "Прикрепить файл";
  }
  function changePercent() {
    percentVal.innerText = `${this.value} %`;
  }
  function validationForm() {
    if (!selectType.value) {
      console.log(selectType.value);
      selectType.classList.add("error");
    }
    if (!inputEmail.value) {
      inputEmail.classList.add("error");
    }
    if (!inputName.value) {
      inputName.classList.add("error");
    }
    if (!inputRange.value === 0) {
      inputRange.classList.add("error");
    }
    if (inputFile) {
      console.log(inputFile.files);
      inputFileLab.classList.add("error");
    }
  }
});
