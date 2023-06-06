var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/picanha", function (req, res) {
    usuarioController.Picanha(req, res);
});

router.post("/Tbone", function (req, res) {
    usuarioController.Tbone(req, res);
});

router.post("/Costela", function (req, res) {
    usuarioController.Costela(req, res);
});

router.post("/Cupim", function (req, res) {
    usuarioController.Cupim(req, res);
});

router.post("/mal", function (req, res) {
    usuarioController.mal(req, res);
});

router.post("/bem", function (req, res) {
    usuarioController.bem(req, res);
});

router.post("/ponto", function (req, res) {
    usuarioController.ponto(req, res);
});





router.post("/Curtidaspicanha", function (req, res) {
    usuarioController.LikePicanha(req, res);
});


router.post("/Curtidascostela", function (req, res) {
    usuarioController.LikeCostela(req, res);
});

router.post("/Curtidasacem", function (req, res) {
    usuarioController.LikeAcem(req, res);
});

router.post("/Curtidasabacaxi", function (req, res) {
    usuarioController.LikeAbacaxi(req, res);
});

router.post("/Curtidascupim", function (req, res) {
    usuarioController.LikeCupim(req, res);
});

router.post("/Curtidaspao", function (req, res) {
    usuarioController.LikePao(req, res);
});





module.exports = router;