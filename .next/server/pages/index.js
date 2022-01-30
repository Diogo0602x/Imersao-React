"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\n//Componente React\n//Função recebe um argumento/propriedade\nfunction Titulo(props) {\n    console.log(props);\n    const Tag = props.tag;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"fe1fcb10c9e94d6d\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"fe1fcb10c9e94d6d\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:20px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// function HomePage() {\n//     //JSX\n//     return (\n//         <div>\n//             <GlobalStyle /> \n//             <Titulo tag=\"h2\">Bem-vindos de volta!</Titulo>\n//             <h2>Discord Alura - Spider</h2>\n//         </div>\n//     )\n// } \n// export default HomePage\nfunction PaginaInicial() {\n    // const username = 'diogo0602x';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const imagemInicial = './images/.png';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundImage: \"url(https://images.hdqwalls.com/wallpapers/dc-vs-marvel-heroes-5k-13.jpg)\",\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply',\n                color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.fundo\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '250px',\n                            padding: '16px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                onError: function(event) {\n                                    event.target.src = imagemInicial;\n                                },\n                                src: username.length > 2 ? `https://github.com/${username}.png` : imagemInicial\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    fontSize: '15px',\n                                    padding: '3px 10px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log('Algu\\xe9m submeteu o form');\n                            roteamento.push(`/chat?username=${username}`);\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Bem-vindos ao Superhero Chat!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    console.log('Usuario digitou', event.target.value);\n                                    //Onde está o valor?\n                                    const valor = event.target.value;\n                                    //Trocar o valor da variavel\n                                    //Através do React\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.buttonRed,\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.transparente.fundo\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[999],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[999],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[300]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diogo\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Imersao-React\\\\pages\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsa0JBQUVzQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ1ksS0FBSztvQ0FDbEQsRUFBb0I7b0NBQ25CLEtBQUksQ0FBQ0UsS0FBSyxHQUFHZixLQUFLLENBQUNDLE1BQU0sQ0FBQ1ksS0FBSztvQ0FDaEMsRUFBNEI7b0NBQzVCLEVBQWtCO29DQUNqQjFDLFdBQVUsQ0FBQzRDLEtBQUs7Z0NBQ2xCLENBQUM7Z0NBQ0hDLFNBQVM7Z0NBQ1RDLGVBQWUsRUFBRSxDQUFDO29DQUNoQkMsT0FBTyxFQUFFLENBQUM7d0NBQ1JDLFNBQVMsRUFBRTdELG9FQUFvQzt3Q0FDL0M4RCxTQUFTLEVBQUU5RCxvRUFBb0M7d0NBQy9DK0Qsa0JBQWtCLEVBQUUvRCw2RUFBNkM7d0NBQ2pFbUMsZUFBZSxFQUFFbkMseUVBQXlDO29DQUM1RCxDQUFDO2dDQUNILENBQUM7Ozs7Ozt3R0FnQkZOLHdEQUFNO2dDQUNMdUUsSUFBSSxFQUFDLENBQVE7Z0NBQ2JDLEtBQUssRUFBQyxDQUFRO2dDQUNkUixTQUFTO2dDQUNUUyxZQUFZLEVBQUUsQ0FBQztvQ0FDYkMsYUFBYSxFQUFFcEUsb0VBQXFDO29DQUNwRDhELFNBQVMsRUFBRTlELG1FQUFtQztvQ0FDOUNzRSxjQUFjLEVBQUV0RSxtRUFBbUM7b0NBQ25EdUUsZUFBZSxFQUFFdkUsbUVBQW1DO2dDQUN0RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ltZXJzYW9fUmVhY3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcblxuLy9Db21wb25lbnRlIFJlYWN0XG4vL0Z1bsOnw6NvIHJlY2ViZSB1bSBhcmd1bWVudG8vcHJvcHJpZWRhZGVcblxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKXtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICR7VGFnfSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuLy8gZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4vLyAgICAgLy9KU1hcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+IFxuLy8gICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJlbS12aW5kb3MgZGUgdm9sdGEhPC9UaXR1bG8+XG4vLyAgICAgICAgICAgICA8aDI+RGlzY29yZCBBbHVyYSAtIFNwaWRlcjwvaDI+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH0gXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xuICAgIC8vIGNvbnN0IHVzZXJuYW1lID0gJ2Rpb2dvMDYwMngnO1xuICAgICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICAgICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcbiAgICAgICBjb25zdCBpbWFnZW1JbmljaWFsID0gJy4vaW1hZ2VzLy5wbmcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcInVybChodHRwczovL2ltYWdlcy5oZHF3YWxscy5jb20vd2FsbHBhcGVycy9kYy12cy1tYXJ2ZWwtaGVyb2VzLTVrLTEzLmpwZylcIiwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy50cmFuc3BhcmVudGUuZnVuZG8sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgIFxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyNTBweCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkVycm9yPXtmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3JjID0gaW1hZ2VtSW5pY2lhbFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXt1c2VybmFtZS5sZW5ndGggPiAyID8gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgIDogaW1hZ2VtSW5pY2lhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3VzZXJuYW1lfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbihpbmZvc0RvRXZlbnRvKXtcbiAgICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGd1w6ltIHN1Ym1ldGV1IG8gZm9ybScpXG4gICAgICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goYC9jaGF0P3VzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJlbS12aW5kb3MgYW8gU3VwZXJoZXJvIENoYXQhPC9UaXR1bG8+XG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XG4gICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gIFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAvL09uZGUgZXN0w6EgbyB2YWxvcj9cbiAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXG4gICAgICAgICAgICAgICAgICAgLy9BdHJhdsOpcyBkbyBSZWFjdFxuICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcbiAgICAgICAgICAgICAgICAgIH19ICBcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcbiAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMudHJhbnNwYXJlbnRlLmJ1dHRvblJlZCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnRyYW5zcGFyZW50ZS5mdW5kbyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgey8qIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLy9PbmRlIGVzdMOhIG8gdmFsb3I/XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXG4gICAgICAgICAgICAgICAgICAgIC8vQXRyYXbDqXMgZG8gUmVhY3RcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xuICAgICAgICAgICAgICAgIH19ICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcbiAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCI5MDBcIl0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs5OTldLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs5OTldLFxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC8+XG4gICAgKTtcbn1cbiAgIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIlJlYWN0IiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0dWxvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiVGFnIiwidGFnIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImNoaWxkcmVuIiwiUGFnaW5hSW5pY2lhbCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInJvdGVhbWVudG8iLCJpbWFnZW1JbmljaWFsIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNwYXJlbnRlIiwiZnVuZG8iLCJmbGV4IiwibWluSGVpZ2h0IiwibWFyZ2luQm90dG9tIiwib25FcnJvciIsImV2ZW50IiwidGFyZ2V0Iiwic3JjIiwibGVuZ3RoIiwidmFyaWFudCIsImZvbnRTaXplIiwiYXMiLCJvblN1Ym1pdCIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0ZXh0QWxpZ24iLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInZhbG9yIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsImJ1dHRvblJlZCIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJwcmltYXJ5IiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Superhero - Cord","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#800000","700":"#207227","800":"#0E5814","900":"#8B0000","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"##8B0000","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"},"transparente":{"fundo":"rgba(0, 0, 0, 0.7)","button":"rgba(128,0,0.9)"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();