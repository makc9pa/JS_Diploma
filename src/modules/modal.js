import { animate } from './helpers'

export const modal = () => {
    const buttons = document.querySelectorAll('.fancyboxModal')
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')

    const animateModal = () => {
        if (screen.width > 768) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    modal.style.opacity = progress
                    modal.style.display = 'block' 
                    modalOverlay.style.opacity = progress
                    modalOverlay.style.display = 'block' 
                } 
            });
        } else {
            modal.style.display = 'block'
            modalOverlay.style.display = 'block' 
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animateModal()
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.modal-close')) {
            modal.style.opacity = ''
            modal.style.display = 'none'
            modalOverlay.style.opacity = ''
            modalOverlay.style.display = 'none' 
        }
    })

    modalOverlay.addEventListener('click', (e) => {
        if (e.target.closest('.modal-overlay')) {
            modal.style.opacity = ''
            modal.style.display = 'none'
            modalOverlay.style.opacity = ''
            modalOverlay.style.display = 'none' 
        }
    })
}