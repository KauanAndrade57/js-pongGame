// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 23;
let raio = diametro /2;

// velocidades da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = -3;

// variaveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let comprimentoR = 10;   
// comprimento da raquete
let alturaR = 80;       
// altura da raquete

// Variaveis do Oponente (raquete 2)

let xRaquete2 = 585;
let yRaquete2 = 150;
let velRaquete2;



let bateu = false;


//placar

let meusPontos = 0;
let pontosDoCabra = 0;



// sons do game

let raquetada;
let trilha;
let somDoPonto;

//chance de erro do buxa

let chanceErro = 0

function preload(){
  
  trilha = loadSound("trilha.mp3");
  somDoPonto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentaBolinha();
  colisaoBorda();
 mostrarRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete (xRaquete2, yRaquete2);
  colisaoRaquete(xRaquete2, yRaquete2);
  movimentoRaquete2();
  incluirPlacar();
  pontos();
}
 
function mostrarBolinha () {
  
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
  }

function colisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0 ) {
      velocidadeYBolinha *= -1
      } 
}
 
function mostrarRaquete (x, y) {
  rect(x,y, comprimentoR, alturaR)
  
}


function movimentoRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
  
}

function colisaoRaquete(){
  
  if (xBolinha - raio < xRaquete + comprimentoR && yBolinha - raio < yRaquete + alturaR && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaquete(x, y){
  bateu =
  collideRectCircle(x, y, comprimentoR, alturaR, xBolinha, yBolinha,raio);
  
  if (bateu){
    velocidadeXBolinha *= -1
        raquetada.play();

  }
}


function movimentoRaquete2(){
  
  velRaquete2 = yBolinha - yRaquete2 - comprimentoR /2 -30;
 yRaquete2 += velRaquete2
  chanceDeErro();
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER)
  textSize(20)
  fill(color(155, 55, 195));
  rect (230, 10, 40, 20)
  fill(255);
  text(meusPontos,250, 26);
fill(color(155, 55, 195));
  rect (315, 10, 40, 20)
  fill(255);
  text(pontosDoCabra,335, 26);
}

function pontos(){
  //serve pra marcar os pontos
  
  if(xBolinha > 590){
    meusPontos += 1;
    somDoPonto.play();
    xBolinha = 300
  }
  if (xBolinha < 10){
    pontosDoCabra += 1;  
        somDoPonto.play();
         xBolinha = 300

  }
  
}


function chanceDeErro() {
  if (pontosDoCabra >= meusPontos) {
    chanceErro += 1
    if (chanceErro >= 39){
    chanceErro = 40
    }
  } else {
    chanceErro -= 1
    if (chanceErro <= 35){
    chanceErro = 35
    }
  }
}



