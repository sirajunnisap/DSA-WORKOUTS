class Graph {
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]  = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge( vertex1 , vertex2 ) {
       return( 
         this.adjecencyList[vertex1].has(vertex2) &&
        this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjacecvertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjacecvertex)
        }
        delete this.adjecencyList[vertex]
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log( vertex + '->' + [...this.adjecencyList[vertex]]);

        }
    }
}
const graph1 = new Graph()

graph1.addVertex('A')
graph1.addVertex('B')
graph1.addVertex('C')

graph1.addEdge('A','B')
graph1.addEdge('B','C')
// graph.removeEdge('A','B')

graph1.display()

console.log(graph1.hasEdge('A','B'));
graph1.removeVertex('A')
graph1.display()



class graph {
    constructor() {
      this.map = new Map();
    }
    addVertex(element) {
      this.map.set(element, new Array());
    }
  
    insert(vertex, edge, isBiDirectional) {
      if (!this.map.has(vertex)) {
        this.addVertex(vertex);
      }
  
      if (!this.map.has(edge)) {
        this.addVertex(edge);
      }
  
      this.map.get(vertex).push(edge);
      if (isBiDirectional) {
        this.map.get(edge).push(vertex);
      }
    }
    delete(vertex) {
      if (this.map.has(vertex)) {
        let edges = this.map.get(vertex);
        console.log(edges);
        for (let edge of edges) {
          this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1);
        }
        this.map.delete(vertex);
      }
    }
  
    //   display (){
    //     for(let key of this.map.keys() ){
    //         console.log(key,": ");
  
    //         for(let value of this.map.get(key)){
    //             console.log(value);
    //         }
    //     }
    //   }
  
    display() {
      for (let vertex of this.map.keys()) {
        let edge = this.map.get(vertex);
        console.log(vertex, edge);
      }
    }
  }
  
  const gr = new graph();
  
  gr.insert(3, 5, true);
  // gr.insert(3, 4, true);
  // gr.insert(5, 6, false);
  // gr.delete(3)
  gr.display();