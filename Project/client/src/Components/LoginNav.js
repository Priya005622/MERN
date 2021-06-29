import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarText, NavItem } from "reactstrap";

export default function LoginNav({ msg }) {
	return (
		<Navbar style={{ backgroundColor:"ghostwhite"}} expand="md">
			<Nav className="mr-auto" navbar>
				<NavItem
					style={{padding: "20px", margin:"10px", fontSize: "30px",}}>
					<Link style={{ color: "black", fontWeight:"bolder", fontFamily:"sans-serif" }}
						to="/">
						Home
					</Link>
				</NavItem>
			</Nav>

			{msg ? (
				<></>
			) : (
				<NavbarText>
					<Link to="/signUp" style={{ color: "blue", fontFamily:"sans-serif", fontWeight:"bold" }}>
						New User? SignUp!!
					</Link>
				</NavbarText>
			)}
		</Navbar>
	);
}
