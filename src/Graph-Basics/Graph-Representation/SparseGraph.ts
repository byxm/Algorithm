// 稀疏图 - 适合用邻接表来表示稀疏图

/**
 * 邻接表以列的形式表示关系，第一列表示所有的顶点，往后分别表示每个顶点和它构成边的顶点
 */
class SparseGraph {
  private vertexCount: number; // 顶点在空间中存在的
  private edageCount: number; // 边数量
  private isDirected: boolean; // 是有向图还是无向图

  graphData: boolean[][]; // 图的数据

  constructor(vertexCount: number, isDirected: boolean) {
    this.vertexCount = vertexCount;
    this.edageCount = 0;
    this.isDirected = isDirected;
    this.graphData = new Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
      this.graphData[i] = new Array();
    }
  }

  // 获取顶点数量
  getVertexCount(): number {
    return this.vertexCount;
  }

  // 获取边的数量
  getEdageCount(): number {
    return this.edageCount;
  }

  /**
   * @description 向图中添加一个边
   */
  addEdage(v, w) {
    try {
      this.isAcrossSide(v, w);
      this.graphData[v].push(w);
      // 无向图需要再次添加反向边，另外此处需要处理自环边的情况
      if (v !== w && !this.isDirected) {
        this.graphData[w].push(v);
      }
      this.edageCount++;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @description 判断是否存在从v到w这样的一条边
   */
  hasEdage(v, w) {
    try {
      this.isAcrossSide(v, w);
      for (let i = 0; i < this.graphData[v].length; i++) {
        if (this.graphData[v][i] === w) {
          return true;
        }
        return false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  isAcrossSide(v, w) {
    if (!(v >= 0 && v < this.vertexCount)) {
      throw new Error(`${v} 顶点越界`);
    }
    if (!(w >= 0 && w < this.vertexCount)) {
      throw new Error(`${w} 顶点越界`);
    }
  }
}

// 图的邻边遍历
export class adjIterator {
  private SparseGraph: SparseGraph;
  private vertex: number; // 要遍历的顶点
  private index: number; // 表示迭代到哪里了

  constructor(SparseGraph: SparseGraph, vertext: number) {
    this.SparseGraph = SparseGraph;
    this.vertex = vertext;
    this.index = 0;
  }

  /**
   * @description 表示迭代要开始的元素
   */
  begin() {
    this.index = 0; // 设置开始索引为0
    if (this.SparseGraph.graphData[this.vertex].length) {
      return this.SparseGraph.graphData[this.vertex][this.index];
    }
    return -1;
  }

  /**
   * @description 下一个要迭代的元素
   */
  next() {
    this.index++;
    if (this.index < this.SparseGraph.graphData[this.vertex].length) {
      return this.SparseGraph.graphData[this.vertex][this.index];
    }
    return -1;
  }

  /**
   * @description 是否迭代到最后了
   */

  end() {
      // @ts-ignore
    return this.index >= (this.SparseGraph.graphData[this.vertex][this.index]);
  }
}

export default SparseGraph;
