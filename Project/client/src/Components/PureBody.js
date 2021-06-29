import React from "react";
import { Link } from "react-router-dom";
import admin from "../assests/admin.png";
// import patient from "../assests/patient.png";
function PureBody({ role, src, link }) {
	return (
		<div style={{borderRight: "10px", borderStyle: "solid", borderColor: "ButtonFace", flex: "1"}}>
			<img width="350px" height="300px" src={admin} alt="Admin" /> 
			
			<h1>{role}</h1>
			<p style={{color:"#C060A1", fontWeight:"bold", fontSize:"25px", fontFamily:"serif"}}>Click Below to Login</p>
			<button style={{border: "2px", backgroundColor: "#738598", color: "pink", width: "100px", height: "50px", borderRadius:"30px", marginBottom: "20px", boxShadow: "3px 4px 2px 2px  #827397"}}>
				<Link style={{ color: "white", fontFamily:"serif", fontWeight:"bolder", fontSize:"20px" }} to={link}>
					Login
				</Link>
			</button>
		</div>
	);

}
export default PureBody;