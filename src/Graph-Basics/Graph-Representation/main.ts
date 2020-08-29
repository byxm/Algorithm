import SparseGraph, { adjIterator } from "./SparseGraph";

const main = () => {
  const graph = new SparseGraph(7, false);
  graph.addEdage(0, 1);
  graph.addEdage(0, 3);
  graph.addEdage(1, 2);
  graph.addEdage(1, 6);
  graph.addEdage(2, 3);
  graph.addEdage(2, 5);
  graph.addEdage(3, 4);
  graph.addEdage(4, 5);
  graph.addEdage(5, 6);

  for (let i = 0; i < 7; i++) {
    const adj = new adjIterator(graph, i);
    const arr = [];
    for (let w = adj.begin(); !adj.end(); w = adj.next()) {
      arr.push(w);
    }
    console.log(`${i}:${arr.join(" ")}`);
  }

};

main();
