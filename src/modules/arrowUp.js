export const arrowUp = () => {
    const arrowUp = document.querySelector('.up')
    const topSliderHeight = document.querySelector('.top-slider').scrollHeight

    window.addEventListener('scroll', () => {
        if (scrollY > topSliderHeight) {
            arrowUp.style.display = 'block'
        } else {
            arrowUp.style.display = 'none'
        }
    })

    arrowUp.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}