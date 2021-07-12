const Parser = require("tree-sitter")
const Javascript = require("tree-sitter-javascript")

const parser = new Parser()
parser.setLanguage(Javascript)

parser.parse(`const { hooks: { hashPassword } = {} } = {}`).rootNode.children.forEach(child => {
	console.log(child.type)
})
