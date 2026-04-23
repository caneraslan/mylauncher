import data from "../../resume.json";
import personalStyle from "../../personalStyle.css";

export const About = () => {
	return (
		<>
			<div
				className="aboutpage"
				id="aboutme"
				style={{
					behavior: "smooth",
					block: "start",
					transition: "opacity 0.5s ease-in-out",
				}}>

				<div className="CVname"> {data.personal_information.name} </div>
				<div className="personal_information">
					<div className="phone"> {data.personal_information.phone} </div>
					<div className="location"> {data.personal_information.location} </div>
				</div>

				<div className="summary"> 
					<div className="CVtitle"> SUMMARY </div>
					<div className='summary-text'>
						{data.personal_information.summary} 
					</div>
				</div>
				<div className="experience">
					<div className="CVtitle">EXPERIENCE</div>
					<div className="experience-text">
					{data.experience.map((ex, index) => (
						<div className={"ex_" + index} key={index}>

							<div className="block"> 
							<div className="company"> {ex.company} </div>
							<div className="location"> {ex.location} </div>
							</div>
							<div className="block"> 
							<div className="position"> {ex.position} </div>
							<div className="period"> {ex.period} </div>
							</div>
							<div className="highlights"> {ex.highlights} </div>
						</div>
					))}
					</div>
				</div>

        <div className="education">

					<div className="CVtitle"> EDUCATION </div>

					<div className="edu-text">
					{data.education.map((ed, index) => (
						<div className={"ed_" + index} key={index}>
							<div className="block"> 
								<div className="instituion"> {ed.institution} </div>
								<div className="location"> {ed.location} </div>
							</div>
							<div className="block"> 
								<div className="degree"> {ed.degree} </div>
								<div className="period"> {ed.period} </div>
							</div>
						</div>
					))}
					</div>
				</div>

        <div className="certifications">

					<div className="CVtitle"> CERTIFICATIONS</div>
					{data.certifications.map((cer, index) => (
						<div className={"cerno" + index} key={index}>
							{cer} 
						</div>
					))}
				</div>

			</div>
		</>
	);
};
