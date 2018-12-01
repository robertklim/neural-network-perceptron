function lineFunction(x) {
    // y = ax + b
    return 0.8 * x - 0.2;
}

// known training set
class Point {
    constructor(x = random(-1, 1), y = random(-1, 1)) {
        this.x = x;
        this.y = y;
        this.bias = 1;
        this.label;

        let lineY = lineFunction(this.x);

        if (this.y > lineY) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    getPixelX() {
        return map(this.x, -1, 1, 0, width);
    }

    getPixelY() {
        return map(this.y, -1, 1, height, 0);
    }

    show() {
        stroke(0);
        if (this.label === 1) {
            fill(255);
        } else {
            fill(0);
        }
        let px = this.getPixelX();
        let py = this.getPixelY();
        ellipse(px, py, 4, 4);
    }

}