import React from 'react';
//配置hashRouter 使用独立的router文件
import { createHashHistory } from 'history';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
//引入配置的routes
import Routes from './routes';

const history = createHashHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        {renderRoutes(Routes)}
      </Router>
    </div>
  );
}

export default App;



