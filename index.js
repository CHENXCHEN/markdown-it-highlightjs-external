var highlightjs = function(md, opts) {
    md.options.highlight = function(code, lang) {
        var hljs = window.hljs;
        if (lang && hljs && hljs.getLanguage(lang)) {
            return '<pre><div class="hljs"><code class="' + lang + '">' + hljs.highlight(lang, code, true).value + '</pre>';
        }
    }
}
export default highlightjs
