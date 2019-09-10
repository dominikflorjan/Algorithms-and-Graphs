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
            arrayOfNodes.push(this.root);
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