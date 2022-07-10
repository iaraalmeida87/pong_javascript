//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 2;
let yRaquete = 150;
let larguraRaquete = 7;
let alturaRaquete = 90;

//variáveis da raquete do oponente
let xRaqueteOponente = 588;
let yRaqueteOponente = 150;
let velocidadeRaqueteOponente;

//placar do jogo
let pontosUsuario = 0;
let pontosDoOponente = 0;

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
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
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
function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}
function movimentoRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}
function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosUsuario, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
function marcaPonto() {
  if (xBolinha > 590) {
      pontosUsuario += 1;
  }
  if (xBolinha < 10) {
      pontosDoOponente += 1;
  }
}