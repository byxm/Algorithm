var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
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
            color.set(el, "white");
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
        var distance = new Map(); // 存储最短路径的顶点映射
        var precessors = new Map(); // 存储每个顶点对应的前溯节点
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v_1 = _a[_i];
            distance.set(v_1, 0);
            precessors.set(v_1, null);
        }
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var adjVertex = this.adjList.get(u);
            colors.set(u, "grey"); // 将当前队列首部的定点访问状态设置为被发现
            for (var _b = 0; _b < adjVertex.length; _b++) {
                var neighbors = adjVertex[_b];
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
            distance: distance,
            precessors: precessors
        };
    };
    /**
     * @description 深度优先遍历，从指定的图的定点开始向下遍历节点直到遍历的顶点没有邻边
     */
    SparseGraph.prototype.dfs = function (callback) {
        var colors = this.initializeColor();
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            if (colors.get(vertex) === "white") {
                // 开始从顶点遍历
                this.dfsFirst(vertex, colors, callback);
            }
        }
    };
    SparseGraph.prototype.dfsFirst = function (vertex, colors, callback) {
        colors.set(vertex, "grey"); //标记顶点为已访问
        if (callback) {
            callback(vertex);
        }
        for (var _i = 0, _a = this.adjList.get(vertex); _i < _a.length; _i++) {
            var adjVertex = _a[_i];
            if (colors.get(adjVertex) === "white") {
                this.dfsFirst(adjVertex, colors, callback);
            }
        }
        colors.set(vertex, "black"); // 访问完毕标记顶点为以搜索
    };
    return SparseGraph;
})();
var sparseGraph = new SparseGraph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var _i = 0; _i < myVertices.length; _i++) {
    var el = myVertices[_i];
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
sparseGraph.addEdage("D", "G");
sparseGraph.addEdage("D", "H");
// sparseGraph.toString();
var printVertex = function (vertexValue) {
    console.log("vertex: " + vertexValue);
};
var graphInfo = sparseGraph.bfs(myVertices[0], printVertex);
// console.log("graphInfo", graphInfo.distance, graphInfo.precessors);
/**
 * @description 追溯指定顶点到各个顶点的路径
 * 首先将顶点入栈，然后使用指定顶点找到对应的前溯节点，
 */
var fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
    var toVertex = myVertices[i]; // 查到下一个顶点信息
    var pathStack = new Stack_1["default"]();
    for (var v = toVertex; v !== fromVertex; v = graphInfo.precessors.get(v)) {
        // 从当前节点依次往前溯点找，直到找到顶点为止
        pathStack.push(v);
    }
    pathStack.push(fromVertex);
    var pathStr = pathStack.pop();
    while (!pathStack.isEmpty()) {
        pathStr = pathStr + " -> " + pathStack.pop(); // 出栈的元素是路径最后的点
    }
    console.log("pathStr", pathStr);
}
sparseGraph.dfs(printVertex); // 深度有点遍历调用
exports["default"] = SparseGraph;
