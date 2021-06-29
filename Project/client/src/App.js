import { Switch, Route, Link } from "react-router-dom";
// import { Row, Navbar, Nav, NavItem, NavbarText } from "reactstrap";
// import Body from "./Components/body";
import "./App.css";
import admin from "./assests/admin.png";
import patient from "./assests/patient.png";
import doctor from "./assests/doctor_new.png";
// import Footer from "./Components/footer";
import EntryRoutes from "./Routes/entryRoutes";
import PureBody from "./Components/PureBody";
import PureFooter from "./Components/PureFooter";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<ul
						style={{
							display: "flex",
							flexDirection: "row",
							paddingTop: "20px",
							marginTop: 0,
							marginBottom: "30px",
							paddingBottom: "50px",
							backgroundColor: "#F9F9F9",
						}}>
						<li
							style={{
								paddingTop: "10px",
								fontFamily:"serif",
								flex: "1",
								position: "absolute",
								fontWeight:"bolder",
								fontSize:"40px",
								color:"#A58FAA",
								textShadow:"3px 3px 5px #0A81AB",
								fontStyle:"italic",
								}}>
									Hospital Management System
						</li>
						<li
							style={{
								paddingTop: "30px",
								flex: "1",
								textAlign: "right",
							}}>
							<Link style={{ color: "black",
							paddingRight:"50px",
							fontFamily:"sans-serif",
					     	fontSize:"30px",
						    fontWeight:"bold"					}
						} to="/signUp">
								New User? Sign Up!!
							</Link>
						</li>
					</ul>
					<div className="container">
					 	<PureBody role="Admin" src={admin} link="/adminLogin" />
						
						<PureBody role="Doctor" src={doctor} link="/doctorLogin"/>
						
					 	<PureBody role="Patient" src={patient} link="patientLogin"/>
					 </div>
				</Route>
				<EntryRoutes />
			</Switch>
			<PureFooter />
		</div>
	);
}
export default App;
