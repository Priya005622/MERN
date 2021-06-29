import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
function PureFooter() {
	return (
		<div className="container footer" style={{backgroundColor:"#A7C4BC"}}>
			<div style={{ flex: "1" }}>
				<h2 style={{color:"black", fontSize:"40px"}}>Contact Us</h2>
				<ul className="list-unstyled">
					<li style={{color:"black", fontSize:"20px"}}>
						<FontAwesomeIcon icon={faPhone} />
						+91 12345678 90
					</li>
				</ul>
			</div>
			<div style={{ flex: "1", color:"black" }}>
				<h2 style={{fontSize:"40px"}}>Address</h2>
				<p style={{fontSize:"20px"}}>H.NO:- 123/456/A</p>
			<p style={{fontSize:"20px"}}>	Heaven street, 
				India</p>
			</div>
			<div style={{ flex: "1", margin:"20px", padding:"10px" }}>
				<SocialIcon
					style={{ margin: "10px" }}
					url="https://facebook.com"
					fgColor="white"
				/>
				<SocialIcon
					style={{ margin: "10px" }}
					url="https://twitter.com"
					fgColor="white"
				/>
				<SocialIcon
					style={{ margin: "10px" }}
					url="https://linkedin.com"
					fgColor="white"
				/>
				<SocialIcon
					style={{ margin: "10px" }}
					url="https://github.com"
					fgColor="white"
				/>
			</div>
		</div>
	);
}

export default PureFooter;