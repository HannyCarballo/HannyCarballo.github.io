let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
const text = "Soy estudiante de Ingeniería en Computación, <br>además poseo una formación técnica en el área de informática.";
typewriter
  .pauseFor(2500)
  .typeString(text)
  .pauseFor(200)
  .deleteChars(10)
  .start();
