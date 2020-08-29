// 稠密图 - 邻接矩阵（适合用邻接矩阵来表示稠密图）


/**
 * @description 使用邻接矩阵的方式构建稠密图，每个顶点都需要和其他的所有顶点有关联关系
 * 领接矩阵表示每个顶点和指定顶点之间构成边
 */
class DenseGraph {
  private vertexCount: number; // 顶点在空间中存在的
  private edageCount: number; // 边数量
  private isDirected: boolean; // 是有向图还是无向图

  private graphData: boolean[][]; // 图的数据

  constructor(vertexCount: number, isDirected: boolean) {
    this.vertexCount = vertexCount;
    this.edageCount = 0;
    this.isDirected = isDirected;
    for (let i = 0; i < vertexCount; i++) {
      this.graphData.push([]);
      for (let j = this.graphData.length - 1, k = 0; k < vertexCount; k++) {
        this.graphData[j].push(false);
      }
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

  // 添加一条边
  addEdage(v: number, w: number) {
    try {
      this.isAcrossSide(v, w);
      if (this.hasEdage(v, w)) {
        return;
      }
      this.graphData[v][w] = true;
      if (!this.isDirected) {
        // 如果不是有向图，就需要将矩阵对称的索引交换位置也设置为true
        this.graphData[w][v] = true;
      }
      this.edageCount++;
    } catch (err) {
      console.error(err);
    }
  }

  // 顶点之间是否存在边
  hasEdage(v, w): boolean {
    try {
      this.isAcrossSide(v, w);
      return this.graphData[v][w];
    } catch (err) {
      console.error(err);
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
