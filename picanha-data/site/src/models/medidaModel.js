var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select sum(picanha) as Picanha, sum(Tbone) as Tbone,  sum(Costela) as Costela, sum(Cupim) as Cupim from videos where fkUser = ${idUsuario};
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(picanha) as Picanha, sum(Tbone) as Tbone,  sum(Costela) as Costela, sum(Cupim) as Cupim from videos where fkUser = ${idUsuario};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select sum(picanha) as Picanha, sum(Tbone) as Tbone,  sum(Costela) as Costela, sum(Cupim) as Cupim from videos where fkUser = ${idUsuario};
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(picanha) as Picanha, sum(Tbone) as Tbone,  sum(Costela) as Costela, sum(Cupim) as Cupim from videos where fkUser = ${idUsuario};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
