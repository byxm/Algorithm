"use strict";
// 稀疏图 - 适合用邻接表来表示稀疏图
exports.__esModule = true;
/**
 * 邻接表以列的形式表示关系，第一列表示所有的顶点，往后分别表示每个顶点和它构成边的顶点
 */
var SparseGraph = /** @class */ (function () {
    function SparseGraph(vertexCount, isDirected) {
        this.vertexCount = vertexCount;
        this.edageCount = 0;
        this.isDirected = isDirected;
        this.graphData = new Array(vertexCount);
        for (var i = 0; i < vertexCount; i++) {
            this.graphData[i] = new Array();
        }
    }
    // 获取顶点数量
    SparseGraph.prototype.getVertexCount = function () {
        return this.vertexCount;
    };
    // 获取边的数量
    SparseGraph.prototype.getEdageCount = function () {
        return this.edageCount;
    };
    /**
     * @description 向图中添加一个边
     */
    SparseGraph.prototype.addEdage = function (v, w) {
        try {
            this.isAcrossSide(v, w);
            this.graphData[v].push(w);
            // 无向图需要再次添加反向边，另外此处需要处理自环边的情况
            if (v !== w && !this.isDirected) {
                this.graphData[w].push(v);
            }
            this.edageCount++;
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     * @description 判断是否存在从v到w这样的一条边
     */
    SparseGraph.prototype.hasEdage = function (v, w) {
        try {
            this.isAcrossSide(v, w);
            for (var i = 0; i < this.graphData[v].length; i++) {
                if (this.graphData[v][i] === w) {
                    return true;
                }
                return false;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    SparseGraph.prototype.isAcrossSide = function (v, w) {
        if (!(v >= 0 && v < this.vertexCount)) {
            throw new Error(v + " \u9876\u70B9\u8D8A\u754C");
        }
        if (!(w >= 0 && w < this.vertexCount)) {
            throw new Error(w + " \u9876\u70B9\u8D8A\u754C");
        }
    };
    return SparseGraph;
}());
// 图的邻边遍历
var adjIterator = /** @class */ (function () {
    function adjIterator(SparseGraph, vertext) {
        this.SparseGraph = SparseGraph;
        this.vertex = vertext;
        this.index = 0;
    }
    /**
     * @description 表示迭代要开始的元素
     */
    adjIterator.prototype.begin = function () {
        this.index = 0; // 设置开始索引为0
        if (this.SparseGraph.graphData[this.vertex].length) {
            return this.SparseGraph.graphData[this.vertex][this.index];
        }
        return -1;
    };
    /**
     * @description 下一个要迭代的元素
     */
    adjIterator.prototype.next = function () {
        this.index++;
        if (this.index < this.SparseGraph.graphData[this.vertex].length) {
            return this.SparseGraph.graphData[this.vertex][this.index];
        }
        return -1;
    };
    /**
     * @description 是否迭代到最后了
     */
    adjIterator.prototype.end = function () {
        // @ts-ignore
        return this.index >= (this.SparseGraph.graphData[this.vertex][this.index]);
    };
    return adjIterator;
}());
exports.adjIterator = adjIterator;
exports["default"] = SparseGraph;
