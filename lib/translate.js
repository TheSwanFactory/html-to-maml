"use strict";
exports.__esModule = true;
exports.translate = function (node) {
    var type = node.type;
    switch (type) {
        case "Element":
            return "Element";
        case "Comment":
            return "Comment";
        case "Text":
            return "Text";
        default:
            console.error("Invalid type [" + type + "] for Node " + node);
    }
    return node;
};
