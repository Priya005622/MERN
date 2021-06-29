import { Container, Row, Col } from "reactstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
function Footer() {
	return (
		<footer>
			<Container fluid={true}>
				<Row>
					<Col sm="12" md="4">
						<h2>Contact Us</h2>
						<ul className="list-unstyled">
							<li>
								<FontAwesomeIcon icon={faPhone} />
								+91 12345678 90
							</li>
						</ul>
					</Col>

					<Col sm="12" md="4">
						<h2>Address</h2>
						<p>H.NO 123/456/A</p>
						<p>Heaven street</p>
						<p>India</p>
					</Col>
					<Col sm="12" md="4">
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
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
export default Footer;