import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 使用 ReactDOM 将 <App /> 挂载到 index.html 中的 #app 元素
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // 对应 index.html 的 <div id="app"></div>
);