let perceptron;
let points = new Array(100);
let trainingIndex = 0;

function setup() {
    createCanvas(600, 600);

    // initiate training set
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point();
    }

    perceptron = new Perceptron(3);
    perceptron.printWeights();

    let inputs = [random(-1, 1), random(-1, 1)];
    console.log('inputs:');
    console.table(inputs);

    console.log('guess:');
    console.log(perceptron.guess(inputs));

}

function draw() {
    background(245);

    // draw correct division line
    stroke(0);
    //line(0, height, width, 0);
    let p1 = new Point(-1, lineFunction(-1));
    let p2 = new Point(1, lineFunction(1));
    line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY(),);

    // draw petceptron's line
    let p3 = new Point(-1, perceptron.guessY(-1));
    let p4 = new Point(1, perceptron.guessY(1));
    line(p3.getPixelX(), p3.getPixelY(), p4.getPixelX(), p4.getPixelY());

    // show training set
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

    for (let i = 0; i < points.length; i++) {
        let inputs = [points[i].x, points[i].y, points[i].bias];
        let target = points[i].label;
        
        //perceptron.train(inputs, target);

        let guess = perceptron.guess(inputs);
        if (guess == target) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 0);
        }
        noStroke();
        ellipse(points[i].getPixelX(), points[i].getPixelY(), 4, 4);

    }

    // perceptron.printWeights();

    let training = points[trainingIndex];
    let inputs = [training.x, training.y, training.bias];
    let target = training.label;
    perceptron.train(inputs, target);
    trainingIndex++;
    if (trainingIndex === points.length) {
        trainingIndex = 0;
    }

}

// function mousePressed() {
//     for (let i = 0; i < points.length; i++) {
//         let inputs = [points[i].x, points[i].y];
//         let target = points[i].label;

//         perceptron.train(inputs, target);
//     }
// }