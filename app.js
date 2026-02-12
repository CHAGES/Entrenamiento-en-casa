const rutina = [
"1 ronda de rutina básica",
"Caminata suave 15–20 min",
"2 rondas de rutina básica",
"Descanso completo",
"2 rondas básicas + abdomen",
"Caminata suave 15–20 min",
"Descanso total",
"2 rondas de rutina básica",
"Caminata moderada 20 min",
"2 rondas básicas + abdomen",
"Descanso",
"2 rondas descansando menos",
"Caminata o bici suave 20 min",
"Descanso",
"2 rondas rutina progreso",
"Caminata moderada 20 min",
"3 rondas rutina progreso",
"Descanso",
"3 rondas + abdomen",
"Caminata suave 20 min",
"Descanso",
"3 rondas rutina progreso",
"Caminata rápida 25 min",
"3 rondas + abdomen",
"Descanso",
"4 rondas suaves progreso",
"Caminata ligera 20 min",
"Descanso",
"Prueba personal 3 rondas seguidas",
"Caminata larga 25 min + estiramientos"
];

let dia = localStorage.getItem("dia") || 1;
document.getElementById("dia").innerText = "Día " + dia;
document.getElementById("actividad").innerText = rutina[dia-1];

function activar(){
  alert("Recordatorio configurado (demo web).");
}
