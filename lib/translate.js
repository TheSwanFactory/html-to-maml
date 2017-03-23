"use strict";
exports.__esModule = true;
var hclang_1 = require("hclang");
var hclang_2 = require("hclang");
exports.Frame = hclang_2.Frame;
var makeBody = function (attributes, children) {
    return hclang_1.Frame.nil;
};
var makeElement = function (node) {
    var tagName = node.tagName;
    var attributes = node.attributes;
    var children = node.children;
    var content = node.content;
    var array = [
        new hclang_1.FrameSymbol(tagName),
    ];
    if (content) {
        array.push(new hclang_1.FrameString(content));
    }
    else {
        array.push(makeBody(attributes, children));
    }
    return new hclang_1.FrameExpr(array);
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
