function multiplica(a: number, b: number): number {
    return a * b;
}

function disseOla(nome: string): string {
    return `${nome} disse Olá`;
}

const resultMultiplicacao = multiplica(25, 40);
console.log(resultMultiplicacao);


const mensagemSaudacao = disseOla("Fernando");
console.log(mensagemSaudacao);