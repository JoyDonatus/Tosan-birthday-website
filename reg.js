const initSlider = () => {
    const slideButtons = document.querySelectorAll(".cover .slideButtons");
    const scrollImages = document.querySelector(".cover .scrollImages");
    const maxScrollLeft = scrollImages.scrollWidth - scrollImages.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);
            
            const direction = button.id === "scrollButton" ? -1 : 1;
            const scrollAmount = scrollImages.clientWidth * direction;
            scrollImages.scrollBy({
                left: scrollAmount, behavior: "smooth"
            });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = scrollImages.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = scrollImages.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    scrollImages.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}



window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);