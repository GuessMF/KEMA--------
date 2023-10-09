// Информация о порогах и функциях для каждого элемента
document.addEventListener("DOMContentLoaded", function () {
  const elementsInfo = [
    // {
    //   element: document.querySelector("#percents"),
    //   threshold: 0.1,
    //   visibleCallback: elementVisibleHandler1,
    //   hiddenCallback: elementHiddenHandler1,
    // },
    {
      element: document.querySelector(".about-me__section"),
      threshold: 0.5,
      visibleCallback: elementVisibleHandler2,
      hiddenCallback: elementHiddenHandler2,
    },
    {
      element: document.querySelector(".how-it-works-2-section"),
      threshold: 0.1,
      visibleCallback: elementVisibleHandler3,
      hiddenCallback: elementHiddenHandler3,
    },
    {
      element: document.querySelector("#prices-section"),
      threshold: 0.1,
      visibleCallback: elementVisibleHandler4,
      hiddenCallback: elementHiddenHandler4,
    },
    {
      element: document.querySelector(".first-screen"),
      threshold: 0.5,
      visibleCallback: elementVisibleHandler5,
      hiddenCallback: elementHiddenHandler5,
    },
  ];

  // Создание экземпляра Intersection Observer для каждого элемента
  elementsInfo.forEach((info) => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          info.visibleCallback(info.element);
        } else {
          info.hiddenCallback(info.element);
        }
      },
      {threshold: info.threshold}
    );

    observer.observe(info.element);
  });

  // function elementVisibleHandler1(element) {

  // }

  // function elementHiddenHandler1(element) {

  // }

  function aboutMeCounter() {
    const counterElement1 = document.querySelector(".year-number");
    const counterElement2 = document.querySelector(".people-number");
    const counterElement3 = document.querySelector(".countries-number");
    const targetValue1 = 2;
    const targetValue2 = 15000;
    const targetValue3 = 17;
    const duration = 2000; // 2 секунды
    const interval = 10;
    const increment1 = (targetValue1 / duration) * interval * 1.5;
    const increment2 = (targetValue2 / duration) * interval * 2;
    const increment3 = (targetValue3 / duration) * interval * 1.5;
    let currentValue1 = 0;
    let currentValue2 = 0;
    let currentValue3 = 0;

    function updateCounter() {
      currentValue1 += increment1;
      currentValue2 += increment2;
      currentValue3 += increment3;
      if (currentValue1 >= targetValue1) {
        currentValue1 = targetValue1;
      }
      if (currentValue2 >= targetValue2) {
        currentValue2 = targetValue2;
      }
      if (currentValue3 >= targetValue3) {
        currentValue3 = targetValue3;
      }
      counterElement1.textContent = Math.round(currentValue1);
      counterElement2.textContent = Math.round(currentValue2);
      counterElement3.textContent = Math.round(currentValue3);

      if (
        currentValue1 === targetValue1 &&
        currentValue2 === targetValue2 &&
        currentValue3 === targetValue3
      ) {
        clearInterval(timer);
      }
    }

    const timer = setInterval(updateCounter, interval);
  }
  function elementVisibleHandler2(element) {
    aboutMeCounter();
  }
  function elementHiddenHandler2(element) {
    const counterElement1 = document.querySelector(".year-number");
    const counterElement2 = document.querySelector(".people-number");
    const counterElement3 = document.querySelector(".countries-number");

    counterElement1.textContent = 0;
    counterElement2.textContent = 0;
    counterElement3.textContent = 0;
  }

  const cardsWrapper = document.querySelectorAll(".how-it-works-card2");
  const devicesIMG = document.querySelectorAll(".devices-img");

  let num;
  if (window.innerWidth <= 600) {
    num = 1.5;
  } else {
    num = 1;
  }

  function visionDevices() {
    const rect1 = cardsWrapper[0].getBoundingClientRect();
    const rect2 = cardsWrapper[1].getBoundingClientRect();
    const rect3 = cardsWrapper[2].getBoundingClientRect();
    const rect4 = cardsWrapper[3].getBoundingClientRect();

    if (rect1.top <= 0 && rect1.bottom >= 0) {
      let scale = 0 + Math.abs(rect1.top) / devicesIMG[0].clientHeight / 2;
      devicesIMG[0].style.transform = "scale(" + scale * num * 1.2 + ")";
      console.log(rect1.top);
      if (rect1.top >= -50) {
        devicesIMG[0].style.transform = "scale(0)";
      }
    } else if (rect2.top < 0 && rect2.bottom > 0) {
      let scale = 0 + Math.abs(rect2.top) / devicesIMG[1].clientHeight / 2;
      devicesIMG[1].style.transform = "scale(" + scale * num * 1.2 + ")";

      if (rect2.top >= -50) {
        devicesIMG[1].style.transform = "scale(0)";
      }
    } else if (rect3.top < 0 && rect3.bottom > 0) {
      let scale = 0 + Math.abs(rect3.top) / devicesIMG[2].clientHeight / 2;
      devicesIMG[2].style.transform = "scale(" + scale * num + ")";

      if (rect3.top >= -50) {
        devicesIMG[2].style.transform = "scale(0)";
      }
    } else if (rect4.top < 0 && rect4.bottom > 0) {
      let scale = 0 + Math.abs(rect4.top) / devicesIMG[3].clientHeight / 2;
      devicesIMG[3].style.transform = "scale(" + scale * num + ")";
      if (rect4.top >= -50) {
        devicesIMG[3].style.transform = "scale(0)";
      }
    }
  }

  function elementVisibleHandler3(element) {
    window.addEventListener("scroll", visionDevices);
  }
  function elementHiddenHandler3(element) {
    window.removeEventListener("scroll", visionDevices);
  }

  function elementVisibleHandler4(element) {
    gsap.set(".prices-right-photo", {
      transform:
        "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(60deg) translateZ(0px)",
    });

    gsap.set(".prices-left-photo", {
      transform:
        "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(60deg) translateZ(0px)",
    });

    // Функция для обновления свойств блока
    function updateBlockPropertiesRight(scrollY) {
      const animatedBlock = document.querySelector(".prices-right-photo");
      const diff = Math.max(0, animatedBlock.getBoundingClientRect().top);
      const step = Math.max(0, Math.min(340, diff - 500));
      const translateXValue = 0 + step;
      const opacityValue = 1 - step / 340; // Изменение opacity в зависимости от шага
      animatedBlock.style.transform = `perspective(1200px) translateX(${translateXValue}px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg)  translateZ(0px)`;
      animatedBlock.style.opacity = opacityValue;
    }
    function updateBlockPropertiesLeft(scrollY) {
      const animatedBlock = document.querySelector(".prices-left-photo");
      const diff = Math.max(0, animatedBlock.getBoundingClientRect().top);
      const step = Math.max(0, Math.min(340, diff - 500));
      const translateXValue = 0 - step;
      const opacityValue = 1 - step / 340; // Изменение opacity в зависимости от шага
      animatedBlock.style.transform = `perspective(1200px) translateX(${translateXValue}px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg)  translateZ(0px)`;
      animatedBlock.style.opacity = opacityValue;
    }

    // Обработчик прокрутки страницы
    function handleScroll() {
      const currentScrollY = window.scrollY;
      updateBlockPropertiesRight(currentScrollY);
      updateBlockPropertiesLeft(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    ScrollTrigger.create({
      trigger: "#prices-section",
      start: "top 90%",
      end: "top 10%",
      onEnter: updateBlockPropertiesRight,
      updateBlockPropertiesLeft,
    });
  }
  function elementHiddenHandler4(element) {}

  function elementVisibleHandler5(element) {}
  function elementHiddenHandler5(element) {}
});

const showReviewBtn = document.querySelectorAll(".show-review");
const AllReviewSpans = document.querySelectorAll(".all-review");

showReviewBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.style.display = "none";
    AllReviewSpans[index].style.display = "contents";
  });
});

//Добавление фотки которая появляется раньше прогрузки страницы
function loadDelayedImageDesktop() {
  let img = new Image();
  img.src = "./assets/images/reviews/lilia.webp";
  img.alt = "card";
  img.class = "card-visual__image__asset";
  img.onload = function () {
    const cardBlock = document.querySelector(".first-card-block");
    cardBlock.appendChild(img);
  };
}
function loadDelayedImageMobile() {
  let img = new Image();
  img.src = "./assets/images/reviews_mobile/lilia.webp";
  img.alt = "card";
  img.class = "card-visual__image__asset";
  img.onload = function () {
    const cardBlock = document.querySelector(".first-card-block");
    cardBlock.appendChild(img);
  };
}

if (window.innerWidth >= 450) {
  window.onload = loadDelayedImageDesktop();
} else {
  window.onload = loadDelayedImageMobile();
}

const blocks = document.querySelectorAll(".question-block");

blocks.forEach((item) => {
  const btn = item.querySelector("button");
  const text = item.querySelector(".invisible-block");
  const plus = item.querySelector(".plus-svg");

  btn.addEventListener("click", () => {
    if (text.classList.contains("is__hidden")) {
      text.classList.remove("is__hidden");
      plus.style.transform = "rotateZ(45deg)";
    } else {
      text.classList.add("is__hidden");
      plus.style.transform = "rotateZ(0deg)";
    }
  });
});

// установка высоты

//мелкие карточки
function calculateHeight1() {
  const littleCardsSection = document.querySelector(".how-it-works-section");
  const littleCards = document.querySelector(".how-it-works-cards");
  const computedStyle1 = window.getComputedStyle(littleCards);
  const heightHIW1 = computedStyle1.getPropertyValue("height");
  littleCardsSection.style.height = heightHIW1;
}

// большие карточки
function calculateHeight2() {
  const BCSection = document.querySelector(".big-cards-section");
  const CustomCards = document.querySelector(".custom-cards"); // Замените на ваш селектор
  const computedStyle2 = window.getComputedStyle(CustomCards);
  const heightBCS = computedStyle2.getPropertyValue("height");
  BCSection.style.height = heightBCS;
}
// большие карточки mobile
function calculateHeight3() {
  const BCSection = document.querySelector(".big-cards-section");
  const CustomCards = document.querySelector(".custom-cards"); // Замените на ваш селектор
  const computedStyle2 = window.getComputedStyle(CustomCards);
  const heightBCS = computedStyle2.getPropertyValue("height");
  BCSection.style.height = heightBCS;
}

// устройства
function calculateHeight4() {
  const devicesSection = document.querySelector(".how-it-works-2-section");
  const devicesCards = document.querySelector(".how-it-works-cards2"); // Замените на ваш селектор
  const computedStyle3 = window.getComputedStyle(devicesCards);
  const heightDevicesCards = computedStyle3.getPropertyValue("height");
  devicesSection.style.height = heightDevicesCards;
}
if (window.innerWidth > 450) {
  window.onload = adjustBackground();
}
function adjustBackground() {
  const backgroundElement = document.querySelector(".about-me__wrapper");
  const windowHeight = window.innerHeight;

  backgroundElement.style.height = `${windowHeight}px`;
}

window.onload = calculateHeight1();
window.onload = calculateHeight2();
window.onload = calculateHeight3();
window.onload = calculateHeight4();
window.addEventListener("resize", function () {
  calculateHeight1();
  calculateHeight2();
  calculateHeight3();
  calculateHeight4();
});
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuMobile = document.querySelector(".mobile-menu");
const menuMobileItems = document.querySelector(".mobile-menu__items");

const openMobileMenu = () => {
  menuMobile.classList.remove("closed_menu");
  menuMobile.classList.add("opened_menu");
  document.documentElement.style.overflow = "hidden";
};

const closeMobileMenu = () => {
  menuMobile.classList.remove("opened_menu");
  menuMobile.classList.add("closed_menu");
  document.documentElement.style.overflow = "hidden auto";
};

openMenuBtn.addEventListener("click", () => {
  openMobileMenu();
});

closeMenuBtn.addEventListener("click", () => {
  closeMobileMenu();
});

menuMobileItems.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMobileMenu();
  }
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");

const mainScreen = document.querySelector("#smooth-wrapper");
const firstScreen = document.querySelector(".first-screen");
const screenHeight = window.innerHeight;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

setTimeout(function () {
  const firstH1 = document.querySelector(".h1__first_hero");

  firstH1.style.scale = "1";
}, 1000);

setTimeout(function () {
  const thirdIMG = document.querySelector(".img__third_hero");

  thirdIMG.style.scale = "1";
}, 2000);

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    firstScreen.style.display = "none";

    scrollToTopBtn.style.transform = "translateY(0px)";
  } else {
    firstScreen.style.display = "flex";
    scrollToTopBtn.style.transform = "translateY(200px)";
  }
});
