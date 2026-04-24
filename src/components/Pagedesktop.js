import Blog from './pages/Blog';
import  About  from './pages/About';
import { Home } from './pages/Home';

const containerStyle = {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		behavior: "smooth",
		block: "start",
		top: 0,
		left: 0,
	};

const Pagedesktop = ({ componentRef, page, vh, blogSize, setVH, offset }) => {
  if(page === 2 ) return ( <Blog blogSize={blogSize} />);  //Changed name => My apps 
  else if(page === 3) return ( < About ref={componentRef}/> );
  else return ( <Home containerStyle={containerStyle}/> );
};

export default Pagedesktop;