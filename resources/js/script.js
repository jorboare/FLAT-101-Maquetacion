

//DROPDOWN MENU
const products = document.querySelector('.button-products')
const sortList = document.querySelector('.button-sort')


const expandMenu = query => {

    const target = document.querySelector(query)

    if (target.classList.contains('active')) {

        //Gestiona la animación de la flecha
        query === '.dropdown-products' ?
            document.querySelector('.products-arrow').classList.remove('active')
            :
            document.querySelector('.filter-arrow').classList.remove('active')

        //Elimina la clase active
        target.classList.remove('active')
    } else {

        //Gestiona la animación de la flecha
        query === '.dropdown-products' ?
            document.querySelector('.products-arrow').classList.add('active')
            :
            document.querySelector('.filter-arrow').classList.add('active')

        //Añade la clase active
        target.classList.add('active')
    }


}

products.addEventListener('click', () => expandMenu('.dropdown-products'))
sortList.addEventListener('click', () => expandMenu('.dropdown-filter'))


