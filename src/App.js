// import { Suspense } from 'react';
import './App.css';
import ReactQuery from './components/ReactQuery';
// import Axios from './components/Axios';
// import Swr from './components/Swr';
// import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}
      {/* <Axios /> */}
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Swr />
      </Suspense> */}
      <ReactQuery />
    </div>
  );
}

export default App;
