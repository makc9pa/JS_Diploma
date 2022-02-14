import { modal } from './modal'

export const sendForm = ({ formId }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Введены неполные данные в форму обратной связи'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')


    const clearStatusBlock = () => {
        statusBlock.textContent = ''
    }

    const modalClose = () => {
        modal.style.opacity = ''
        modal.style.display = 'none'
        modalOverlay.style.opacity = ''
        modalOverlay.style.display = 'none' 
    }

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.value || input.value.length <= 2) {
                success = false
            }

            if (input.value.substring(0, 1) === '+' && input.value.length <=16) {
                success = false
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input[type="text"]')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        statusBlock.style.color = 'black'
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })
        
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    statusBlock.style.color = 'black'
                    setTimeout(() => clearStatusBlock(), 3000)
                    setTimeout(() => modalClose(), 5000)
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                    statusBlock.style.color = 'red'
                })
        } else {
            console.log(formElements)
            statusBlock.textContent = errorText
            statusBlock.style.color = 'red'

        }
    }

    try {

        if(!form) {
            throw new Error('Отсутствует форма для ввода данных!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}