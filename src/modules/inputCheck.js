import { maskPhone } from './maskPhone'

export const inputCheck = () => {
    const nameInput = document.querySelector('.fio')

    nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '')
    })

    maskPhone()
}