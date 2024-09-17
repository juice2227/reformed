const slider = document.querySelector(".slider");
      const prevButton = document.querySelector(".prev");
      const nextButton = document.querySelector(".next");
      let currentIndex = 0;
      let interval;

      function slideImages(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 6;
        if (currentIndex > 6) currentIndex = 0;
        updateSliderPosition();
      }

      function updateSliderPosition() {
        const slideWidth = window.innerWidth > 992 ? 100 / 6 : 100 / 3;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      }

      function startAutoSlide() {
        interval = setInterval(() => slideImages(1), 3000);
      }

      function stopAutoSlide() {
        clearInterval(interval);
      }

      prevButton.addEventListener("click", () => {
        slideImages(-1);
        stopAutoSlide();
        startAutoSlide();
      });

      nextButton.addEventListener("click", () => {
        slideImages(1);
        stopAutoSlide();
        startAutoSlide();
      });

      slider.addEventListener("mouseenter", stopAutoSlide);
      slider.addEventListener("mouseleave", startAutoSlide);

      window.addEventListener("resize", updateSliderPosition);

      startAutoSlide();