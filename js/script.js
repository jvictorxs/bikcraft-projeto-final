//--------------------Ativar links do Menu---------------------------------
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  //include busca palavras iguais, por exemplo, o URL ta puxando a tag HTML 'a', que contem o href, se o a variavel "href" possuir href dentro do seu conteudo, é true
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//------------------Ativar itens do orçamento-------------------------------

//new URLSearchParams() retorna array com os parametros de busca
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

//--------------------Perguntas Frequentes -----------------------

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(e) {
  //pegar o valor do item clicado
  const pergunta = e.currentTarget;
  //pega o atributo do aria-controls
  const controls = pergunta.getAttribute("aria-controls");
  //pega o id do elemento filho do aria-controls com o mesmo nome
  const resposta = document.getElementById(controls);

  //adiciona ou remove a classe 'ativa
  resposta.classList.toggle("ativa");
  //verifica se contem a a classe 'ativa'
  const ativa = resposta.classList.contains("ativa");
  //define um novo valor para aria-expanded com o ativo q nesse caso é booleano
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//--------------------Galeria de Imagens -------------------------------

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
  const img = e.currentTarget;
  //verifica o tamanho da tela com matchMedia e com matches retorna booleano
  const media = matchMedia("(min-width: 935px)").matches;
  if (media) {
    //deixa o item em primeiro da lista na organização do html
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//---------------------- Animação -----------------------------------
if (window.SimpleAnime) {
  new SimpleAnime();
}
