var markedFn = require("marked");

function marked(input) {
  return markedFn.marked(input)
}

// console.log(marked("hello"))
exports.marked = marked
