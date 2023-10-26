import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
        <Route path="/react-profile-example/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/react-profile-example/about' element={<About/>} />
            <Route path='/react-profile-example/contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
