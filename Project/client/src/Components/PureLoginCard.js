import React from "react";

function PureLoginCard({ src, msg }) {
	return (
		<div style={{
			flex: "0", 
		boxShadow: "4px 4px 8px 6px rgba(345,335,378,75.2)",

		}}>

			<img src= {src} alt="Admin" />
			<h1 style={{ margin: "30px", color:"#21094E"  }}>Hello!! {msg}</h1>
		</div>
	);
}

export default PureLoginCard;
