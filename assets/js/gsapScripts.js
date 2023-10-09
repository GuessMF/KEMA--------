const firstScreenText = document.querySelector(".first-screen-text");
const firstTrigger = document.querySelector(".body");
const block = document.querySelector(".Steamroller_pink");
const variableText = document.querySelector(".variable-text");
const topColor = document.querySelector(".topColorBlock");

ScrollTrigger.create({
  trigger: block,
  start: "top 25%",
  end: "bottom 75%",
  onUpdate: (self) => {
    const progress = self.progress;
    const bottomHalfHeight = 100 - progress * 100;
    block.style.clipPath = `inset(0px 0px ${bottomHalfHeight}%)`;
  },
});

//Цветок
const flower = document.querySelector(".Image_flower");
const flowerBottomText = document.querySelector(".flower-box-text-bottom");
const flowerSection = document.querySelector(".Flower_section");
gsap.to(flower, {
  scale: 1,
  scrollTrigger: {
    trigger: flowerSection,
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});

gsap.to(flowerBottomText, {
  scale: 1,
  scrollTrigger: {
    trigger: flowerSection,
    start: "center center",
    end: "top 70%",
    scrub: 1,
  },
});

//Большие карточки
const cards = document.querySelectorAll(".custom-card");
if (window.innerWidth > 650) {
  cards.forEach((card, index) => {
    gsap.set(card, {scale: 1});
    gsap.to(card, {
      scale: 0.95 + index * 0.05,
      y: 0,
      scrollTrigger: {
        trigger: card,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
}

// Карточки chainzoku;
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-visual");
  const cardsText = document.querySelectorAll(".card-text");
  const prevButton = document.querySelector(".chainzoku-prev-btn");
  const nextButton = document.querySelector(".chainzoku-next-btn");

  let currentIndex = 0;
  function updateCards() {
    cards.forEach((card, index) => {
      const parent = card.parentElement;
      if (index === currentIndex) {
        card.classList.add("active-card");
        parent.style.zIndex = "15";
        card.classList.remove("pre-active-card");
        cardsText[index].classList.add("active-card-text");
        cardsText[index].classList.remove("card-text-hidden");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("pre-active-card");
        parent.style.zIndex = "14";
        cardsText[index].classList.remove("active-card-text");
        cardsText[index].classList.add("card-text-hidden");
      } else {
        card.classList.remove("active-card", "pre-active-card");
        parent.style.zIndex = "";
        cardsText[index].classList.remove("active-card-text");
        cardsText[index].classList.add("card-text-hidden");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    const randomX = -2000 + Math.random() * 4500;
    const randomY = -2000 + Math.random() * 4500;
    const randomZ = -2000 + Math.random() * 4500;
    gsap.to(cardsText[currentIndex], {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(cards[currentIndex], {
      duration: 0.8,
      x: randomX,
      y: randomY,
      z: randomZ,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(cards[currentIndex], {
          x: 0,
          y: 0,
          z: 0,
        });
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
      },
    });
  });

  prevButton.addEventListener("click", () => {
    const randomX = -2000 + Math.random() * 4500;
    const randomY = -2000 + Math.random() * 4500;
    const randomZ = -2000 + Math.random() * 4500;

    gsap.to(cards[currentIndex], {
      duration: 0.8,
      x: randomX,
      y: randomY,
      z: randomZ,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(cards[currentIndex], {
          x: 0,
          y: 0,
          z: 0,
        });
        cards[currentIndex].classList.remove("active-card");
        cardsText[currentIndex].classList.remove("active-card-text");
        cardsText[currentIndex].classList.add("card-text-hidden");

        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
      },
    });
  });

  updateCards();
});

//Первые мелкие карточки
const HIWSection1 = document.querySelector(".how-it-works-section");

const scrollableContent = document.querySelector(".first-cards-container");
const cards1 = document.querySelector(".how-it-works-cards");
const computedStyle = window.getComputedStyle(cards1);

function handleScroll() {
  const isVisible = ScrollTrigger.isInViewport(HIWSection1);

  if (isVisible) {
    window.addEventListener("scroll", () => {
      const rect = triggerCard1.getBoundingClientRect();
      if (rect.top < 1) {
        gsap.to(bottomText1, {opacity: 1, duration: 0, ease: "power2.inOut"});
        gsap.to(topText1, {opacity: 0, duration: 0, ease: "power2.inOut"});
      } else if (rect.top > 2) {
        gsap.to(topText1, {opacity: 1, duration: 0, ease: "power2.inOut"});
        gsap.to(bottomText1, {opacity: 0, duration: 0, ease: "power2.inOut"});
      }
    });
  }
}

ScrollTrigger.create({
  trigger: HIWSection1,
  start: "top center",
  end: "bottom bottom",
  onUpdate: handleScroll,
});

const bottomText1 = document.querySelector(
  ".how-it-works-background-bottom-text"
);
const triggerCard1 = document.querySelector(".trigger-card-1");
const topText1 = document.querySelector(".how-it-works-background-text");

//Красные карточки
const forget = document.querySelector(".journeys__wrapper");
const leftIMG = document.querySelector(".image-15");
const centerIMG = document.querySelector(".image-17");
const rightIMG = document.querySelector(".image-16");

const bottomText = document.querySelector(".journeys__bottom");
const mobileBlock = document.querySelector(".journeys__bottom__mobile");

const topMobileIMG = document.querySelector(".mobile-top-img");
const middleMobileIMG = document.querySelector(".mobile-middle-img");
const bottomMobileIMG = document.querySelector(".mobile-bottom-img");

const mobileTopText = document.querySelector(".feature__card__mobile__header");

gsap.to(leftIMG, {
  x: 0,
  scrollTrigger: {
    trigger: centerIMG,
    start: "center bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});
gsap.to(rightIMG, {
  x: 0,
  scrollTrigger: {
    trigger: centerIMG,
    start: "center bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});

if (window.innerWidth > 430) {
  gsap.to(bottomText, {
    scale: 1,
    scrollTrigger: {
      trigger: bottomText,
      start: "top 80%",
      end: "top 100%",
      scrub: 1,
    },
  });
}

gsap.to(topMobileIMG, {
  x: 0,
  scrollTrigger: {
    trigger: topMobileIMG,
    start: "center bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});

gsap.to(middleMobileIMG, {
  x: 0,
  scrollTrigger: {
    trigger: middleMobileIMG,
    start: "bottom bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});

gsap.to(bottomMobileIMG, {
  y: 0,
  scrollTrigger: {
    trigger: bottomMobileIMG,
    start: "center bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});

gsap.to(mobileTopText, {
  x: 0,
  scrollTrigger: {
    trigger: topMobileIMG,
    start: "center bottom",
    end: "center bottom",
    scrub: 0.5,
  },
});

gsap.to(mobileBlock, {
  scale: 1,
  scrollTrigger: {
    trigger: mobileBlock,
    start: "top center",
    end: "center center",
    scrub: 1,
  },
});

const whatSection = document.getElementById("what");
const ringBlocks = document.querySelector(".rings-block");
const onlineZal = document.querySelector(".online-zal");
const redRing = document.querySelector(".elegance");
const greenRing = document.querySelector(".sport");
const blueRing = document.querySelector(".confidence");
const yellowRing = document.querySelector(".energy");
const dymanicMeditation = document.querySelector(".dymamic-meditation");

gsap.to(ringBlocks, {
  scale: 0,
  scrollTrigger: {
    trigger: whatSection,
    start: "center center",
    end: "center center",
    scrub: 1,
  },
});
gsap.to(onlineZal, {
  scale: 1,
  scrollTrigger: {
    trigger: whatSection,
    start: "center center",
    end: "center center",
    scrub: 2,
  },
});

//Persents
const superLiteBlock = document.querySelector(".super-lite-block");
const liteBlock = document.querySelector(".lite-block");
const energyBlock = document.querySelector(".energy-block");
const green1 = document.querySelector(".super-lite-gold");
const superLiteNum = document.querySelector(".super-lite-num");
const liteNum = document.querySelector(".lite-num");
const energyNum = document.querySelector(".energy-num");

const green2 = document.querySelector(".lite-gold");
const green3 = document.querySelector(".energy-gold");

const startClipPath = "inset(100% 0% 0%)";
const endClipPath1 = "inset(70% 0% 0%)";
const endClipPath2 = "inset(40% 0% 0%)";
const endClipPath3 = "inset(0% 0% 0%)";

function percentCounter(targetValue, targetToChange, dur) {
  const duration = dur; // 2 секунды
  const interval = 10;
  const increment = (targetValue / duration) * interval;
  let currentValue = 0;
  function updateCounter() {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
    }
    targetToChange.textContent = Math.round(currentValue) + "%";
    if (currentValue === targetValue) {
      clearInterval(timer);
    }
  }
  const timer = setInterval(updateCounter, interval);
}

gsap.to(green1, {
  clipPath: endClipPath1,
  scrollTrigger: {
    trigger: superLiteBlock,
    start: "top center",
    end: "center 70%",
    scrub: 3,
    onEnter: () => {
      percentCounter(30, superLiteNum, 1000);
    },
    onLeave: () => {
      superLiteNum.textContent = "0%";
    },
  },
});
gsap.to(green2, {
  clipPath: endClipPath2,
  scrollTrigger: {
    trigger: liteBlock,
    start: "top center",
    end: "center 70%",
    scrub: 2,
    onEnter: () => {
      percentCounter(60, liteNum, 2000);
    },
    onLeave: () => {
      liteNum.textContent = "0%";
    },
  },
});
gsap.to(green3, {
  clipPath: endClipPath3,
  scrollTrigger: {
    trigger: energyBlock,
    start: "top center",
    end: "center 70%",
    scrub: 3,
    onEnter: () => {
      percentCounter(100, energyNum, 2000);
    },
    onLeave: () => {
      energyNum.textContent = "0%";
    },
  },
  ease: "linear",
});
//

const awayFromEyes = document.querySelector(".away-from-eyes__cards");
const firstAFECard = document.querySelector(".away-from-eyes__first-card");
const secondAFECard = document.querySelector(".away-from-eyes__second-card");
const thirdAFECard = document.querySelector(".away-from-eyes__third-card");

gsap.to(firstAFECard, {
  scale: 1,
  scrollTrigger: {
    trigger: awayFromEyes,
    start: "top 90%",
    end: "top 70%",
    scrub: 0.8,
  },
});
gsap.to(secondAFECard, {
  scale: 1,
  scrollTrigger: {
    trigger: awayFromEyes,
    start: "top 70%",
    end: "top 50%",
    scrub: 0.8,
  },
});

gsap.to(thirdAFECard, {
  scale: 1,
  scrollTrigger: {
    trigger: awayFromEyes,
    start: "top 50%",
    end: "top 30%",
    scrub: 0.8,
  },
});
//Большие карточки

const BCMenu = document.querySelector(".big-cards-menu");
const menuItems = document.querySelectorAll(".menu-item");
const bigCards = document.querySelectorAll(".big-card-card");
const liCards = document.querySelectorAll(".licard");
let currentCardIndex = 1;

function updateMenuActive(index) {
  menuItems.forEach((menuItem, i) => {
    if (i === index) {
      menuItem.classList.add("menu-active");
    } else {
      menuItem.classList.remove("menu-active");
    }
  });
}

bigCards.forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      currentCardIndex = index;
      updateMenuActive(currentCardIndex);
    },
    onLeaveBack: () => {
      currentCardIndex = index - 1;
      updateMenuActive(currentCardIndex);
    },
  });
});
updateMenuActive(currentCardIndex);

menuItems.forEach((menuItem, index) => {
  const computedStyle5 = window.getComputedStyle(liCards[1]);
  const colH = parseFloat(computedStyle5.getPropertyValue("height"));
  const colP = parseFloat(computedStyle5.getPropertyValue("padding-top"));
  let num = 0;
  const colG = (window.innerWidth * num) / 2;
  const colibrate = colH + colP + colG;
  let scrollMultiplier = colH;
  menuItem.addEventListener("click", () => {
    const targetCard = liCards[index + 1];
    if (targetCard) {
      const targetCardTop = targetCard.offsetTop;
      let targetScrollPosition = targetCardTop;
      if (index > currentCardIndex) {
        targetScrollPosition = targetCardTop;
      } else if (index < currentCardIndex) {
        const indexDifference = Math.abs(currentCardIndex - index);
        targetScrollPosition -= indexDifference * scrollMultiplier;
      }
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
      currentIndex = index;
    }
  });
});
// Big cards mobile
//
//
// const mobileMenuItems = document.querySelectorAll(".mobile__changedMenuItem");
const bigMobileCards = document.querySelectorAll(".new-card__wrapper");
const newCardChanged = document.querySelector(".new-card__changed");
let currentCardIndexMobile;
const mobileMenuArr = [
  "КЛЮЧ К СТРОЙНОСТИ",
  "КЛЮЧ К РАЗВИТИЮ",
  "КЛЮЧ К РАСКРЕПОЩЕНИЮ",
  "КЛЮЧ К ЗДОРОВЬЮ",
  "КЛЮЧ К ЖЕНСТВЕННОСТИ",
];

function updateMobileMenuActive(index) {
  gsap.to(newCardChanged, {
    fontSize: "1px",
    duration: 0.3,
    onComplete: function () {
      newCardChanged.textContent = mobileMenuArr[index];
      gsap.to(newCardChanged, {
        fontSize: "18px",
        duration: 0.3,
      });
    },
  });
}

bigMobileCards.forEach((card, index) => {
  const liToVision = card.querySelectorAll(".opacity-li");
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      liToVision.forEach((li, index) => {
        ScrollTrigger.create({
          trigger: li,
          start: "top 20%",
          end: "bottom center",
          onEnter: () => {
            li.style.opacity = "1";
          },
          onLeaveBack: () => {
            li.style.opacity = "0";
          },
        });
      });

      currentCardIndexMobile = index;
      updateMobileMenuActive(currentCardIndexMobile);
    },
    onLeaveBack: () => {
      liToVision.forEach((li, index) => {
        li.style.opacity = "0";
      });
      currentCardIndexMobile = index - 1;
      updateMobileMenuActive(currentCardIndexMobile);
    },
  });
});
updateMobileMenuActive(currentCardIndexMobile);

const computedStyleBG = window.getComputedStyle(bigCards[0]);
const paddingTopBG = parseFloat(computedStyle.getPropertyValue("padding-top"));
if (window.innerWidth >= 650) {
  window.addEventListener("scroll", () => {
    const rect = bigCards[0].getBoundingClientRect();
    if (rect.top - paddingTopBG < 10) {
      gsap.to(BCMenu, {opacity: 1, duration: 0, ease: "power2.inOut"});
    } else if (rect.top - paddingTopBG > 10) {
      gsap.to(BCMenu, {opacity: 0, duration: 0, ease: "power2.inOut"});
    }
  });
}

// const qqq = document.querySelector(".feature__card__mobile__header");
