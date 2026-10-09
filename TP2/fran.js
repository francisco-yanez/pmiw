
let fran1, fran2, fran3, fran4, fran5, fran6, fran7;

// CARGA DE LAS IMÁGENES DE FRANCISCO
function imagenesF() {
  fran1 = loadImage("data/fran1.png");
  fran2 = loadImage("data/fran2.png");
  fran3 = loadImage("data/fran3.png");
  fran4 = loadImage("data/fran4.png");
  fran5 = loadImage("data/fran5.png");
  fran6 = loadImage("data/fran6.png");
  fran7 = loadImage("data/fran7.png");
}


function fran() {

  
  if (pantalla === 13) {
    image(fran1, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(50);
    textAlign(CENTER, CENTER);

    text("ELEGISTE", 300, 200);
    text("A", 300, 250);
    text("FRAN!!!", 300, 300);

    
    if (millis() - tiempo > 5000) {
      pantalla = 9;
      tiempo = millis();
    }

  
  } else if (pantalla === 9) {
    image(fran2, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(24);
    textAlign(CENTER, CENTER);

    text("FRANCISCO ES UN CHICO DE 18 AÑOS QUE", 400, 100);
    text("ESTUDIA DISEÑO MULTIMEDIAL, SU TIEMPO LO", 400, 150);
    text("PASA MAYORMENTE YENDO A CURSAR Y", 400, 200);
    text("HACIENDO LOS TRABAJOS PRÁCTICOS DE SU", 400, 250);
    text("CARRERA. AYUDALO A QUE NO SE CANSE Y QUE", 400, 300);
    text("LOGRE UNA RUTINA DIARIA QUE LO AYUDE A", 400, 350);
    text("RECIBIRSE", 400, 400);

    
    if (millis() - tiempo > 7000) {
      pantalla = 10;
      tiempo = millis();
    }

  
  } else if (pantalla === 10) {
    image(fran3, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(40);
    textAlign(CENTER, CENTER);

    text("FRANCISCO NORMALMENTE SE", 350, 60);
    text("LEVANTA A LAS 10 DE LA", 350, 120);
    text("MAÑANA", 350, 180);

    fill(255);
    textSize(30);

    text("DESAYUNA", 200, 310);
    text("SIGUE DURMIENDO", 600, 310);

  
  } else if (pantalla === 11) {
    image(fran4, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(40);
    textAlign(CENTER, CENTER);

    text("UNA VEZ QUE EL TERMINA", 400, 40);
    text("DE HACER LA TAREA PARA", 400, 90);
    text("LA PRÓXIMA CLASE SU DÍA", 400, 140);
    text("SIGUE......", 400, 190);

    fill(255);
    textSize(20);

    text("SE PONE A JUGAR", 200, 285);
    text("VIDEOJUEGOS/ENTRA A LAS", 200, 320);
    text("REDES", 200, 355);

    text("AVANZA CON OTRO", 600, 285);
    text("TRABAJO DE OTRA", 600, 315);
    text("MATERIA", 600, 355);

  
  } else if (pantalla === 12) {
    image(fran5, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(40);
    textAlign(CENTER, CENTER);

    text("FRANCISCO PARA TERMINAR", 400, 40);
    text("SU DIA, CENA Y LUEGO SE VA", 400, 100);
    text("A ACOSTAR", 400, 160);

    fill(255);
    textSize(30);
    text("SE DUERME RÁPIDO", 200, 310);

    textSize(16);
    text("SE PONE A JUGAR", 600, 280);
    text("VIDEOJUEGOS/ENTRA A LAS", 600, 315);
    text("REDES Y SE DUERME TARDE", 600, 350);

  
  } else if (pantalla === 15) {
    image(fran6, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(30);
    textAlign(CENTER, CENTER);

    text("FRANCISCO SE QUEDO DESPIERTO", 400, 180);
    text("Y SE DURMIO TARDE!!!", 400, 230);

  // PANTALLA 16: FINAL DE DORMIR TEMPRANO
  } else if (pantalla === 16) {
    image(fran7, 0, 0, 800, 450);

    fill(50, 145, 225);
    textSize(30);
    textAlign(CENTER, CENTER);

    text("FRANCISCO SE DURMIO TEMPRANO", 400, 180);
    text("SU DIA TERMINO!!!", 400, 230);
  }
}

// CONTROL DE LOS CLICS DE FRANCISCO
function opcionesFran() {

  
  if (pantalla === 13) {
    pantalla = 9;
    tiempo = millis();

  
  } else if (pantalla === 9) {
    pantalla = 10;
    tiempo = millis();

  // DE LA PANTALLA 10 A LA 11
  } else if (pantalla === 10) {

    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 11;

    } else if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 11;
    }

  // DE LA PANTALLA 11 A LA 12
  } else if (pantalla === 11) {

    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 12;

    } else if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 12;
    }

  // ELECCIÓN DEL FINAL
  } else if (pantalla === 12) {

    // IZQUIERDA: SE DUERME TEMPRANO
    if (mouseX > 50 && mouseX < 360 && mouseY > 250 && mouseY < 375) {
      pantalla = 16;
      tiempo = millis();

    // DERECHA: SE DUERME TARDE
    } else if (mouseX > 440 && mouseX < 755 && mouseY > 250 && mouseY < 375) {
      pantalla = 15;
      tiempo = millis();
    }

  // DE CUALQUIER FINAL A LOS CRÉDITOS
  } else if (pantalla === 15 || pantalla === 16) {
    pantalla = 21;
    iniciarCreditos();
  }
}
