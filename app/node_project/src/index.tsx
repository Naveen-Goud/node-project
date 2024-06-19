// import express from 'express'; 

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send(App());
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
