import { FaLinkedin, FaGithub } from "react-icons/fa6"; // Font Awesome 6
import { IoIosMail } from "react-icons/io"; // Ionicons

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="icon">
					{" "}
					<FaLinkedin />{" "}
				</div>
				<div className="icon">
					{" "}
					<FaGithub />{" "}
				</div>
				<div className="icon">
					{" "}
					<IoIosMail />{" "}
				</div>
			</div>
		</>
	);
};

export default Footer;
