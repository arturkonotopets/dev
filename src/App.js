import './App.css';
import AfterPrev from './components/AfterPrev/AfterPrev';
import ContactsNew from './components/Contacts/ContactsNew';
import FAQ from './components/FAQ/FAQ';

import Header from './components/Header/Header';
import ImgSec from './components/ImgSec/ImgSec';
import ProcessHome from './components/PrecessHome/ProcessHome';
import Prev from './components/Prev/Prev';
import Process from './components/Process/Process';
import ProcessFooter from './components/ProcessFooter/ProcessFooter';
import ProcessHomeSec from './components/ProcessHomeSec/ProcessHomeSec';
import ProccesHomeTh from './components/ProcessHomeTh/ProccesHomeTh';
import BadgeContainerNew from './components/BadgeContainerNew/BadgeContainerNew';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <div className="grid-container">
      {/* {flag ? <Header/> : <HeaderTransperent/>} */}
      {/* <HeaderTransperent/> */}
      <Header/>
      <Prev />
      <AfterPrev />
      <ProcessHome />
      <ProcessHomeSec />
      <ProccesHomeTh/>
      <Process/>
      <ProcessFooter/>
      <ImgSec/>
      <FAQ/>
      <ContactsNew/>
      <BadgeContainerNew/>
      <Footer/>
    </div>
  );
}

export default App;
