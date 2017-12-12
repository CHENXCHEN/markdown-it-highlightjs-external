# markdown-it-highlightjs-external

> Preset use [highlight.js](https://highlightjs.org/) with markdown-it by external_link
> You should add `hljs` external_link for use it.
> example: <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>

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
