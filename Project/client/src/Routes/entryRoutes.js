import { Route } from "react-router";
import { Col, Row } from "reactstrap";
import AdminWelcome from "../Components/Admin/admin-welcome";
import DoctorLogin from "../Components/Doctor/doctorLogin";
import LoginCard from "../Components/LoginCard";
import LoginNav from "../Components/LoginNav";
import PatientLogin from "../Components/Patient/loginPatient";
import doctor_login from "../assests/doctor_2.png";
import SignUp from "../Components/Patient/signUp";

export default function EntryRoutes() {
	return (
		<>
			<Route path="/adminLogin">
				<AdminWelcome />
			</Route>
			<Route path="/doctorLogin">
				<DoctorLogin />
			</Route>
			<Route path="/patientLogin">
				<PatientLogin />
			</Route>
			<Route path="/signUp">
				<LoginNav msg="signup" />
				<Row mt="7">
					{ <LoginCard
						src={doctor_login}
						msg="Welcome to the Hospital Managenent System"
					/> }
					<Col>
						<h1>Sign Up</h1>
						<SignUp />
					</Col>
				</Row>
			</Route>
		</>
	);
}
