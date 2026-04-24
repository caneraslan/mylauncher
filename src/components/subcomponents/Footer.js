
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiFilePdfLight } from "react-icons/pi";
import { useReactToPrint } from 'react-to-print';

const Footer = ({ page,aboutMeRef,handlePrint }) => {

    return (<>
        
        {page !== 2 && (
            <>
            <div className="footer">
               <a href='https://www.linkedin.com/in/caneraslanm/' target='_blank' rel="noreferrer"><div className="icon"><FaLinkedin /></div></a>
               <a href='https://www.github.com/caneraslan' target='_blank' rel="noreferrer"><div className="icon"><FaGithub /></div></a>
               <a href='mailto:caneraslanm@gmail.com' target='_blank' rel="noreferrer" ><div className="icon"><IoIosMail /></div></a>
                
            {page === 3 && (
                <div className="icon" title="Download as PDF">
                    <PiFilePdfLight 
                        onClick={handlePrint} 
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            )}
            </div>

        </>
        )}
        </>
    ); 
};

export default Footer;