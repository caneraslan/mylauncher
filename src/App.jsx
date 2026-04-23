import { useState,useEffect } from 'react'
import Footer from './components/subcomponents/Footer.js';
import Navbar from './components/subcomponents/Navbar.js';
import { CgSquare } from "react-icons/cg";
import { useTheme } from './StyleContext.js';
import Pagedesktop from './components/Pagedesktop.js';
import Pagemobil from './components/Pagemobil.js';

const App = () => {
  const [page, changedPage] = useState(0);
  //const [lang, setLang] = useState();
  const [vh, setVH] = useState([window.innerWidth, window.innerHeight]);
  const [offset, setOffset] = useState(window.pageYOffset);

  const {  toggleTheme } = useTheme();
  const [type, setType] = useState(false); 

    useEffect(()=>{
      toggleTheme();
   type ? console.log('true'):console.log('false');
   
  },[type]);

  const miniNav = {
    position: 'fixed',
    top: '18px',
    left: '50%',
    transform: 'translateX(-50%)',
    width:'400px',
    height: '40px',
    fontWeight: 'bold', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',    
    alignContent: 'center',  
    justifyItems: 'center', 
    zIndex: 1000
  }

  const desktopNav= {
    position: 'fixed',
    top: '18px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '500px',
    height: '40px',
    fontWeight: 'bold', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',    
    alignContent: 'center',  
    justifyItems: 'center',  
    zIndex: 1000
  }
  
  useEffect(() => {
   
   const onScroll = () => setOffset(window.pageYOffset);
   console.log("offset: ", offset);

  const handleResize = () => {
    console.log("Yeni Boyut:", window.innerHeight, window.innerWidth);
    console.log("Yeterli mi :", vh > [600,600]);
    setVH([window.innerWidth,window.innerHeight]);
  };
  
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', onScroll);
  
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', onScroll);
  };
}, []);
  
  return (
    <div className='body' >
      {
          (vh[0] > 600 && vh[1] > 500) ? ( 
            //YATAY EKRAN 
          <> 
           <Navbar changedPage={changedPage} style={desktopNav} offset={offset}/>
            <div className="index">
              <Pagedesktop page={page} vh={vh} setVH={(val)=>{setVH(val)} } offset={offset}/> 
            </div> 
           </>
      ) : 
      
      ( // MOBIL EKRAN 
      <> 
        <Navbar changedPage={changedPage} style={miniNav} offset={offset} />
        <div className="index">
          <Pagemobil page={page} vh={vh} setVH={(val)=>{setVH(val)}} offset={offset}/>
        </div>
      </>
      )}
      
      <Footer/>

       <div className='theme' onClick={()=>{
        setType(p=>!p )
      }} >
       
        <CgSquare />
      
      </div>

    </div>
  );
}
export default App;