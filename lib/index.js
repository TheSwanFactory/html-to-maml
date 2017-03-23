#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var hclang_1 = require("hclang");
exports.Frame = hclang_1.Frame;
var h = require("himalaya");
var translate_1 = require("./translate");
exports.convert = function (html) {
    var json = h.parse(html);
    var maml = translate_1.translate(json);
    return maml.toString();
};
