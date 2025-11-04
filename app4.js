const imagem = document.querySelectorAll("img");
let foto_troca = false;

function TrocaFoto() {
  if (foto_troca === false) {
    for (let i = 0; i < imagem.length; i++) {
  imagem[i].src = `machado${i + 1}.jpg`;
    }
    foto_troca = true;
  } else {
    for (let i = 0; i < imagem.length; i++) {
      imagem[i].src = `machado${i}.jpg`;
    }
    foto_troca = false;
  }
}