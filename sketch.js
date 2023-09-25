Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, danilo.capera!



Auto-atualizar

pong capera
por danilo.capera



sketch.js
Salvo: 7 dias atrás
1
//variáveis da bolinha
2
let xBolinha = 300;
3
let yBolinha = 200;
4
let diametro = 15;
5
let raio = diametro / 2 ;
6
​
7
//velocidade da bolinha
8
let velocidadeXBolinha = 6;
9
let velocidadeYBolinha = 6;
10
let raqueteComprimento = 10;
11
let raqueteAltura = 90;
12
​
13
//variáveis da raquete
14
let xRaquete = 5;
15
let yRaquete = 150;
16
​
17
//variáveis do oponente
18
let xRaqueteOponente = 585;
19
let yRaqueteOponente = 150;
20
let velocidadeYOponente;
21
​
22
let colidiu = false;
23
​
24
//placar do jogo
25
let meusPontos = 0;
26
let pontosDoOponente = 0;
27
​
28
function setup() {
29
  createCanvas(600, 400);
30
}
31
​
32
function draw() {
33
  background(0);
34
  mostraBolinha();
35
  movimentaBolinha();
36
  verificaColisaoBorda();
37
  mostraRaquete(xRaquete, yRaquete);
38
  movimentaMinhaRaquete();
39
  //verificaColisaoRaquete();
40
  verificaColisaoRaquete(xRaquete, yRaquete);
41
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
42
  movimentaRaqueteOponente();
43
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
44
  incluiPlacar();
Não há mensagens de Lint
Linha atual

Terminal
Limpar

​
Prévia
