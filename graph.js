// Graph representation
// adjacency matrix

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    // Add a vertex
    addVertex(ver){
        if(!this.adjacencyList[ver]){
            this.adjacencyList[ver] = [];
        }
    }

    // Add and Edge b/w two vertices
    addEdge(ver1, ver2){
        // first add vertices ver1 & ver2 if they are not there
        if(!this.adjacencyList[ver1])
            this.adjacencyList[ver1] = []; // initialise empty array
        if(!this.adjacencyList[ver2])
            this.adjacencyList[ver2] = []; // initialise empty array


        // and then add v2 to array of v1 and vice-versa
        if(!this.adjacencyList[ver1].includes(ver2))
            this.adjacencyList[ver1].push(ver2);
        if(!this.adjacencyList[ver2].includes(ver1))
            this.adjacencyList[ver2].push(ver1);
    }  

    // remove edge b/w v1,v2
    removeEdge(ver1, ver2){
        this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(v => v != ver2);

        this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(v => v != ver1);
    }

    //remove vertex and all its edges
    removeVertex(ver1){
        for(let i=this.adjacencyList[ver1].length-1;i>=0;i--){
            const adjVert = this.adjacencyList[ver1][i];
            this.adjacencyList[adjVert] = this.adjacencyList[adjVert].filter(v => v != ver1);
        }

        delete this.adjacencyList[ver1];
    }

    //print a graph
    printGraph(){
        for(let ver in this.adjacencyList){
            if(this.adjacencyList[ver].length != 0)
                console.log(`Edges from Vertex ${ver} are ${this.adjacencyList[ver]}`);
        }
    }

    //DFS - Depth first search - recursively visit all the neighbours
    depthFirstSearch(sVert){
        const res = []; // whenever we find a node untraversed, push it to this res and return;
        const visited = {}; // to keep track if a vertex is visited. so, we are using object
        const adjList = this.adjacencyList; // referece to the full graph

        (function dfs(vert){
            
            if(visited[vert]) return ; // if vertex is already visited exit

            visited[vert] = true;
            res.push(vert);

            adjList[vert].forEach(v => {dfs(v);});

        })(sVert); // self calling function

        return res;
    }
}

let graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0,1);
graph.addEdge(1,3);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.printGraph();console.log('\n');
console.log('dfs is ',graph.depthFirstSearch(0));
graph.removeEdge(1,2);
graph.printGraph();console.log('\n');
graph.removeVertex(1);
graph.printGraph();console.log('\n');
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0,1);
graph.addEdge(1,3);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.printGraph();console.log('\n');
console.log('dfs is ',graph.depthFirstSearch(0));

// BFS chatgpt(AI) code reference
class Graph {
    // ... (other methods as above)

    // Breadth-First Search (BFS)
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


