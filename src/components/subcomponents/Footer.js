
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiFilePdfLight } from "react-icons/pi";
import { useReactToPrint } from 'react-to-print';

const Footer = ({ page,aboutMeRef }) => {
    const handlePrint = useReactToPrint({
        content: () => 'aboutme',
        documentTitle: "caner_aslan_cv",
    });

    // Sayfa 3 değilse veya 'aboutme' ID'li element o an DOM'da yoksa hata almamak için kontrol
    const onDownloadClick = () => {
        const element = 'aboutme'
        if (element) {
            handlePrint();
        } else {
            console.warn("Hata: 'aboutme' ID'li alan bulunamadı. Bu bileşenin render edildiğinden emin olun.");
        }
    };

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
                        onClick={onDownloadClick} 
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