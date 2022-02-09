export const accordion =() => {
    const accordeon = document.querySelector('.accordeon')
    const panels = accordeon.querySelectorAll('.element')

   accordeon.addEventListener('click', (e) => {
       if (e.target.closest('.element')) {
           const panel = e.target.closest('.element')

           panels.forEach((elem) => {
               const content = elem.querySelector('.element-content')
               if (elem === panel) {
                   elem.classList.add('active')
                   content.style.display = 'block'
               } else {
                   elem.classList.remove('active')
                   content.style.display = 'none'
               }
           })
       }
   }) 
}