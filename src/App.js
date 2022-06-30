import './App.css';
import AfterPrev from './components/AfterPrev/AfterPrev';
import ImgSec from './components/ImgSec/ImgSec';
import ProcessHome from './components/PrecessHome/ProcessHome';
import Prev from './components/Prev/Prev';
import Process from './components/Process/Process';
import ProcessFooter from './components/ProcessFooter/ProcessFooter';
import ProcessHomeSec from './components/ProcessHomeSec/ProcessHomeSec';
import ProccesHomeTh from './components/ProcessHomeTh/ProccesHomeTh';

function App() {

  return (
    <>
      <Prev />
      <AfterPrev />
      <ProcessHome />
      <ProcessHomeSec />
      <ProccesHomeTh/>
      <Process/>
      <ProcessFooter/>
      <ImgSec/>
    </>
  );
}

export default App;
