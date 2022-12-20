// Elementos da página
let textInputLabel;
let textInput;
let memeConteiner;
let memeText;
let memeInsert;
let memeImage;
let btnFire;
let btnWater;
let btnEarth;
let btnDefaultBorder;
let btnNoneBorder;
let memesProntos;
let fileSelectedName;

// Pega o texto digitado no input e coloca na imagem
function pegarTextoDoInput() {
  // Se o texto atingir o limite muda a cor do label para vermelho
  if (textInput.value.length >= 60) {
    textInputLabel.style.color = 'red';
  } else {
    textInputLabel.style.color = '';
  }
  memeText.innerText = textInput.value;
}

// Obtem a imagem seleciona
function obterImagem() {
  if (memeInsert.files[0] !== undefined) {
    fileSelectedName.textContent = memeInsert.files[0].name;
    // Liberando o objeto da memoria
    URL.revokeObjectURL(memeImage.src);
    // Criando um objeto URL
    const objURL = URL.createObjectURL(memeInsert.files[0]);
    // Adicionado a URL da imagem no elemento img
    memeImage.src = objURL;
  }
}

// Estiliza a cor de fundo do conteiner da imagem
function estilizarFundoConteiner() {
  memeConteiner.style.backgroundColor = 'rgb(50 , 50 , 50)';
}

// Estiliza a largura estilo e cor das bordas do elemento HTML
function estilizarBordasElemento(element, width, style, color) {
  const e = element;
  e.style.borderWidth = width;
  e.style.borderStyle = style;
  e.style.borderColor = color;
  estilizarFundoConteiner();
}

// Estiliza as bordas do conteiner da imagem
function estilizarBordas(event) {
  // Pega o ID do botão
  const btnId = event.target.id;

  if (btnId === 'fire') {
    estilizarBordasElemento(memeConteiner, '3px', 'dashed', 'red');
  } else if (btnId === 'water') {
    estilizarBordasElemento(memeConteiner, '5px', 'double', 'blue');
  } else if (btnId === 'earth') {
    estilizarBordasElemento(memeConteiner, '6px', 'groove', 'green');
  } else if (btnId === 'default-border') {
    estilizarBordasElemento(memeConteiner, '1px', 'solid', 'black');
  } else {
    estilizarBordasElemento(memeConteiner, '0', '', '');
  }
}

// Seleciona o meme pronto e coloca no conteiner
function selecionaMemePronto(event) {
  if (event.target.tagName === 'IMG') {
    memeImage.src = event.target.src;
    fileSelectedName.textContent = 'Nenhuma imagem selecionada';
  }
}

// Pega os elementos da página
function obterElementos() {
  textInputLabel = document.getElementById('text-input-label');
  textInput = document.getElementById('text-input');
  memeConteiner = document.getElementById('meme-image-container');
  memeText = document.getElementById('meme-text');
  memeInsert = document.getElementById('meme-insert');
  memeImage = document.getElementById('meme-image');
  btnFire = document.getElementById('fire');
  btnWater = document.getElementById('water');
  btnEarth = document.getElementById('earth');
  btnDefaultBorder = document.getElementById('default-border');
  btnNoneBorder = document.getElementById('none-border');
  memesProntos = document.getElementById('memes-prontos');
  fileSelectedName = document.getElementById('file-selected-name');
}

// Adiciona ouvintes aos elementos da página
function adicionarOuvintes() {
  textInput.addEventListener('input', pegarTextoDoInput);
  memeInsert.addEventListener('change', obterImagem);
  btnFire.addEventListener('click', estilizarBordas);
  btnWater.addEventListener('click', estilizarBordas);
  btnEarth.addEventListener('click', estilizarBordas);
  btnDefaultBorder.addEventListener('click', estilizarBordas);
  btnNoneBorder.addEventListener('click', estilizarBordas);
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
