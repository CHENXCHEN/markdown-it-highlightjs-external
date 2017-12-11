# markdown-it-highlightjs-external

> highlight.js plugin for markdown-it to use external link

## Usage
```javascript
var md = require('markdown-it')()
var mihe = require('markdown-it-highlightjs-external')
md.use(mihe, {
    hljs: 'auto', // If this set auto, plugin will use window.hljs for highlight.
    highlighted: true, // If this set false, plugin will disabled highlight.
    langCheck: function(lang) {}, // If hljs language parsing file missing, this function will callback.
})
```
## Options
| Name         |            Description            |  Default   |
| ---------------- | :-----------------------------: | ------------- |
| hljs | The hljs parsing object. Default to use window.hljs |  auto |
| highlighted | Whether or not to enable the syntax highlighting | true |
| langCheck | This should be function for missing language callback | function(lang){} |
