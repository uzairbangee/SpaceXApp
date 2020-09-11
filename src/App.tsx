import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading.component';

const Header = React.lazy(() => import("./components/Header/Header.component"));
const Home = React.lazy(() => import("./components/Home/Home.components"));
const Footer = React.lazy(() => import('./components/Footer/Footer.component'));
const Launches = React.lazy(() => import('./components/Launches/Launches.component'));
const LaunchDetails = React.lazy(() => import('./components/LaunchDetails/LaunchDetails.component'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/launch" element={<Launches/>}/>
              <Route path="/launch/:id" element={<LaunchDetails/>}/>
            </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
