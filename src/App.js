import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Path from './components/routing/Path';
import OurAdvantages from './components/OurAdvantages'
import ArrowUp from './components/ArrowUp';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { Shopcontext } from './context/ShopContext';
import { useContext } from 'react';
function App() {
  const {showModal,setShowModal}=useContext(Shopcontext);
  return (
    <>
      <Header />
     { showModal&&<LoginSignup/>}
      <Path />
      <OurAdvantages />
      <ArrowUp/>
      <Footer />
    </>
  );
}

export default App;
