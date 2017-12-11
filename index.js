/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-11-28T01:01:47+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: highlight.js
 * @Last modified by:   chenhuachao
 * @Last modified time: 2017-12-11T23:34:29+08:00
 * @License: MIT
 * @Copyright: 2017
 */

var highlightjs = function(md, opts) {
    opts = opts || { };
    if (opts.highlighted === void (0)) {
        opts.highlighted = true;
    }
    if (opts.hljs === void (0)) {
        opts.hljs = 'auto';
    }
    if (typeof opts.langCheck !== 'function') {
        opts.langCheck = function() { };
    }
    md.options.highlight = function(code, lang) {
        if (opts.hljs === 'auto') opts.hljs = window.hljs;
        var hljs = opts.hljs;
        if (opts.highlighted && lang && hljs) {
            if (hljs.getLanguage(lang)) {
                return '<pre><div class="hljs"><code class="' + md.options.langPrefix + lang + '">' + hljs.highlight(lang, code, true).value + '</code></div></pre>';
            } else {
                if (typeof opts.langCheck === 'function') {
                    opts.langCheck(lang);
                }
            }
        }
        return '<pre><code class="' + md.options.langPrefix + lang + '">' + md.utils.escapeHtml(code) + '</code></pre>';
    }
}
export default highlightjs
