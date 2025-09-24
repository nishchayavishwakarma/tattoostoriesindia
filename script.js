document.addEventListener("DOMContentLoaded", () => {
  // === Portfolio Filter Buttons ===
  const filterBtns = document.querySelectorAll(".filter-btn");
  const scrollContainer = document.querySelector(".portfolio-scroll");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      if (category === "all") {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const targetCard = scrollContainer.querySelector(`.card.${category}`);
        if (targetCard) {
          scrollContainer.scrollTo({
            left: targetCard.offsetLeft,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // === Portfolio Manual Slider Controls ===
  const slider = document.querySelector(".portfolio-slider");
  const nextBtn = document.querySelector(".slide-btn.next");
  const prevBtn = document.querySelector(".slide-btn.prev");

  if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  // === Rotating Hashtag Animation ===
  const rotatingWord = document.getElementById("rotating-word");
  const words = ["#inked", "#pierced"];
  let index = 0;

  if (rotatingWord) {
    setInterval(() => {
      index = (index + 1) % words.length;
      rotatingWord.textContent = words[index];
    }, 2000);
  }

  // === Optional: Scroll-triggered fade-ins (future enhancement) ===
  // const fadeElements = document.querySelectorAll(".fade-in");
  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("visible");
  //     }
  //   });
  // }, { threshold: 0.3 });

  // fadeElements.forEach(el => observer.observe(el));
});