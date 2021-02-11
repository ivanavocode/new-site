"use strict";
// document.addEventListener("DOMContentLoaded", Init);
// function Init() {
  const body = document.querySelector("body");
  const header = document.getElementById("header");
  const hideMenu = document.getElementById("hideMenu");
  const mainMenu = document.getElementById("mainMenu");
  const Accordion = document.getElementById("Accordion");
  const menuList = mainMenu.getElementsByClassName("sub-menu");
  const MenuLi = mainMenu.getElementsByClassName("menu-item");
  const MenuItem = mainMenu.getElementsByClassName("menu-item_link");
  const sideContainer = document.getElementsByClassName("sideContainer");
  const mArrowLeft = document.getElementById("mArrowLeft");
  const mLogo = document.getElementById("mLogo");
  const mform = document.getElementById("mFormMenuSearch");
  let i;

  const hoverMenu = "hover-container";
  let mouseBoolean = true;

  //  главное меню
  function toggle(num, bool) {
    header.classList.add(hoverMenu);
    // если отрабатывает отбработчик onmouseover на ссылки в меню
    if (bool == true) {
      header.classList.add(hoverMenu);
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove("toggle-menu");
        MenuItem[i].classList.remove("hover-line");
      }
      menuList[num].classList.add("toggle-menu");
      MenuItem[num].classList.add("hover-line");
    }
    //  если отрабатывает mouseleave bool =  false
    if (bool == false) {
      header.classList.remove(hoverMenu);
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove("toggle-menu");
      }
    }
  }

  document.addEventListener("scroll", function () {
    // header.addEventListener("mouseenter", function () {
    if (scrollY > 70) {
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove("toggle-menu");
      }
      MenuLi[0].classList.add("shop-name-active");
      header.classList.remove(hoverMenu);
    } else {
      for (let i = 0; i < MenuItem.length; i++) {
        if (
          MenuItem[i].classList.contains("hover-line") &&
          body.dataset.id == 1
        ) {
          toggle(i, true);
        }
        MenuLi[0].classList.remove("shop-name-active");
      }
    }
    // });
  });

  header.addEventListener("mouseleave", function () {
    if (scrollY > 70 || body.dataset.id != 1) {
      toggle("", false);
    }
  });

  document
    .getElementById("menuContainer")
    .addEventListener("mouseenter", function () {
      mouseBoolean = true;
    });
  document
    .getElementById("menuContainer")
    .addEventListener("mouseleave", function () {
      mouseBoolean = false;
    });

  // скрывает контент в боковом меню
  // use toggleMenu
  function toggleSideContent(id) {
    const item = document.getElementById(id);
    // let input = item.querySelector('.input-email');
    // if (input) {
    //   input.focus();
    // }
    if (id) {
      item.classList.remove("none");
    } else {
      for (let i = 0; i < sideContainer.length; i++) {
        sideContainer[i].classList.add("none");
      }
    }
  }

  function toggleCountry() {
    toggleMobileMenu();
    toggleMenuSection("countryList");
  }
 //  function hide(item = '', visible = '', classHIdeMenu = '') {
 //   item.classList.toggle(classHIdeMenu);
 // if (item.classList.contains(visible)){
 //   setTimeout(function () {
 //     item.classList.remove(visible);
 //   }, 400)
 // }
 // else {
 //   item.classList.add(visible);
 // }
 //  }
  // х
  function toggleMobileMenu() {
    // document.getElementById('mMenuList').classList.toggle('hide');
    const mobileBtn = document.getElementById("MobileBtn");
    const MobileMenu = document.getElementById("MobileMenu");
    mobileBtn.classList.toggle("btn-anim-mb");
    MobileMenu.classList.toggle("opacity1");
    // hide(MobileMenu, 'visibleMenu', 'opacity1');
    body.classList.toggle("overflow-hidden");
    mArrowLeft.classList.add("hide");
  }

  function toggleMenuSection(id) {
    // console.log(id);
    const linkContainer = document.getElementById("linkContainer");
    const container = document.getElementById("subItems");
    const el = document.getElementById(id);
    const list = document.getElementsByClassName("m-sub-list");
    if (id) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add("none");
      }
    }
    if (id == "AccountList" || id == "countryList") {
      mform.classList.add("none");
    } else {
      mform.classList.remove("none");
    }
    if (id) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add("none");
      }
      linkContainer.classList.add("hide");
      container.classList.remove("hide");
      el.classList.remove("none");
      mArrowLeft.classList.remove("hide");
      mLogo.classList.add("hide");
    } else {
      linkContainer.classList.remove("hide");
      container.classList.add("hide");
      mArrowLeft.classList.add("hide");
      mLogo.classList.remove("hide");
    }
  }

  //боковое меню
  function toggleMenu(id) {
    // const searchInputId = document.getElementById("searchInputId");
    hideMenu.classList.toggle("w100");
    toggleSideContent(id);

    // if (!hideMenu.classList.contains("w100")) {
    //   searchInputId.blur();
    // } else {
    //   searchInputId.focus();
    // }
  }

  // btn sideMenu
  function closeSideMenu() {
    if (!mouseBoolean) {
      hideMenu.classList.toggle("w100");
    }
  }

  //лесенка
  const accItem = Accordion.getElementsByClassName("footer-column");

  if (document.documentElement.clientWidth < 900) {
    for (i = 0; i < accItem.length; i++) {
      accItem[i].addEventListener("click", function () {
        let panel = this.querySelector(".container");
        let caption = this.querySelector(".acc-caption");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          caption.style.color = "#7e7e7e";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          caption.style.color = "#fff";
        }
      });
    }
  }

  //page

  function pageTogggle(id) {
    const pageNav = document.getElementById("pageNav");
    const pageContainer = document.getElementById("pageContainer");
    const btn = pageNav.getElementsByClassName("page-btn");
    const pageItem = pageContainer.getElementsByClassName("page-container");
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
      pageItem[i].classList.remove("active");
      btn[id].classList.add("active");
      pageItem[id].classList.add("active");
    }
  }
// }

// $(window).on('scroll', () => { // По скроллу страници запускаеть функия
//   // В первую переменную мы получаем координаты относительно верха блока который нам нужен
//   // Во вторую мы получаем вертикальную позиицию скролла окна браузера
//     var blockPosition = $('.block').offset().top,
//           windowScrollPosition = $(window).scrollTop();

//     if( calcPosTopPosition < windowScrollPosition ) {
//         console.log('ok'); // Воуля
//     }
// });

// if (body.dataset.id == 1){
//   console.log('1');
//   header.classList.add(hoverMenu);
// } else {
//   console.log('0');
//   header.classList.remove(hoverMenu);
// }
