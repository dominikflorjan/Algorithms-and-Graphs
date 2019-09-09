var tree;

function setup() {
    createCanvas(800, 600);
    background(120);
    tree = new Tree();
    for(var i = 0; i<10; i++){
        tree.addValue(floor(random(0, 100)))
    }
    console.log(tree);
    tree.traverse();
}

function draw(){

}

class Tree {
    constructor() {
        this.root = null;
    }
    addValue(val) {
        var n = new Node(val);
        if (this.root == null) {
            this.root = n;
            this.root.x = width/2;
            this.root.y = 0.1*height;
        }
        else {
            this.root.addNode(n);
        }
    }

    traverse() {
        this.root.visit(this.root);
    }
    search(val) {
        var found = this.root.search(val);
        return found;
    }
}


class Node {
    constructor(val, x, y) {
        this.value = val;

        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
    addNode(n) {
        if (n.value < this.value) {
            if (this.left == null) {
                this.left = n;
                this.left.x = this.x - 50;
                this.left.y = this.y + 20;
            }
            else {
                this.left.addNode(n);
            }
        }
        else if (n.value > this.value) {
            if (this.right == null) {
                this.right = n;
                this.right.x = this.x + 50;
                this.right.y = this.y + 20;
            }
            else {
                this.right.addNode(n);
            }
        }
    }
    visit(parent) {
        if (this.left != null) {
            this.left.visit(this);
        }
        console.log(this.value);
        fill(255);
        noStroke();
        text(this.value,this.x, this.y);
        stroke(255);
        line(parent.x, parent.y, this.x, this.y);

        if (this.right != null) {
            this.right.visit(this);
        }
    }
    search(val) {
        if (this.value == val) {
            console.log("Found " + this.value);
            return this;
        }
        else if (val < this.value && this.left != null) {
            return this.left.search(val);
        }
        else if (val > this.value && this.right != null) {
            return this.right.search(val);
        }
        return null;
    }
}




