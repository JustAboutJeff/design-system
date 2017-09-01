
          window.__NEXT_REGISTER_PAGE('/core/build', function() {
            var comp = module.exports=webpackJsonp([15],{762:function(e,n,s){e.exports=s(763)},763:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=s(0),t=function(e){return e&&e.__esModule?e:{default:e}}(o),a=s(25);n.default=function(e){return t.default.createElement(a.Chrome,null,t.default.createElement(a.Content,{title:"Core Build"},t.default.createElement(a.PageHeading,null,"CSS Build"),t.default.createElement(a.Doc,null,"\n## Recommended Usage\n\nChoose the CSS support that you need for your particular project.\n\n## Core: PostCSS Custom Config\n\nIf you want to setup your own PostCSS config to consume the CSSNext variables, you'll want install the needed dependencies:\n\n```bash\nnpm install style-loader css-loader postcss-loader postcss-import postcss-cssnext\n```\n\nThe add a `module.rule` to your `webpack.config.js`:\n\n```js\nconst path = require('path')\n\nmodule: {\n  rules: [\n    {\n      test: /\\.module\\.css$/,\n      include: [path.resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],\n      use: [\n        'style-loader',\n        {\n          loader: 'css-loader',\n          options: {\n            modules: true,\n            importLoaders: 1,\n            localIdentName: '[local]___[hash:base64:5]'\n          }\n        },\n        {\n          loader: 'postcss-loader',\n          options: {\n            plugins: _ => [\n              require('postcss-import')(),\n              require('postcss-cssnext')()\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n```\n\n## Core: Sass Custom Config\n\nIf you wish to use the Sass variables, a custom config is necessary.  First install the required dependencies:\n\n```bash\nnpm install style-loader css-loader sass-loader node-sass\n```\n\nThe add a `module.rule` to your `webpack.config.js`:\n\n```js\nconst path = require('path')\n\nmodule: {\n  rules: [\n    {\n      test: /\\.module\\.scss/,\n      include: [path.resolve(path.join('node_modules', '@pluralsight', 'ps-design-system-core'))],\n      use: [\n        'style-loader',\n        {\n          loader: 'css-loader',\n          options: {\n            modules: true,\n            importLoaders: 1,\n            localIdentName: '[local]___[hash:base64:5]'\n          }\n        },\n        'sass-loader'\n      ]\n    }\n  ]\n}\n```\n\n## Core: Import Vanilla CSS\n\nFor those not wanting to deal with a build, a CSS utility class approach is available.  These selectors are generated from the source variables.  This is not recommended.  No build is technically necessary.  See the [core usage docs](/core/usage) for details.\n\n\n## Examples\n\nFor full working examples of some custom configurations, please see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).\n")))}}},[762]);
            return { page: comp.default }
          })
        