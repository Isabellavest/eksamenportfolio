const header = document.querySelector("#siteHeader");

function onScroll() {
  if (!header) return;
  const scrolled = window.scrollY > 40;
  header.classList.toggle("is-solid", scrolled);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
