import React from 'react';
import ReactDOM from 'react-dom';
import { SideBar } from "./lib";
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    <h1>Hello React</h1>
    <SideBar title="Copernicus" menu={[{name:'First', path: '/home'}, {name: 'Second', path: '/signup'}]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
