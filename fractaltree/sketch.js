// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM

var tree = [];
var leaves = [];

var count = 0;

function setup() {
  createCanvas(500, 500);
	createP('')
	angleSliderleft = createSlider(3, 12, 6, 0);
	angleSliderleft.position(20, 40);
	angleSliderright = createSlider(3, 12, 3, 0);
	angleSliderright.position(170, 40);
	weightSlider= createSlider(1,6,4,0)
	weightSlider.position(20,100);
	
	button = createButton("Lass den Baum wachsen");
	button.position= (180,100);
	button.mousePressed(growTree);
	
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
  

}

function growTree() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 9) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(0)
  noStroke();
	//TEXTE
	fill(255);
  textSize(16);
text("Zweig, links", 25, 30);
	
	 textSize(16);
text("Zweig, rechts", 175, 30);
	
	
		 textSize(16);
text("dicke der Äste", 25, 90);
	
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }


  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 10, 10);
    //leaves[i].y += random(0, 2);
  }

}