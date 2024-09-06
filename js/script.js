// criar duas constantes para buscar no html.

const container = document.querySelector(".container");
const colorInput = document.querySelector(".button");

//Volta a cor padrão.

const defaultColor = "#fff";
container.style.background = defaultColor;

//criar uma função para mudar a cor de fundo ao clicar e selecionar a cor desejada.

function onChangeBg() {
  container.style.background = colorInput.value;
}

//muda a cor de fundo enquanto passa o cursor pointer pelo seletor de cores.

colorInput.addEventListener("input", onChangeBg);
