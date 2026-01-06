/******************* HEADER effekt fra transparent til synlig ved scroll ******************/
const header = document.getElementById("siteHeader");

if (header) {
  let isSolid = null; // holder styr på sidste state, så vi undgår unødige class toggles

  const toggleHeader = () => {
    const shouldBeSolid = window.scrollY > 40;

    if (shouldBeSolid === isSolid) return; // ingen ændring
    isSolid = shouldBeSolid;

    header.classList.toggle("is-solid", shouldBeSolid);
    header.classList.toggle("is-transparent", !shouldBeSolid);
  };

  toggleHeader();
  window.addEventListener("scroll", toggleHeader, { passive: true });
}

/******************* BURGER MENU (toggle) ******************/
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav) {
  // initial a11y state
  navToggle.setAttribute("aria-expanded", "false");
  siteNav.setAttribute("aria-hidden", "true");

  const openMenu = () => {
    siteNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    siteNav.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.setAttribute("aria-hidden", "true");
  };

  const toggleMenu = (e) => {
    // stop så klik ikke “bubbler” og rammer document-click lukning i nogle setups
    e.stopPropagation();

    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    siteNav.setAttribute("aria-hidden", String(!isOpen));
  };

  // Åbn/luk på klik
  navToggle.addEventListener("click", toggleMenu);

  // Luk når man klikker på et link i menuen
  siteNav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    closeMenu();
  });

  // Luk når man klikker udenfor (kun hvis den er åben)
  document.addEventListener("click", (e) => {
    if (!siteNav.classList.contains("is-open")) return;

    const clickedInside =
      siteNav.contains(e.target) || navToggle.contains(e.target);

    if (!clickedInside) closeMenu();
  });

  // Luk på ESC (tilgængelighed)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!siteNav.classList.contains("is-open")) return;
    closeMenu();
  });
}
