var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var token = req.body.tokenServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }  
    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (token == undefined) {
        res.status(400).send("Seu token está undefined!");
    } 
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, telefone, token)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Picanha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var Picanha = req.body.PicanhaServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (Picanha == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.Picanha(id, Picanha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function Tbone(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var Tbone = req.body.TboneServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (Tbone == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.Tbone(id, Tbone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function Costela(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var Costela = req.body.CostelaServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (Costela == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.Costela(id, Costela)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function Cupim(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var Cupim = req.body.CupimServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (Cupim == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.Cupim(id, Cupim)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function mal(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var mal = req.body.MalServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (mal == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.mal(id, mal)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function bem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var bem = req.body.BemServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (bem == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.bem(id, bem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function ponto(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.PontoServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.ponto(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



// LIKES -------------------------------------------- LIKES ---------------------------------------------------------------LIKES-

function LikePicanha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikePicanhaServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikePicanha(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function LikeCostela(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikeCostelaServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikeCostela(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function LikeAcem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikeAcemServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikeAcem(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function LikePao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikePaoServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikePao(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function LikeCupim(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikeCupimServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikeCupim(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function LikeAbacaxi(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var ponto = req.body.LikeAbacaxiServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (ponto == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    }  
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.LikeCupim(id, ponto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    Picanha,
    Tbone,Costela,Cupim,
    mal,bem,ponto,

    LikePicanha,LikeCostela,LikeAcem,LikePao,LikeCupim,LikeAbacaxi
}