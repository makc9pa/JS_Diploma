export const sendForm = ({ formId }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.value) {
                success = false
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('http://localhost:3000/users', {
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

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                    statusBlock.style.color = 'red'
                })
        } else {
            alert(' Введенные данные некорректные ')
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