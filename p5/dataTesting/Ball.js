class Ball {
    constructor() {
        this.x = 5;
        this.y = 10;
        this.ht = 25;
    }
    display() {
        ellipse(this.x, this.y, this.ht, this.ht);
    }
    update() {
        this.x++;
        this.y++;
    }
}