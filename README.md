Proyecto en react usando AWS amplify para autenticación de usuarios y conexión a AWS api gateway 

El objetivo es que este proyecto sea compatible con todos los navegadores modernos y con Intern Explore 11

Acciones que he intentado:
1) Instalar babel-polyfill
https://github.com/aws-amplify/amplify-js/issues/1195

npm install babel-polyfill --save

// src/index.js
import 'babel-polyfill'; //This must be imported before React and Amplify
Resultado:
Navegadores modenos: funciona bien.
Internet Explorer: 
The above error occurred in the <AmplifyAuthenticator> component:
    in AmplifyAuthenticator (created by ForwardRef(AmplifyAuthenticator))
    in ForwardRef(AmplifyAuthenticator)
    in amplify-container (created by AmplifyContainer)
    in AmplifyContainer (created by ForwardRef(AmplifyContainer))
    in ForwardRef(AmplifyContainer)
    in Unknown
El objeto no acepta la propiedad o el método 'forEach'

2) Mover la configuración de babel a webpack.cofig.js
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/env", {
                                "corejs": 3.6,
                                "useBuiltIns": "usage",
                                "targets": "> 0.10%, not dead, ie >= 11"
                            }], "@babel/react"
                        ]
                    }
                },

Resultado:
Navegadores Modernos: funciona bien
Internet Explorer: SCRIPT438: El objeto no acepta la propiedad o el método 'assign'

3) Quitar la exclusió de node_modules
Resultados
Navegadores Modernos: es.array.index-of.js?c975:15 Uncaught TypeError: $ is not a function
    at eval (es.array.index-of.js?c975:15)
    at Module../node_modules/core-js/modules/es.array.index-of.js (bundle.9f6b35557498cff1b901.js:14039)
    at __webpack_require__ (bundle.9f6b35557498cff1b901.js:64)
    at Module.eval (regexp-exec.js?9263:1)
    at eval (regexp-exec.js:104)
    at Module../node_modules/core-js/internals/regexp-exec.js (bundle.9f6b35557498cff1b901.js:13439)
    at __webpack_require__ (bundle.9f6b35557498cff1b901.js:64)
    at eval (es.regexp.exec.js?ac1f:3)
    at Module../node_modules/core-js/modules/es.regexp.exec.js (bundle.9f6b35557498cff1b901.js:14633)
    at __webpack_require__ (bundle.9f6b35557498cff1b901.js:64)
Internet Explorer: SCRIPT5002: Se esperaba una función

4) Agregar Type script

https://medium.com/@elisealcala/empieza-un-nuevo-proyecto-react-f3fea6254d1

npm install @babel/preset-typescript -D
agregar las extenciones .ts a webpack
Agregar el preset @babel/preset-typescript a babel.config.json
Crear el archivo tsconfig.json

Resultado:
Navegadores Modernos: funciona bien
Internet Explorer: SCRIPT438: El objeto no acepta la propiedad o el método 'assign'