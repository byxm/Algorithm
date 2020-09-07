var Queue_1 = require('./Queue');
/**
 * Javascript数据结构与算法书中例子实现，邻接表实现稀疏图
 */
var SparseGraph = (function () {
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
    /**
     * 为图的每个节点生成初始状态的辅助函数
     * white 表示未被访问过的节点
     * grey 表示被发现的节点
     * black 表示已被搜索过得节点
    */
    SparseGraph.prototype.initializeColor = function () {
        var color = new Map();
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var el = _a[_i];
            color.set(el, 'white');
        }
        return color;
    };
    /**
     * 图的广度优先遍历
     * 和树的遍历方法类似。需要对每个节点进行访问，将当前节点入队，访问完成后出队，然后将它的相邻节点入队
     * 每个节点用以上的三种颜色表示它们遍历的状态
     * @param { v, callback } v 要遍历的节点，callback 对接点操作的回调函数
    */
    SparseGraph.prototype.bfs = function (v, callback) {
        var colors = this.initializeColor();
        var queue = new Queue_1["default"]();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var adjVertex = this.adjList.get(u);
            colors.set(u, 'grey'); // 将当前队列首部的定点访问状态设置为被发现
            // console.log('vetexttt', u, adjVertex)
            for (var _i = 0; _i < adjVertex.length; _i++) {
                var neighbors = adjVertex[_i];
                if (colors.get(neighbors) === 'white') {
                    colors.set(neighbors, 'grey');
                    queue.enqueue(neighbors);
                }
            }
            colors.set(u, 'black'); // 将顶点的状态设置为已搜索过
            if (callback) {
                callback(u);
            }
        }
    };
    return SparseGraph;
})();
var sparseGraph = new SparseGraph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var _i = 0; _i < myVertices.length; _i++) {
    var el = myVertices[_i];
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
var printVertex = function (vertexValue) {
    console.log("vertex: " + vertexValue);
};
sparseGraph.bfs(myVertices[0], printVertex);
