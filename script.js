let credits = Number(localStorage.getItem("credits") || 0);
let expire = Number(localStorage.getItem("expire") || 0);

document.getElementById("credits").innerText = credits;

function updateTimer(){
  if(expire > Date.now()){
    let t = expire - Date.now();
    let h = Math.floor(t/3600000);
    let m = Math.floor((t%3600000)/60000);
    let s = Math.floor((t%60000)/1000);
    document.getElementById("timer").innerText =
      `Tiempo restante: ${h}h ${m}m ${s}s`;
  }else{
    document.getElementById("timer").innerText="Tiempo agotado";
  }
}
setInterval(updateTimer,1000);

function genKey(){
  return "POTATO-"+Math.random().toString(36).substring(2,10).toUpperCase();
}

function buyTime(h){
  let cost = h==6?1:h==12?2:3;
  if(credits < cost){
    document.getElementById("msg").innerText="Créditos insuficientes :[";
    return;
  }
  credits -= cost;
  localStorage.setItem("credits",credits);

  let k = genKey();
  let t = Date.now() + h*3600000;

  localStorage.setItem("validKey",k);
  localStorage.setItem("expire",t);

  alert("TU KEY:\n"+k);
}

function checkKey(){
  let k = document.getElementById("keyInput").value.trim();
  if(k === localStorage.getItem("validKey") && Date.now() < expire){
    document.getElementById("msg").innerText="Valid key! 😈";
  }else{
    document.getElementById("msg").innerText="NOT WHITE LIST";
  }
}

function redeemCode(){
  let c = document.getElementById("codeInput").value.trim();
  if(c==="POTATOHUB"){
    credits +=5;
    localStorage.setItem("credits",credits);
    alert("+5 créditos 🔥");
  }else{
    alert("Código inválido");
  }
}
