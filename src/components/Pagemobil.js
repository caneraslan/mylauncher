//import  {  useRef } from 'react'
import Blog from './pages/Blog';

const Pagemobil = ({ page, vh, setVH }) => {
 

//let currentOpacity =1;
let blogOpacity = 1;
//let aboutOpacity = 1;
let projectOpacity = 1;

const hpm = {
  transition: 'opacity 0.1s ease',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',   
  justifyContent: 'center', 
  textAlign: 'center',    
  width: '95%',  
  fontStyle: 'italic',    
  fontSize: '1.1rem',      
  lineHeight: '1.8',     
  minHeight: '100vh',     
  fontFamily: '"Victor Mono, monospace !important" ',
  margin: '70px auto 0 auto',
  opacity: 1
};

  return ( 
    <>
    <div id='homepage' className='hpm' style={hpm}> "İçinde yaşadığımız dünyanın nasıl çalıştığını anlamaya çalışmak, hayatımın en büyük tutkusu oldu olmayada devam edecek gibi gözüküyor. 
        Çocukluğumun o söküp takılan oyuncakları; bugün daha büyük sistemlerin ve fikirlerin yapı taşlarını öğrenmeye, 
        <span style={{ fontWeight: '500' }}> 'neden' </span> ve <span style={{  fontWeight: '500' }}> 'nasıl' </span> 
        sorularını daha çok sormama sebep oldu. Her geçen gün yeni bir şey öğrenmek ve onu kullanmak istiyor insan."
       </div>
       
       <div className='pageview'  id='blog' style={{
        behavior: "smooth", 
          block: "start",   
          opacity: (blogOpacity > 0 ? blogOpacity : 0), 
          padding:'20%',
          pointerEvents: blogOpacity <= 0 ? 'none' : 'all'
         }}> 
        <Blog /> {/* Büyük harf yaptık */}
        </div>

        <div className='pageview' id='aboutme' style={{
        behavior: "smooth", 
          block: "start",   
          opacity: (projectOpacity > 0 ? projectOpacity : 0), 
          pointerEvents: projectOpacity <= 0 ? 'none' : 'all'
         }}> Sayfa Icerik (3)  Sayfa Icerik (3)  Sayfa Icerik (3)  Sayfa Icerik (3)  Sayfa Icerik (3)  Sayfa Icerik (3) </div>
      </>);
};

export default Pagemobil;