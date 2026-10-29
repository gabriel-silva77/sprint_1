import express from 'express';


const app = express();
const porta = 3000;


app.get("/", (req, res) => {
    res.send("Boas-vindas à Central de Informações da Escola 🚀")
});


app.get("/status", (req, res) => {
    res.json({status_servidor: "online"});
});


app.get("/escola", (req, res) => {
    res.json({nome: "SENAI", cidade: "Valinhos", tipo: "Privada"});
});


const cursos = [
    {id: 1, nome: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Redes de Computadores"},
    {id: 3, nome: "Administração"}
];


app.get("/cursos", (req, res) => {
    res.json(cursos);
});


const professores = [
    {nome: "Eduardo", disciplina: "Back-End"},
    {nome: "Felipe Mamprim", disciplina: "Projetos"},
    {nome: "Thiago", disciplina: "LIMA"}
];


app.get("/professor", (req, res) => {
    res.json(professores);
});


const orientacoes = [
    {rota: "/status", funcao: "Estado do servidor"},
    {rota: "/escola", funcao: "Informações da instituição"},
    {rota: "/cursos", funcao: "Cursos disponíveis"},
    {rota: "/professor", funcao: "Informações do professor"},
    {rota: "/ajuda", funcao: "Orientações"}
]


app.get("/ajuda", (req, res) => {
    res.json(orientacoes)
});


const requisicao = [
    {metodo: "get", caminho: `http://localhost:${porta}`, mensagem: "Sua solicitação foi recebida com sucesso!"}
]


app.get("/requisicao", (req, res) => {
    res.json(requisicao)
});


app.listen(porta, () => console.log(`Servidor em http://localhost:${porta}`));