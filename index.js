'use strict';

var Handlebars = require('handlebars');

function Parser () {
  // make new optional
  if (!(this instanceof Parser)) {
    return new Parser();
  }
}

/**
 * Given a Prado template string returns the list of Localization Strings with their position.
 *
 * @param String template The content of a Prado template.
 * @return Object The list of translatable strings, the line(s) on which each appears.
 */
Parser.prototype.parse = function (template) {
  let lines = template.match(/[^\r\n]+/g),
      retval = {},
      lineNo = 1;
  
  for (let line of lines) {
    let locRe = /<%\[(.*?)\]%>/g,
      matched;
    do {
      matched = locRe.exec(line);
      if (matched) {
        retval[matched[1]] = {line: [lineNo]};
      }
    } while (matched);
    lineNo += 1;
  }

  return retval;
};

module.exports = Parser;
