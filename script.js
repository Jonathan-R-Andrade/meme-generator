// Elementos da página
let textInput;
let memeText;
let memeInsert;
let memeImage;

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

// Pega os elementos da página
function obterElementos() {
  textInput = document.getElementById('text-input');
  memeText = document.getElementById('meme-text');
  memeInsert = document.getElementById('meme-insert');
  memeImage = document.getElementById('meme-image');
}

// Adiciona ouvintes aos elementos da página
function adicionarOuvintes() {
  textInput.addEventListener('input', pegarTextoDoInput);
  memeInsert.addEventListener('change', obterImagem);
}

// Executa o código após o carregamento da página
function executarCodigo() {
  // Pegando os elementos da página
  obterElementos();
  // Adicionando ouvintes aos elementos
  adicionarOuvintes();
}

window.onload = executarCodigo;
