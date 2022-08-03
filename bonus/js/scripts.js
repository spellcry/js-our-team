// funzione che crea un mebro del team
function creaMembro(nome, ruolo, foto) {
    const membro = {
        nome: nome,
        ruolo: ruolo,
        foto: foto
    };
    return membro;
}

// funzione che stampa un membro su console
function stampaMembroConsole(membro) {
    console.log(`Nome: ${membro.nome} Ruolo: ${membro.ruolo} Foto: ${membro.foto}`);
}

// funzione che crea un elemento li
function createLiElement(membro) {
    const liEl = document.createElement('li');
    liEl.innerHTML = `Nome: ${membro.nome} Ruolo: ${membro.ruolo}`;
    liEl.append(createImgElement(membro.foto));
    console.log(liEl)
    return liEl;
}

// funzione che crea un tag img con stringa foto passata come parametro
function createImgElement(imageString) {
    const imgEl = document.createElement('img');
    imgEl.src = `./img/${imageString}`;
    return imgEl;
}

// funzione che aggiunge un membro in un elemento destinazione
function addElementTo(elementoDestinazione, membro) {
    elementoDestinazione.append(createLiElement(membro));
}

const teamEl = document.querySelector('.team');
const team = [
    creaMembro('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    creaMembro('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    creaMembro('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    creaMembro('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    creaMembro('Scott Estrada', 'Developer', 'scott-estrada-devoloper.jpg'),
    creaMembro('Barbara Ramos', 'Gaphic Designer', 'barbara-ramos-graphic-designer.jpg')
];

team.forEach((membro) => {
    stampaMembroConsole(membro);
    addElementTo(teamEl, membro);
});