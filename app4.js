const imagem = document.querySelectorAll("img");
let foto_troca = false;

function TrocaFoto() {
  if (foto_troca === false) {
    for (let i = 0; i < imagem.length; i++) {
      imagem[i].src = `pedro${i + 9}.jpg`;
    }
    foto_troca = true;
  } else {
    for (let i = 0; i < imagem.length; i++) {
      imagem[i].src = `pedro${i}.jpg`;
    }
    foto_troca = false;
  }
}