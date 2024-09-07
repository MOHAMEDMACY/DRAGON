document.addEventListener('DOMContentLoaded', () => {
    const listImgInfo = document.querySelector(".list-img-info");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    let index = 0;
    const totalItems = document.querySelectorAll('.list-img-info .item').length;

    function updateCarousel() {
        // Move the carousel by translating based on the current index
        listImgInfo.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        // Increment index or reset to 0 if at the last item
        index = (index < totalItems - 1) ? index + 1 : 0;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        // Decrement index or set to last item if at the first
        index = (index > 0) ? index - 1 : totalItems - 1;
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel position
});
