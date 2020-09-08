import Queue from "./Queue";

/**
 * Javascript数据结构与算法书中例子实现，邻接表实现稀疏图
 */
class SparseGraph {
  vertices: Array<any>; // 存储所有顶点
  adjList: Map<any, any>; // 存储每个顶点对应的邻边顶点

  constructor() {
    this.vertices = [];
    this.adjList = new Map<any, any>();
  }

  addVertex(v) {
    // 用于添加顶点
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  /**
   * 给图中的顶点添加邻边
   * @param { v, w } 分别是相邻的两个顶点
   */
  addEdage(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // 如果是添加的无向图，则需要这一步，如果是有向图就不需要这一步
  }

  toString() {
    for (const vertex of this.vertices) {
      const edage = this.adjList.get(vertex);
      console.log(`${vertex}: ${edage}\n`);
    }
  }

  /**
   * 为图的每个节点生成初始状态的辅助函数
   * white 表示未被访问过的节点
   * grey 表示被发现的节点
   * black 表示已被搜索过得节点
   */
  initializeColor() {
    const color = new Map();
    for (const el of this.vertices) {
      color.set(el, "white");
    }
    return color;
  }

  /**
   * 图的广度优先遍历
   * 和树的遍历方法类似。需要对每个节点进行访问，将当前节点入队，访问完成后出队，然后将它的相邻节点入队
   * 每个节点用以上的三种颜色表示它们遍历的状态
   * @param { v, callback } v 要遍历的节点，callback 对接点操作的回调函数
   */
  bfs(v, callback) {
    const colors = this.initializeColor();
    const queue = new Queue();
    const distance = new Map(); // 存储最短路径的顶点映射
    const precessors = new Map(); // 存储每个顶点对应的前溯节点
    for (const v of this.vertices) {
      distance.set(v, 0);
      precessors.set(v, null);
    }
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      const adjVertex = this.adjList.get(u);
      colors.set(u, "grey"); // 将当前队列首部的定点访问状态设置为被发现
      for (const neighbors of adjVertex) {
        // 遍历邻边顶点获取查看邻边顶点状态
        if (colors.get(neighbors) === "white") {
          // 将邻边顶点的状态设置为已发现
          colors.set(neighbors, "grey");
          distance.set(neighbors, distance.get(u) + 1); // 计算每个顶点到每个相连接顶点的路径距离
          precessors.set(neighbors, u);
          queue.enqueue(neighbors);
        }
      }
      colors.set(u, "black"); // 将顶点的状态设置为已搜索过
      if (callback) {
        callback(u);
      }
    }
    return {
      distance,
      precessors,
    };
  }
}

const sparseGraph = new SparseGraph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (const el of myVertices) {
  sparseGraph.addVertex(el); // 添加顶点
}

sparseGraph.addEdage("A", "B");
sparseGraph.addEdage("A", "C");
sparseGraph.addEdage("A", "D");
sparseGraph.addEdage("B", "E");
sparseGraph.addEdage("B", "F");
sparseGraph.addEdage("E", "I");
sparseGraph.addEdage("C", "D");
sparseGraph.addEdage("C", "G");
sparseGraph.addEdage("D", "H");
sparseGraph.addEdage("D", "G");

sparseGraph.toString();

const printVertex = (vertexValue) => {
  console.log(`vertex: ${vertexValue}`);
};

sparseGraph.bfs(myVertices[0], printVertex);


export default SparseGraph