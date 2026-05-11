import React, { useState } from "react";
import data from "../../myapps.json";

const BlogContext = ({ title, picture, content, link }) => {
	//<a href={link} target='_blank' rel='noreferrer'>
	const blogitem = ( 
		<div className="blog-item">
			<div className="picture"> {picture} </div>
			<div className="subarea">
				<div className="title"> {link !== '' ? '↗ ' : '• '}    {title} </div>
				<div className="content"> {content} </div>
			</div>
		</div> );

	return (
		 link === '' ? blogitem : <a href={link} target='_blank' rel='noreferrer'>{blogitem}</a>
	);
};

const Blog = ({blogSize} ) => {
	const [page, setPage] = useState(0);

	const myblogs = data.myapps;


	const buttons = Math.ceil(myblogs.length / blogSize);
	return (
		<div
			className="pageview"
			id="blog"
			style={{
				behavior: "smooth",
				block: "start",
				transition: "opacity 0.5s ease-in-out",
			}}>
			<div className="blogs">
				{myblogs.slice(page * blogSize, (page + 1) * blogSize).map((e, index) => (
					<BlogContext
						key={index}
						title={e.title.toUpperCase()}
						picture={e.picture}
						content={e.content}
						link={e.link}
					/>
				))}
			</div>
				<div className="button">
					{[...Array(Math.ceil(buttons))].map((_, index) => (
						<React.Fragment key={index}>
							<span className="link" onClick={() => setPage(index)}>
								{index + 1}
							</span>

							{index + 1 !== Math.ceil(buttons) && (
								<span className="separator"> - </span>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
	);
};

export default Blog;
