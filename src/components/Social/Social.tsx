import React from 'react';
import './Social.css'
import { socialMediaLinks } from "../../portfolio";

function Social() {
	return(
		<div className="social-media-links">
			{socialMediaLinks.github && <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>}
			{socialMediaLinks.facebook && <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-facebook"></i>
			</a>}
			{socialMediaLinks.instagram && <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-instagram"></i>
			</a>}
		</div>
	);
}
export default Social;