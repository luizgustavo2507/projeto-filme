let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(86,5, 125));
  textAlign(CENTER, CENTER);
  textSize(45);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 14) {
      return "vingadores ultimato";
    } else {
      if (idade >= 17) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "as aventuras de pedinton";          
        } else{
         return "incrives";
        }
      } else {
        if (gostaDeFantasia) {
          return "turbo";
        } else {
          return "divertidamente";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "homem formiga";
    } else {
      return "garoto formiga";
    }
  }
}
