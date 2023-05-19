'use strict'
let swiper = new Swiper(".carSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper__button-nextBuntton",
        prevEl: ".swiper__button-prevBuntton",
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });   

document.getElementById("serviceButton").onclick = () => {
  document.getElementById("service").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}
document.getElementById("companyButton").onclick = () => {
  document.getElementById("company").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}
document.getElementById("vacancyButton").onclick = () => {
  document.getElementById("footer").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}
document.getElementById("contactsButton").onclick = () => {
  document.getElementById("footer").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}
document.getElementById("oficesButton").onclick = () => {
  document.getElementById("footer").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}
document.getElementById("moreInfoButton").onclick = () => {
  document.getElementById("company").scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
}

document.getElementById("russianLeguage").onclick = () => {
  document.getElementById("cargoTransportation").textContent = "Грузовые перевозки";
  document.getElementById("serviceButton").textContent = "УСЛУГИ";
  document.querySelector(".header__ofices_right").textContent = "Наши офисы";
  document.getElementById("companyButton").textContent = "О КОМПАНИИ";
  document.getElementById("vacancyButton").textContent = "ВАКАНСИИ"
  document.getElementById("contactsButton").textContent = "КОНТАКТЫ"
  document.getElementById("transportation").textContent = "Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов"
  document.getElementById("euroCargo").textContent = "грузоперевозки по европе"
  document.getElementById("cantryes").textContent = "Страны Евросоюза, а также Украина, Белоруссия со всеми документами."
  document.getElementById("moreInfoButton").textContent = "ПОДРОБНЕЕ"
  document.getElementById("nextButton").textContent = "СЛЕД"
  document.getElementById("prevButton").textContent = "НАЗАД"
  document.getElementById("company").textContent = "О КОМПАНИИ"
  document.getElementById("aboutCompany").textContent = "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн."
  document.getElementById("ofices").textContent = "ОФИСОВ"
  document.getElementById("oficesCantryes").textContent = "В Европе и СНГ"
  document.getElementById("cargoCars").textContent = "ГРУЗОВИКОВ"
  document.getElementById("workers").textContent = "РАБОТНИКОВ"
  document.getElementById("professionals").textContent = "профессионалов"
  document.getElementById("developed").textContent = "Разработано - D-E-N.ru"
  document.getElementById("adress").textContent = "123456, Санкт-Петербург, Невский пр-кт 127"
  document.getElementById("service").textContent = "УСЛУГИ"
  for (const elem of document.querySelectorAll(".element__title")) {
    elem.textContent = "АВИАПЕРЕВОЗКИ"
  }
  document.getElementById("russianLeguage").style.fontWeight = 700
  document.getElementById("russianLeguage").style.opacity = 1
  document.getElementById("englishLeguage").style.fontWeight = 400
  document.getElementById("englishLeguage").style.opacity = 0.5


}


document.getElementById("englishLeguage").onclick = () => {
  document.getElementById("cargoTransportation").textContent = "Cargo transportation";
  document.getElementById("serviceButton").textContent = "SERVICES";
  document.querySelector(".header__ofices_right").textContent = "Our offices";
  document.getElementById("companyButton").textContent = "ABOUT COMPANY";
  document.getElementById("vacancyButton").textContent = "JOB OPENINGS"
  document.getElementById("contactsButton").textContent = "CONTACTS"
  document.getElementById("transportation").textContent = "Transportation of bulky goods in Russia and Europe. Full forwarding, insurance, packaging and storage of goods"
  document.getElementById("euroCargo").textContent = "cargo transportation in europe"
  document.getElementById("cantryes").textContent = "EU countries, as well as Ukraine, Belarus with all documents."

  document.getElementById("moreInfoButton").textContent = "MORE DETAILS"
  document.getElementById("nextButton").textContent = "NEXT"
  document.getElementById("prevButton").textContent = "PREV"
  document.getElementById("company").textContent = "ABOUT COMPANY"
  document.getElementById("aboutCompany").textContent = "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн."
  document.getElementById("ofices").textContent = "OFFICES"
  document.getElementById("oficesCantryes").textContent = "In europe and UIS"
  document.getElementById("cargoCars").textContent = "TRUCKS"
  document.getElementById("workers").textContent = "WORKERS"
  document.getElementById("professionals").textContent = "professionals"
  document.getElementById("developed").textContent = "Developed - D-E-N.ru"
  document.getElementById("adress").textContent = "127 Nevsky Ave., Saint Petersburg, 123456"
  document.getElementById("service").textContent = "SERVICES"
  
  for (const elem of document.querySelectorAll(".element__title")) {
    elem.textContent = "AIRCARGO"
  }

  document.getElementById("russianLeguage").style.fontWeight = 400
  document.getElementById("russianLeguage").style.opacity = 0.5
  document.getElementById("englishLeguage").style.fontWeight = 700
  document.getElementById("englishLeguage").style.opacity = 1

}

