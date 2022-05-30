const links = document.querySelectorAll('a');
const banner = document.querySelector('.banner');
const oradores = document.querySelector('.oradores');
const lugar = document.querySelector('.lugar');
window.scrollTo(0, 0);
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        ir__a__seccion(e.target);
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY <= banner.clientHeight - 86) {
        remover__clase__del__enlace();
        agregar__clase__del__enlace('La conferencia');
    }
    if (window.scrollY >= banner.clientHeight - 86) {
        remover__clase__del__enlace();
        agregar__clase__del__enlace('Los oradores');
    }
    if (window.scrollY >= (banner.clientHeight - 86) + oradores.lastElementChild.clientHeight) {
        remover__clase__del__enlace();
        agregar__clase__del__enlace('El lugar y la fecha');
    }
    if (window.scrollY >= (banner.clientHeight - 86) + oradores.clientHeight + lugar.firstElementChild.lastElementChild.firstElementChild.firstElementChild.clientHeight + lugar.firstElementChild.lastElementChild.firstElementChild.children[1].clientHeight) {
        remover__clase__del__enlace();
        agregar__clase__del__enlace('Conviertete en orador');
    }
});
const remover__clase__del__enlace = () => {
    links.forEach(link => link.classList.remove('active'));
}
const agregar__clase__del__enlace = enlace => {
    links.forEach(element => {
        if (element.textContent === enlace) {
            element.classList.add('active');
        }
    });
}

const ir__a__seccion = link => {
    if (link.textContent === 'La conferencia') {
        window.scrollTo(0, 0);
        remover__clase__del__enlace();
    }
    if (link.textContent === 'Los oradores') {
        const height = banner.clientHeight - 86;
        window.scrollTo(0, height);
        remover__clase__del__enlace();
    }
    if (link.textContent === 'El lugar y la fecha') {
        const height = (banner.clientHeight - 86) + oradores.clientHeight;
        window.scrollTo(0, height);
        remover__clase__del__enlace();
    }
    if (link.textContent === 'Conviertete en orador' || link.textContent === 'Quiero ser orador') {
        const height = (banner.clientHeight - 86) + oradores.clientHeight + lugar.clientHeight;
        window.scrollTo(0, height);
        remover__clase__del__enlace();
    }
}

