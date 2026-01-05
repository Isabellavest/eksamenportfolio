/******* HEADER effekt fra transparent til synlig ved scroll ******/
const header = document.getElementById("siteHeader");

if (header) {
  const toggleHeader = () => {
    if (window.scrollY > 40) {
      header.classList.remove("is-transparent");
      header.classList.add("is-solid");
    } else {
      header.classList.add("is-transparent");
      header.classList.remove("is-solid");
    }
  };

  toggleHeader();
  window.addEventListener("scroll", toggleHeader);
}

/******* BURGER MENU (toggle) ******/
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav) {
  const toggleMenu = () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  // Åbn/luk på klik
  navToggle.addEventListener("click", toggleMenu);

  // Luk når man klikker på et link i menuen (lækkert UX på mobil)
  siteNav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  // Luk når man klikker udenfor menuen
  document.addEventListener("click", (e) => {
    const clickedInside =
      siteNav.contains(e.target) || navToggle.contains(e.target);
    if (clickedInside) return;

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  // Luk på ESC (tilgængelighed)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}
