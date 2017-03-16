"use strict";
exports.__esModule = true;
var hclang_1 = require("hclang");
var makeElement = function (node) {
    return hclang_1.Frame.nil;
};
exports.translate = function (node) {
    var type = node.type;
    switch (type) {
        case "Element":
            return makeElement(node);
        case "Comment":
            return hclang_1.Frame.nil;
        case "Text":
            return new hclang_1.FrameString("Text");
        default:
            console.error("Invalid type [" + type + "] for Node " + node);
            return hclang_1.Frame.nil;
    }
};
