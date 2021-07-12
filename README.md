# tree-sitter-javascript-regression

Valid JS code

```js
const { hooks: { hashPassword } = {} } = {}
```

Grammar v0.16.0

```
$ cd v16
$ npm ci
$ node index.js
lexical_declaration
```

Grammar v0.19.0

```
$ cd v19
$ npm ci
$ node index.js
lexical_declaration
ERROR
statement_block
```

Expected to have same result
