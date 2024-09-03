var personagem, torre; 

function preload(){
   ratoImage = loadImage('rato.png');
   torreImage  = loadImage('torre.png');
   cocoImage  = loadImage ('coco.png');
}

function setup (){
  createCanvas(600,600);
  //criar objetos do jogo
  torre = createSprite(300,20,300,1200);
  torre.shapeColor = 'black';
  torre.addImage("torre",torreImage);
  personagem = createSprite(200,200,10,10);
  personagem.shapeColor = 'blue';
  personagem.addImage("personagem",ratoImage);
}

function draw(){
  background ('gray');

  if(keyDown('space')){
    personagem.velocityY = -5;
  }

  //simula gravidade
  personagem.velocityY = personagem.velocityY + 0.8;

  //movimento da torre
  torre.velocityY = 1;

  //torre não sair da tela
  if(torre.y > 400){
    torre.y = 400
  }

  //criar obstaculos
  gerarObstaculos();

  drawSprites();

}

//criar função de obstaculos 

function gerarObstaculos(){
  //aqui iremos iniciar os comandos para criar todos os obestaculos.
  if(frameCount % 100 == 0){
    var obstaculo = createSprite(200,10);
    obstaculo.addImage("obstaculo",cocoImage);
    //vai gerar o obstaculo na posição aleatoria entre 300 e 600
    obstaculo.x = Math.round(random(300,600));
    obstaculo.x = Math.round(random(0,800));
    //tempo de vida do obstaculo
    obstaculo.lifetime = 200;
  }

}