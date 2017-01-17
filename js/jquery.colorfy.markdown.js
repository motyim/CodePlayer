/*global jQuery */

//  simple markdown parser rules
//  /[.+](.+)/g -> inline link
//  /[.+][.+]/g -> reference link
//  /[.+]/g -> abbr link !BUG
//  /[.+]: .+/g -> link or image reference
//  //g -> inline image
//  //g -> reference image
"use strict";

jQuery.fn.colorfy.markdown = {
  //   "title":         [/^\s{0,3}\#{1,6}.*$/m, /^.+?\n[=-]{2,}\s*$/m]
  //  "codeblock":     [/```.+?```/m, /^(?: {4}|\t).+$/m]
	//"title": /^\s{0,3}\#{1,6}.*$/m,
  "ident": /(function|var|for|while|do)/gm, //function declare
    "funcname": /\s{1,}[a-zA-Z]*\(.*\);{0,1}/m,//function name
  "string": /".*"/gm,
  "sep":/(;|,|=)/gm,
/*
  "block": /^\s{0,3}>\s+.*$/m,
  "orderedlist": /^\s*[0-9]+\. .+$/m,
  "unorderedlist": /^\s*[*+-] .+$/m,
  "emphasis": /([\*_])[^\*_]+?\1(?![\*_])/m,
 // "strikethrough": /<.+?>/m, //tag
  "codeblock": /```[a-z\s]*\n[\s\S]*?\n```/m,
  "inlinecode": /`[^`\n]+?`/,*/
 // "rule": /\s{1}.*=".*"/m,
  //    "table":
  //    "inlinehtml"
  //    inline link
  //    reference link
  //    abbr link
  //    link or image reference
  //    inline image
  //    reference image

};