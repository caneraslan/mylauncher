import { useState, useEffect, useRef} from "react";
import Footer from "./components/subcomponents/Footer.js";
import Navbar from "./components/subcomponents/Navbar.js";
import { CgSquare } from "react-icons/cg";
import { useTheme } from "./StyleContext.js";
import Pagedesktop from "./components/Pagedesktop.js";
import { useReactToPrint } from 'react-to-print';

const App = () => {
	const [page, changedPage] = useState(0);
	//const [lang, setLang] = useState();
	const [blogSize, setBlogSize] = useState(4);
	const [vh, setVH] = useState([window.innerWidth, window.innerHeight]);
	const [offset, setOffset] = useState(window.pageYOffset);
	
	const { toggleTheme } = useTheme();
	const [type, setType] = useState(false);

	const componentRef = useRef();

  	const handlePrint = useReactToPrint({
  contentRef: componentRef, 
  documentTitle: 'Caner_Aslan_CV',
});


	useEffect(() => {
		toggleTheme();
		type ? console.log("true") : console.log("false");
	}, [type]);


  // For Mobil
	const miniNav = {
		position: "fixed",
		top: "18px",
		left: "50%",
		transform: "translateX(-50%)",
		width: "400px",
		height: "40px",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		alignContent: "center",
		justifyItems: "center",
		zIndex: 1000,
	};

  // For Desktop
	const desktopNav = {
		position: "fixed",
		top: "18px",
		left: "50%",
		transform: "translateX(-50%)",
		width: "500px",
		height: "40px",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		alignContent: "center",
		justifyItems: "center",
		zIndex: 1000,
	};

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		console.log("vh: ", vh);


		const handleResize = () => {
			const currentHeight = window.innerHeight;
			const currentWidth = window.innerWidth;

			const newBlogSize = Math.floor(currentHeight / 200 );
			// console.log("Yeni Boyut:", currentWidth, currentHeight, newBlogSize);
    		setBlogSize(newBlogSize);
			setVH([currentWidth, currentHeight]);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="body">
			<>
				<Navbar changedPage={changedPage} style={desktopNav} offset={offset} />
				<div className="index">
					<Pagedesktop
						componentRef={componentRef}
						page={page}
						vh={vh}
						blogSize={blogSize}
						setVH={(val) => {
							setVH(val);
						}}
						offset={offset}
					/>
				</div>
			</>

			<Footer page={page} handlePrint={handlePrint}/>

			<div
				className="theme"
				onClick={() => {
					setType((p) => !p);
				}}>
				<CgSquare />
			</div>
		</div>
	);
};
export default App;
