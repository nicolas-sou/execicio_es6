class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

    const alunos = [
    new Aluno("João", 7),
    new Aluno("Maria", 5),
    new Aluno("Carlos", 8),
    new Aluno("Ana", 4),
    new Aluno("Pedro", 6)
];
    function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

    const alunosAprovadosArray = alunosAprovados(alunos);
    console.log(alunosAprovadosArray);