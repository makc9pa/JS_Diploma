export const menu = () => {
    const topMenu = document.querySelector('.top-menu')

    topMenu.addEventListener('click', (e) => {
        e.preventDefault()
        let ID = e.target.getAttribute('href')

        if (ID) { ID = ID.substring(1) }

        const section = document.getElementById(ID)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            })
        }
    })
}