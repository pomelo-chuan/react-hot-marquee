(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{defaultViewport:"iphone5",viewports:__webpack_require__("./node_modules/@storybook/addon-viewport/dist/esm/preview.js").a},layout:"fullscreen"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./dist/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ReactHotMarquee}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_assign=function __assign(){return(_assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},styles_wrap="style-module_wrap__JkYMh",styles_marquee="style-module_marquee__bWGtq";function ReactHotMarquee(e){function t(){w(_<p?p/i:_/i)}var n,r=e.style,a=e.children,i=void 0===(s=e.speed)?30:s,s=void 0!==(s=e.reverse)&&s,o=void 0===(o=e.delay)?0:o,l=void 0===(u=e.play)||u,u=void 0===(u=e.loop)?0:u,c=void 0!==(c=e.hoverToPause)&&c,d=(e=void 0===(e=e.gutter)?20:e,Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)),f=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),p=(v=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0))[0],y=v[1],_=(v=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0))[0],m=v[1],g=(v=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0))[0],w=v[1],v=(Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){null!=d&&d.current&&null!=f&&f.current&&!p&&(y(d.current.getBoundingClientRect().width),m(f.current.getBoundingClientRect().width))}),[]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){return"boolean"==typeof l?l:"overflow"===l&&p<_}),[p,_]));Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[p,i]),g={className:styles_marquee,style:((n={})["--duration"]="".concat(g,"s"),n["--direction"]=s?"reverse":"normal",n["--delay"]="".concat(o,"s"),n["--loop"]=u||"infinite",n["--play"]=v()?"running":"paused",n)};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{ref:d,className:styles_wrap,style:_assign(_assign({},r),((s={})["--hover-to-pause"]=c?"paused":"running",s))},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",_assign({ref:f},g),a,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{width:e}})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",_assign({},g),a,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{width:e}})))}ReactHotMarquee.__docgenInfo={description:"",methods:[],displayName:"ReactHotMarquee"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["dist/index.js"]={name:"ReactHotMarquee",docgenInfo:ReactHotMarquee.__docgenInfo,path:"dist/index.js"})},"./dist/react-hot-marquee.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./dist/react-hot-marquee.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./dist/react-hot-marquee.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".style-module_wrap__JkYMh {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n\n.style-module_wrap__JkYMh:hover div {\n  -webkit-animation-play-state: var(--hover-to-pause)!important;\n          animation-play-state: var(--hover-to-pause)!important;\n}\n\n.style-module_marquee__bWGtq {\n  -webkit-animation-name: style-module_marquee__bWGtq;\n          animation-name: style-module_marquee__bWGtq;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -webkit-animation-play-state: var(--play);\n          animation-play-state: var(--play);\n  -webkit-animation-iteration-count: var(--loop);\n          animation-iteration-count: var(--loop);\n  -webkit-animation-delay: var(--delay);\n          animation-delay: var(--delay);\n  -webkit-animation-direction: var(--direction);\n          animation-direction: var(--direction);\n  -webkit-animation-duration: var(--duration);\n          animation-duration: var(--duration);\n}\n\n@-webkit-keyframes style-module_marquee__bWGtq {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes style-module_marquee__bWGtq {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n",""]),module.exports=exports},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./ReactHotMarquee.stories.tsx":"./stories/ReactHotMarquee.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/ReactHotMarquee.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("./node_modules/react/index.js");var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),_dist_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./dist/react-hot-marquee.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("ReactHotMarquee",module).addParameters({storySource:{source:"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { ReactHotMarquee } from '../dist/index';\nimport '../dist/react-hot-marquee.css';\n\nstoriesOf('ReactHotMarquee', module)\n  .addParameters({ component: ReactHotMarquee })\n  .add('Simple', function Demo() {\n    return <ReactHotMarquee>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>;\n  })\n  .add('overflow', function Demo() {\n    return (\n      <>\n        <ReactHotMarquee play=\"overflow\">Yesterday</ReactHotMarquee>\n        <ReactHotMarquee play=\"overflow\">\n          Yesterday, All my trouble seemed so far away.\n          Yesterday, All my trouble seemed so far away.\n          Yesterday, All my trouble seemed so far away.\n          Yesterday, All my trouble seemed so far away.\n        </ReactHotMarquee>\n      </>\n    )\n  })\n  .add('speed', function Demo() {\n    return (\n      <>\n        <ReactHotMarquee speed={50}>[speed: 50] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>\n        <ReactHotMarquee speed={100}>[speed: 100] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>\n        <ReactHotMarquee speed={200}>[speed: 200] Yesterday, All my trouble seemed so far away.</ReactHotMarquee>\n      </>\n    )\n  })\n  .add('hoverToPause', function Demo() {\n    return (\n      <>\n        <ReactHotMarquee hoverToPause>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>\n      </>\n    )\n  })\n  .add('delay', function Demo() {\n    return <ReactHotMarquee delay={2}>Yesterday, All my trouble seemed so far away.</ReactHotMarquee>;\n  })\n  .add('style', function Demo() {\n    return <ReactHotMarquee\n      style={{\n        fontSize: '14px',\n        backgroundColor: '#f58442',\n        color: '#ffffff',\n        height: '50px',\n      }}\n    >\n      Yesterday, All my trouble seemed so far away.\n    </ReactHotMarquee>;\n  })\n",locationsMap:{style:{startLoc:{col:7,line:43},endLoc:{col:3,line:54},startBody:{col:16,line:43},endBody:{col:3,line:54}},delay:{startLoc:{col:7,line:40},endLoc:{col:3,line:42},startBody:{col:16,line:40},endBody:{col:3,line:42}},hovertopause:{startLoc:{col:7,line:33},endLoc:{col:3,line:39},startBody:{col:23,line:33},endBody:{col:3,line:39}},speed:{startLoc:{col:7,line:24},endLoc:{col:3,line:32},startBody:{col:16,line:24},endBody:{col:3,line:32}},overflow:{startLoc:{col:7,line:11},endLoc:{col:3,line:23},startBody:{col:19,line:11},endBody:{col:3,line:23}},simple:{startLoc:{col:7,line:8},endLoc:{col:3,line:10},startBody:{col:17,line:8},endBody:{col:3,line:10}}}}}).addParameters({component:_dist_index__WEBPACK_IMPORTED_MODULE_2__.a}).add("Simple",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{children:"Yesterday, All my trouble seemed so far away."})})).add("overflow",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{play:"overflow",children:"Yesterday"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{play:"overflow",children:"Yesterday, All my trouble seemed so far away. Yesterday, All my trouble seemed so far away. Yesterday, All my trouble seemed so far away. Yesterday, All my trouble seemed so far away."})]})})).add("speed",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{speed:50,children:"[speed: 50] Yesterday, All my trouble seemed so far away."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{speed:100,children:"[speed: 100] Yesterday, All my trouble seemed so far away."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{speed:200,children:"[speed: 200] Yesterday, All my trouble seemed so far away."})]})})).add("hoverToPause",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{hoverToPause:!0,children:"Yesterday, All my trouble seemed so far away."})})})).add("delay",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{delay:2,children:"Yesterday, All my trouble seemed so far away."})})).add("style",(function Demo(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_dist_index__WEBPACK_IMPORTED_MODULE_2__.a,{style:{fontSize:"14px",backgroundColor:"#f58442",color:"#ffffff",height:"50px"},children:"Yesterday, All my trouble seemed so far away."})}))}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);