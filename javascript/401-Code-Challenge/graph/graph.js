const Vertex = require('./vertex');
const Edge = require('./edge');

// using Adjacency List way
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        // they exist
        const adjacencies = this.getNeighbours(start) // get me the neighbours of start
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("vertex does not exist")
            return;
        }
        return this.adjacencyList.get(vertex);
    }

    getNodes() {
        let list = [];
        for (const [vertex, edge] of this.adjacencyList.entries()) {
            list.push(vertex);
        }
        return list;
      }

      breadthFirst(startNode) {
        let queue = [];
        let visitedNodes = [];

        queue.unshift(startNode);
        visitedNodes.push(startNode);

        while (queue.length) {
            const current = queue.pop();
            const neighbors = this.getNeighbours(current);

            for (let neighbor of neighbors) {
                let neighborNode = neighbor.vertex;
                if (visitedNodes.includes(neighborNode)) {
                    continue;
                } else {
                    visitedNodes.push(neighborNode);
                    queue.unshift(neighborNode);
                }
            }
        }
        return visitedNodes;
    }


}

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(one, three);
myGraph.addDirectedEdge(five, three);

console.log("------ neighbours of 2------")
console.log(myGraph.getNeighbours(two));

console.log('breadth', myGraph.breadthFirst(zero));

console.log('getNodes:',myGraph.getNodes());
for (const [k,v] of myGraph.adjacencyList.entries()) {
    console.log("k = ", k, " v =", v);
}