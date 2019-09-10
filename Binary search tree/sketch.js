var tree;
var arrayOfNodes = [];

function setup() {
    createCanvas(800, 600);
    background(120);
    tree = new Tree();
    // for(var i = 0; i<10; i++){
    //     tree.addValue(floor(random(0,10)));
    // }
    tree.addValue(5);
    tree.addValue(10);
    tree.addValue(7);
    tree.addValue(3);
    tree.addValue(4);
    tree.addValue(2);
    console.log(tree);
    tree.traverse();
    console.log(arrayOfNodes);
}

function draw(){

}







