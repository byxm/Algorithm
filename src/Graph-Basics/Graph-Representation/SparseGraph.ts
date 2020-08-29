// 稀疏图 - 适合用邻接表来表示稀疏图

/**
 * 邻接表以列的形式表示关系，第一列表示所有的顶点，往后分别表示每个顶点和它构成边的顶点
 */
class SparseGraph {
  private vertexCount: number; // 顶点在空间中存在的
  private edageCount: number; // 边数量
  private isDirected: boolean; // 是有向图还是无向图

  private graphData: boolean[][]; // 图的数据

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




  isAcrossSide(v, w) {
    if (!(v >= 0 && v < this.vertexCount)) {
      throw new Error(`${v} 顶点越界`);
    }
    if (!(w >= 0 && w < this.vertexCount)) {
      throw new Error(`${w} 顶点越界`);
    }
  }

}
