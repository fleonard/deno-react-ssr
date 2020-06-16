import {
  Application,
  React,
  ReactDOMServer,
  Router,
} from './deps.ts';

import App from "./app.tsx";

const PORT = 8008;

const app = new Application();
const jsBundle = "/main.js";

const js =
  `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.getElementById('app'));`;  

const html =
  `<html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
      <script type="module" src="${jsBundle}"></script>
    </head>
    <body>
      <main id="app">${(ReactDOMServer as any).renderToString(<App />)}</main>  
    </body>
  </html>`;

const router = new Router();
router
  .get('/', (context: any) => {
    context.response.type = 'text/html';
    context.response.body = html;
  })
  .get(jsBundle, (context: any) => {
    context.response.type = 'application/javascript';
    context.response.body = js;
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen({ port: PORT });
