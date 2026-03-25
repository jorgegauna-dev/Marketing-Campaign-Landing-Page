const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const pricingToggle = document.getElementById("pricingToggle");
const prices = document.querySelectorAll(".price");
const faqItems = document.querySelectorAll(".faq-item");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  const expanded = navMenu.classList.contains("show");
  navToggle.setAttribute("aria-expanded", expanded);
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

pricingToggle.addEventListener("click", () => {
  pricingToggle.classList.toggle("active");
  const yearly = pricingToggle.classList.contains("active");

  prices.forEach((price) => {
    price.textContent = yearly
      ? price.dataset.yearly
      : price.dataset.monthly;
  });

  document.querySelectorAll(".price-note").forEach((note) => {
    note.textContent = yearly ? "per month, billed yearly" : "per month";
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-question span").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      item.querySelector(".faq-question span").textContent = "−";
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});