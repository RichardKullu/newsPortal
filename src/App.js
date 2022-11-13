import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from './components/Article';
import Error from './components/Error';
import Front from './components/Front';
import Main from './components/Main';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Front/>} >
              <Route index element = {<Main/>} />
              <Route path="/:slug" element = {<Article/>} />
              <Route path="*" element = {<Error/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;