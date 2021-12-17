// Elementos da página
let textInput;
let memeText;

// Pega o texto digitado no input e coloca na imagem
function pegarTextoDoInput(event) {
  memeText.innerText = textInput.value;
}

// Pega os elementos da página
function obterElementos() {
  textInput = document.getElementById('text-input');
  memeText = document.getElementById('meme-text');
}

// Adiciona ouvintes aos elementos da página
function adicionarOuvintes() {
  textInput.addEventListener('input', pegarTextoDoInput);
}

// Executa o código após o carregamento da página
function executarCodigo() {
  // Pegando os elementos da página
  obterElementos();
  // Adicionando ouvintes aos elementos
  adicionarOuvintes();
}

window.onload = executarCodigo;
