const pessoa1 = (nome: string, dataNascimento: string): string => {
    const [dia, mes, ano] = dataNascimento.split("/");

    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
};
console.log("ex.1", pessoa1("Ariane", "20/11/1995"))