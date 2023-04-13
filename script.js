function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/lightmode.png')
    img.setAttribute('alt', 'foto da nicoly usando uma blusa preta')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/darkmode.png')
    img.setAttribute('alt', 'foto da nicoly usando um vestido branco')

  }

  
  
}