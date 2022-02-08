export const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')
    const texts = document.querySelectorAll('.table')

    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none'
        }
    });

    texts[0].classList.add('active')

    let ul = document.createElement('ul')
    ul.classList.add('slick-dots')
    sliderBlock.appendChild(ul)

    let dots = {}
    let currentSlide = 0
    let interval
    let timeInterval = 3000

    const addDots = (index) => {
        for (let i = 0; i < index; i++) {
            let li = document.createElement('li')
            i === 0 ? li.classList.add('dot', 'slick-active') : li.classList.add('dot')
            ul.appendChild(li)
        }
    }

    const prevSlide = (elems, index) => {
        elems[index].style.display = 'none'
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = ''
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
        prevText(dots, currentSlide, 'slick-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

    nextSlide(slides, currentSlide)
    nextText(texts, currentSlide, 'active')
    nextText(dots, currentSlide, 'slick-active')
    }

    const startSlide = (timer) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        // console.log(e.target)
        e.preventDefault()

        if (!e.target.matches('.dot')) {
            return
        }

    prevSlide(slides, currentSlide)
    prevText(texts, currentSlide, 'active')
    prevText(dots, currentSlide, 'slick-active')

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

    nextSlide(slides, currentSlide)
    nextText(texts, currentSlide, 'active')
    nextText(dots, currentSlide, 'slick-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        // console.log(e.target);
        if (e.target.matches('.slick-dots')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        // console.log(e.target);
        if (e.target.matches('.slick-dots')) {
            startSlide(timeInterval)
        }
    }, true)

    addDots(slides.length)
    startSlide(timeInterval)
}