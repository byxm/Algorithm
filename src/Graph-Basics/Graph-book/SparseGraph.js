/**
 * Javascript数据结构与算法书中例子实现，邻接表实现稀疏图
 */
var SparseGraph = /** @class */ (function () {
    function SparseGraph() {
        this.vertices = [];
        this.adjList = new Map();
    }
    SparseGraph.prototype.addVertex = function (v) {
        // 用于添加顶点
        this.vertices.push(v);
        this.adjList.set(v, []);
    };
    /**
     * 给图中的顶点添加邻边
     * @param { v, w } 分别是相邻的两个顶点
     */
    SparseGraph.prototype.addEdage = function (v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // 如果是添加的无向图，则需要这一步，如果是有向图就不需要这一步
    };
    SparseGraph.prototype.toString = function () {
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            var edage = this.adjList.get(vertex);
            console.log(vertex + ": " + edage + "\n");
        }
    };
    return SparseGraph;
}());
var sparseGraph = new SparseGraph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var _i = 0, myVertices_1 = myVertices; _i < myVertices_1.length; _i++) {
    var el = myVertices_1[_i];
    sparseGraph.addVertex(el); // 添加顶点
}
sparseGraph.addEdage('A', 'B');
sparseGraph.addEdage('A', 'C');
sparseGraph.addEdage('A', 'D');
sparseGraph.addEdage('B', 'E');
sparseGraph.addEdage('B', 'F');
sparseGraph.addEdage('E', 'I');
sparseGraph.addEdage('C', 'D');
sparseGraph.addEdage('C', 'G');
sparseGraph.addEdage('D', 'H');
sparseGraph.addEdage('D', 'G');
sparseGraph.toString();
