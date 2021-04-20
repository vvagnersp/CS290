/* 
Author: Spencer Wagner
Date: 4/19/2021
Description: Vector class
*/

function Vec(x, y) {
    /* Represents a vector in 2D space */
    this.x = x;
    this.y = y;
};
Vec.prototype = {
    add(v2) {
        return new Vec(this.x + v2.x, this.y + v2.y);
    },
    subtract(v2) {
        return new Vec(this.x - v2.x, this.y - v2.y);
    },
    get length() {
        return Math.sqrt(this.x**2 + this.y**2)
    },
};

var v1 = new Vec(2, 3)
console.log(v1.length)