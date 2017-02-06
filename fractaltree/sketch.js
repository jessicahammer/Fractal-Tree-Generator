var winkel = 3.14159265359 / 4; // 3.14159265359/4
var coef = 0.5;
var l = 250;
var branches = 1;
var fractals = 6;

var brsize = 10;

var winkelSlider, coefSlider, lenghtSlider, branchesSlider, showFractal;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
		background(0);
	frameRate(30);

	//Größe des Baumes
	lenghtSlider = createSlider(50, 450, 250, 50);
	lenghtSlider.position(20, 90);
	//Zweiganzahl
	branchesSlider = createSlider(1, 4, 3, 1);
	branchesSlider.position(20, 130);
	//Winkel
	winkelSlider = createSlider(0, 3.14159265359, 1, 0.5);
	winkelSlider.position(20, 170);
	//Winkel links
	winkelSliderB = createSlider(0, 3.14159265359, 1, 0.5);
	winkelSliderB.position(20, 210);
	//Fraktale
	showFractal = createSlider(1, 10, 3, 1);
	showFractal.position(20, 250);
	//Größe der Zweige
	coefSlider = createSlider(0, 0.75, 0.6, 0.05);
	coefSlider.position(20, 290);
	//Stärke der Linie
	weightSlider = createSlider(1,10, 1, 1);
	weightSlider.position(20, 330);
	//Farbe
	redcolorSlider = createSlider(0, 255, 255, 5);
	redcolorSlider.position(20, 415);
	
	greencolorSlider = createSlider(0, 255, 80, 5);
	greencolorSlider.position(20, 455);
	
	bluecolorSlider = createSlider(0, 255, 80, 5);
	bluecolorSlider.position(20, 495);
	
  	
}

function draw() {
	background(0);
	
	winkel = winkelSlider.value();
	
	winkelSlider.value();
	
	coef = coefSlider.value();
	l = lenghtSlider.value();
	branches = branchesSlider.value();
	fractals = showFractal.value();
	//Beschreibung  Slider
	textSize(21);
	stroke(1);
	text("FRAKTAL GENERATOR", 20, 50)
	textSize(14);
	stroke(0);
	fill(255);
	text("Größe ", 160, 105);
	text("Zweiganzahl ", 160, 145);
	text("Winkel " , 160, 185);
	text("Winkel, linker Zweig " , 160, 225);
	text("Fraktale " , 160, 265);
	text("Größe der Äste " , 160, 305);
	text("Dicke " , 160, 345);
	textSize(16);
	stroke(1);
	text("Farbe definieren ", 20, 400)
	textSize(14);
	text("rot " + redcolorSlider.value(), 160, 430);
	text("grün " + greencolorSlider.value(), 160, 470);
	text("blau " + greencolorSlider.value(), 160, 510);

	
	
	//Dicke
	brsize = (weightSlider.value());
	//Farbe
	stroke(redcolorSlider.value(),greencolorSlider.value(), bluecolorSlider.value());

	translate(width / 2, height );
	branch(l, fractals);

}

function branch(len, s) {
	//Äste werden kleiner
	strokeWeight(s+(brsize/1.2));
	line(0, 0, 0, -len);
	translate(0, -len);
	brsize = brsize--;

	if (s > 0) {
		//ellipse(0,0,5*s,5*s);
		var bcoef = winkel / branches;

		for (var i = 1; i <= branches; i++) {
			//rechter Zweig
			push();
			rotate(i * bcoef);
			branch(len * coef, s - 1);
			pop();

			push();
			/*winkelSliderB.value()*/
			rotate(-i * winkelSliderB.value() * bcoef);
			branch(len * coef, s - 1);
			pop();
		}
	}else{
		ellipse(0,0,5,5);
	}
}



