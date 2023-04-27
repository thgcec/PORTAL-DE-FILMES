

let drop = document.getElementById('dropdown');
let drop1 = document.getElementById('dropdown1');
let menu = document.getElementById('hamburguer');
menu.onclick =() => {
    drop.classList.remove('hide');
    drop1.classList.remove('hide');
    drop.classList.add("showdropdown");
    menu.classList.add('hide');
    menu2.classList.remove('hide');
    menu2.classList.add('hamburguer');
}

let menu2 = document.getElementById('hamburguer2');
menu2.onclick =() => {
    drop.classList.add('hide');
    drop1.classList.add('hide');
    drop.classList.remove("showdropdown");
    menu2.classList.add('hide');
    menu.classList.remove('hide');
    menu.classList.add('hamburguer');
}

let botao = document.getElementById('botaover');
let vermenos = document.getElementById('vermenos');
let escondido = document.getElementById('escondidopop');
    botao.onclick = () => {
    escondido.classList.remove('escondidopop');
    escondido.classList.add("showpop");
    escondido.classList.add("vermenos");
    botao.classList.add('escondevermais');
    vermenos.classList.remove('vermenos');
};

vermenos.onclick = () => {
    escondido.classList.remove("showpop");
    escondido.classList.add('escondidopop');
    vermenos.classList.add("vermenos");
    botao.classList.remove('escondevermais');
};
