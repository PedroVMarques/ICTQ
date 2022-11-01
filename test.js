var form = document.getElementById("contact");
var btnform = document.getElementById("btnform");
var mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var infoUser = Object.fromEntries(data);
    console.log(infoUser);
  
    form.reset();
    mensagem.innerText = 'Senha Redefinida! Clique em Voltar';
    mensagem.style.display = "block";
    setTimeout(()=>{
      location.reload()
    }, 5000)
});