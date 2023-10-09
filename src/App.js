import React,{ Suspense, lazy } from "react";
import { useState } from  "react";
import {Routes, Route, useLocation} from  "react-router-dom";

import One from "./components/one";

import './App.css';
import MyContext from "./components/context";
import ErrorBoundary from "./components/errorBoundary";

//second component with lazy loading & suspense
const Two = lazy(() => import("./components/two"));

function App() {

  const [propsFromChild, setpropsFromChild] = useState('');

  //usecontext data
  var name = 'Ronak J Koladiya';

  //gets the url data
  var location = useLocation();
  console.log(location);

  const dataFromChild = (data) => {
    setpropsFromChild(data);
  };

  return (
      <>

        <h1 style={{margin: '20px 50px 100px 50px', textAlign: 'center'}}>
            PROPS FROM CHILD COMPONENT: {propsFromChild}
        </h1>

        <MyContext.Provider value={{name, dataFromChild}}>
            <Suspense fallback={<h1 style={{ margin: '50px' }} >Loading...</h1>}>
                <ErrorBoundary>
                    <Routes>
                        <Route path={'/'} element={ <One/> }/>
                        <Route path={'/classcomp'} element={ <Two/> }/>
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </MyContext.Provider>

      </>
  );
}

export default App;