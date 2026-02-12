const rutina = [
"1 ronda de rutina básica","Caminata suave 15–20 min","2 rondas de rutina básica","Descanso completo",
"2 rondas básicas + abdomen","Caminata suave 15–20 min","Descanso total","2 rondas de rutina básica",
"Caminata moderada 20 min","2 rondas básicas + abdomen","Descanso","2 rondas descansando menos",
"Caminata o bici suave 20 min","Descanso","2 rondas rutina progreso","Caminata moderada 20 min",
"3 rondas rutina progreso","Descanso","3 rondas + abdomen","Caminata suave 20 min","Descanso",
"3 rondas rutina progreso","Caminata rápida 25 min","3 rondas + abdomen","Descanso",
"4 rondas suaves progreso","Caminata ligera 20 min","Descanso","Prueba personal 3 rondas seguidas",
"Caminata larga 25 min + estiramientos"
];

let dia = parseInt(localStorage.getItem("dia") || "1");
document.getElementById("actividad").innerText = "Día " + dia + ": " + rutina[dia-1];

function renderCalendar(){
  const cal = document.getElementById("calendar");
  cal.innerHTML = "";
  rutina.forEach((_,i)=>{
    const btn = document.createElement("button");
    btn.innerText = i+1;
    btn.style.margin="4px";
    btn.style.padding="8px";
    if(i+1===dia) btn.style.background="lime";
    btn.onclick=()=>{
      dia=i+1;
      localStorage.setItem("dia",dia);
      document.getElementById("actividad").innerText="Día "+dia+": "+rutina[dia-1];
      renderCalendar();
    };
    cal.appendChild(btn);
  });
}
renderCalendar();

function activar(){
  alert("Para notificaciones reales instala la app y acepta permisos.");
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
