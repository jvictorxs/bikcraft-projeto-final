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
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute("aria-expanded", ativa)
  console.log(resposta);
  console.log(controls);
  console.log(pergunta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);
