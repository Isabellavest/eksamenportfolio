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
