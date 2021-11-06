const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("canvas").width = window.innerWidth/2;
document.getElementById("canvas").height = window.innerHeight;

document.querySelector(".code").value = `
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
`;

function runCode(){
  const code = document.querySelector(".code").value;
  eval(code);
}

function clearCanvas(){
  eval(`document.getElementById("canvas").getContext("2d").clearRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height);`)
}
