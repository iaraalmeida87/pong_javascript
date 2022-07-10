//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  //verificaColisaoRaquete();
  colisaoRaqueteBiblioteca();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (xBolinha+raio > width ||
     xBolinha-raio < 0) {
     velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height ||
     yBolinha-raio < 0) {
     velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}
function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
}
function colisaoRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}