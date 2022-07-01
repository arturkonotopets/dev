import './App.css';
import AfterPrev from './components/AfterPrev/AfterPrev';
import ContactsNew from './components/Contacts/ContactsNew';
import FAQ from './components/FAQ/FAQ';
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
import HeaderTransperent from './components/Header/HeaderTransperent';
import Header from './components/Header/Header';

function App() {

  const [offset, setOffset] = React.useState(0);
  
  React.useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="grid-container">
      { offset>100 ? (<Header/>) : ( <HeaderTransperent/>) }
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
