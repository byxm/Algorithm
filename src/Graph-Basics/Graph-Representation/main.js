"use strict";
exports.__esModule = true;
var SparseGraph_1 = require("./SparseGraph");
var main = function () {
    var graph = new SparseGraph_1["default"](7, false);
    graph.addEdage(0, 1);
    graph.addEdage(0, 3);
    graph.addEdage(1, 2);
    graph.addEdage(1, 6);
    graph.addEdage(2, 3);
    graph.addEdage(2, 5);
    graph.addEdage(3, 4);
    graph.addEdage(4, 5);
    graph.addEdage(5, 6);
    for (var i = 0; i < 7; i++) {
        var adj = new SparseGraph_1.adjIterator(graph, i);
        var arr = [];
        for (var w = adj.begin(); !adj.end(); w = adj.next()) {
            arr.push(w);
        }
        console.log(i + ":" + arr.join(" "));
    }
};
main();
