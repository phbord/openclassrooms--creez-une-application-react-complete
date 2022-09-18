import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle';
import './index.css';
import Header from './components/Header';
import { ThemeProvider } from './utils/context';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home/index'));
const Survey = lazy(() => import('./pages/Survey/index'));
const Freelances = lazy(() => import('./pages/Freelances/index'));
const Error = lazy(() => import('./components/Error/index'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle/>
        <h2>Page principale</h2>
        <Header/>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/survey/:questionNumber' element={<Survey/>}/>
            <Route path='/freelances' element={<Freelances/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
