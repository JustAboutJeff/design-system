
          window.__NEXT_REGISTER_PAGE('/core/usage', function() {
            var comp = module.exports=webpackJsonp([13],{978:function(e,n,t){e.exports=t(979)},979:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),r=t(26);n.default=(0,r.withServerProps)(function(e){return l.default.createElement(r.Chrome,null,l.default.createElement(r.Content,{title:"Core Usage"},l.default.createElement(r.PageHeading,null,"Core Usage"),l.default.createElement(r.Doc,null,'\nAfter, [installation](/install), use Core in the flavor of your choice.  JavaScript or CSSNext is recommended.\n\n## Import JavaScript\n\n```js\nimport core from \'@pluralsight/ps-design-system-core\'\n\n<button style={{ backgroundColor: core.colors.orange }}>Click</button>\n```\n\n## Import CSSNext\n\nTo use the Core variables in CSSNext:\n\n```css\n@import "@pluralsight/ps-design-system-core";\n\n.mySelector { color: var(--psColorsPink); }\n```\n\n## Import SASS\n\nTo use the Core variables in SASS:\n\n```scss\n@import "~@pluralsight/ps-design-system-core/dist/index.module.scss";\n\n.mySelector { color: $ps-colors-pink; }\n```\n\n## Import Vanilla CSS\n\nIn vanilla CSS, variables are not yet widely supported.  Instead utility classes, generated from the original variables, are available.  Include the vanilla CSS stylesheet via traditional means:\n\n```html\n<link rel="stylesheet" href="node_modules/@pluralsight/ps-design-system-core/dist/index.css" />\n```\n\nAnd apply utility classes directly to the HTML elements:\n\n```html\n<div class="ps-colors-pink--color"></div>\n```\n\n## Examples\n\nFor full working examples, please see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).\n')))})}},[978]);
            return { page: comp.default }
          })
        