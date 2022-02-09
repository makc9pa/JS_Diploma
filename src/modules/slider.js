export const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')
    const texts = document.querySelectorAll('.table')
    const ul = document.querySelector('.section-dots')

    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none'
        }
    });

    texts[0].classList.add('active')

    let dots = {}
    let currentSlide = 0
    let interval
    let timeInterval = 3000

    const addDots = (index) => {
        for (let i = 0; i < index; i++) {
            let li = document.createElement('li')
            i === 0 ? li.classList.add('dot', 'active-dot') : li.classList.add('dot')
            ul.appendChild(li)
        }
    }

    const prevSlide = (elems, index) => {
        elems[index].style.display = 'none'
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = 'block'
    }

    const prevText = (texts, index, strClass) => {
        texts[index].classList.remove(strClass)
    }

    const nextText = (texts, index, strClass) => {
        texts[index].classList.add(strClass)
    }

    const autoSlide = () => {
        dots = document.querySelectorAll('.dot')
        prevSlide(slides, currentSlide)
        prevText(texts, currentSlide, 'active')
        prevText(dots, currentSlide, 'active-dot')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

    nextSlide(slides, currentSlide)
    nextText(texts, currentSlide, 'active')
    nextText(dots, currentSlide, 'active-dot')
    }

    const startSlide = (timer) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot')) {
            return
        }

    prevSlide(slides, currentSlide)
    prevText(texts, currentSlide, 'active')
    prevText(dots, currentSlide, 'active-dot')

    if (e.target.classList.contains('dot')) {
        dots.forEach((dot, index) => {
            if (e.target === dot) {
                currentSlide = index
            }
        })
    }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

    nextSlide(slides, currentSlide)
    nextText(texts, currentSlide, 'active')
    nextText(dots, currentSlide, 'active-dot')
    }, true)

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.section-dots')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.section-dots')) {
            startSlide(timeInterval)
        }
    }, true)

    addDots(slides.length)
    startSlide(timeInterval)
}