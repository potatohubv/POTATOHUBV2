function login(){
  if(document.getElementById("pass").value==="POTATOHUBV17PAPOI"){
    document.getElementById("panel").style.display="block";
  }else{
    alert("Contraseña incorrecta");
  }
}

function giveCredits(){
  let n = Number(document.getElementById("give").value);
  let c = Number(localStorage.getItem("credits")||0);
  localStorage.setItem("credits", c+n);
  alert("Créditos regalados 😈");
}
