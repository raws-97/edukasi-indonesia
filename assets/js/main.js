(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    const preloader = document.querySelector(".preloader");
    if (!preloader) return;
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }

  /*=====================================
    Sticky
    ======================================= */
  var pathSegments = window.location.pathname.replace(/\/$/, '').split('/').filter(Boolean);
  var logoPrefix = pathSegments.length > 0 ? '../' : '';

  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = logoPrefix + "assets/img/logo/logo-2.png";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = logoPrefix + "assets/img/logo/logo.png";
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      var href = elem.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
          });
        }
      }
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      if (!val || !val.startsWith("#")) continue;
      const refElement = document.querySelector(val);
      if (!refElement) continue;
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // WOW active
  new WOW().init();

  // ===== Lightbox
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImg");

  if (lightboxOverlay && lightboxImg) {
    document.querySelectorAll("#training .single-feature-extended img").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightboxOverlay.classList.add("open");
      });
    });

    lightboxOverlay.addEventListener("click", function () {
      lightboxOverlay.classList.remove("open");
    });

    lightboxImg.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
})();
