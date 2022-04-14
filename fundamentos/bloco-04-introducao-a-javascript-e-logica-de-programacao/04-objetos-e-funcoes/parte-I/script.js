let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Requisito 1
console.log(`Bem-vindo(a) ${info.personagem}!`);

// Requisito 2
info['recorrente'] = "Sim";
console.log(info);

// Requisito 3
for (let key in info) {
    console.log(key);
}

// Requisito 4
for (let key in info) {
    console.log(info[key]);
}

// Requisito 5
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {
    console.log(`${info[key]} e ${info2[key]}`);
}

// Requisito 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

// Requisito 7
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});

// Requisito 8
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)