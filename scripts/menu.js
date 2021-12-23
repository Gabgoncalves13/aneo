function changeMenuVisibility() {

    let menuRef = document.querySelector('#menu')
    let menuState = menuRef.classList.contains('open')

    if(menuState) {

        menuRef.classList.remove('open')

    } else {

        menuRef.classList.add('open')

    }

}