// Elementos da página
let textInput;
let memeConteiner;
let memeText;
let memeInsert;
let memeImage;
let btnFire;
let btnWater;
let btnEarth;
let memesProntos;

// Pega o texto digitado no input e coloca na imagem
function pegarTextoDoInput() {
  // Verifica se a quantidade de caracteres é permitida
  if (textInput.value.length <= 60) {
    memeText.innerText = textInput.value;
  } else {
    textInput.value = memeText.innerText;
  }
}

// Obtem a imagem seleciona
function obterImagem() {
  // Liberando o objeto da memoria
  window.URL.revokeObjectURL(memeImage.src);
  // Criando um objeto URL
  const objURL = URL.createObjectURL(memeInsert.files[0]);
  // Adicionado a URL da imagem no elemento img
  memeImage.src = objURL;
}

// Estiliza as bordas do conteiner da imagem
function estilizarBordas(event) {
  // Pega o ID do botão
  const btnId = event.target.id;

  if (btnId === 'fire') {
    memeConteiner.style.borderWidth = '3px';
    memeConteiner.style.borderStyle = 'dashed';
    memeConteiner.style.borderColor = 'red';
  } else if (btnId === 'water') {
    memeConteiner.style.borderWidth = '5px';
    memeConteiner.style.borderStyle = 'double';
    memeConteiner.style.borderColor = 'blue';
  } else if (btnId === 'earth') {
    memeConteiner.style.borderWidth = '6px';
    memeConteiner.style.borderStyle = 'groove';
    memeConteiner.style.borderColor = 'green';
  }
}

// Seleciona o meme pronto e coloca no conteiner
function selecionaMemePronto(event) {
  if (event.target.tagName === 'IMG') {
    memeImage.src = event.target.src;
  }
}

// Pega os elementos da página
function obterElementos() {
  textInput = document.getElementById('text-input');
  memeConteiner = document.getElementById('meme-image-container');
  memeText = document.getElementById('meme-text');
  memeInsert = document.getElementById('meme-insert');
  memeImage = document.getElementById('meme-image');
  btnFire = document.getElementById('fire');
  btnWater = document.getElementById('water');
  btnEarth = document.getElementById('earth');
  memesProntos = document.getElementById('memes-prontos');
}

// Adiciona ouvintes aos elementos da página
function adicionarOuvintes() {
  textInput.addEventListener('input', pegarTextoDoInput);
  memeInsert.addEventListener('change', obterImagem);
  btnFire.addEventListener('click', estilizarBordas);
  btnWater.addEventListener('click', estilizarBordas);
  btnEarth.addEventListener('click', estilizarBordas);
  memesProntos.addEventListener('click', selecionaMemePronto);
}

// Executa o código após o carregamento da página
function executarCodigo() {
  // Pegando os elementos da página
  obterElementos();
  // Adicionando ouvintes aos elementos
  adicionarOuvintes();
}

window.onload = executarCodigo;
