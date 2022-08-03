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
function stampaMembro(membro) {
    console.log(`Nome: ${membro.nome} Ruolo: ${membro.ruolo} Foto: ${membro.foto}`);
}

const team = [
    creaMembro('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    creaMembro('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    creaMembro('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    creaMembro('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    creaMembro('Scott Estrada', 'Developer', 'scott-estrada-devoloper.jpg'),
    creaMembro('Barbara Ramos', 'Gaphic Designer', 'barbara-ramos-graphic-designer.jpg')
];

team.forEach((membro) => {
    stampaMembro(membro);
});