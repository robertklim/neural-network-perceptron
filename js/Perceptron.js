// perceptron class
class Perceptron {
    constructor(weightsNum) {
        this.learning_rate = 0.01;
        this.weights = new Array(weightsNum);
        this.initiateWeights();
    }

    initiateWeights() {
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        
        let output = sign(sum);
        return output;
    }

    guessY(x) {
        // let a = this.weights[1] / this.weights[0];
        // let b = this.weights[2];
        // return a * x + b;
        let w0 = this.weights[0];
        let w1 = this.weights[1];
        let w2 = this.weights[2];
        return -(w2/w1) - (w0/w1) * x;
    }

    train(inputs, target) {
        let guess = this.guess(inputs);
        let error = target - guess;
        // tune the weights
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learning_rate;
        }
    }

    printWeights() {
        console.log('weights:');
        console.table(this.weights);
    }

    getWeight(i) {
        return this.weights[i];
    }

}

// activation function
function sign(n) {
    if (n >= 0) {
        return 1;
    } else {
        return -1;
    }
}