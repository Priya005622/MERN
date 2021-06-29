import React from "react";
import axios from "axios";
import {Button, Col, Nav, NavItem, NavLink, Row, Input, Table} from "reactstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

class GetDepartment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			depts: [],
			searchTerm: "",
		};}
	componentDidMount() {
		const headers = {
			authorization: Cookies.get("token"),
		};
		axios.get("http://localhost:4000/dept/deptList", { headers: headers })
			.then((resp) => {
				console.log(resp);
				this.setState({ depts: resp.data });
				// // console.log(this.state.users);
			});}
	handleDelete(id) {
		console.log(id);
		const headers = {
			authorization: Cookies.get("token"),
		};
		axios.delete(`http://localhost:4000/dept/deptList/${id}`,			
				{ headers: headers }
			).then((res) => {
				alert("Department deleted");
				window.location.reload(false);
			});
	}
	render() {
		console.log(this.state.users);
		return (
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink>
							<Link to="/adminLogin">Add Department</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink active>
							<Link to="/adminLogin/deplist">
								Department List
							</Link>
						</NavLink>
					</NavItem>
				</Nav>
				<Row>
					<Col className="mt-3" sm="3">
						{" "}
					</Col>
					<Col className="mt-3">
						<Input
							style={{ width: "60%" }}
							placeholder="Search..."
							type="text"
							onChange={(e) =>
								this.setState({ searchTerm: e.target.value })}/>
						<Table
							striped
							style={{
								width: "60%",
								"box-shadow": "2px 2px 4px 4px #E4BAD4",
								marginTop: "40px",
							}}
						>
							<thead>
								<tr>
									<th>Department Id</th>
									<th>Department Name</th>

									<th style={{ paddingBottom: "30px" }}>
										Department Description
									</th>
								</tr>
							</thead>
							<tbody>
								{this.state.depts.filter((dept) => {
									if 
								(this.state.searchTerm === "") {
											return dept;
										} else if (
											dept.deptName
												.toLowerCase()
												.includes(
													this.state.searchTerm.toLowerCase()
												)
										) {
											return dept;
										}
										return "ok";
									}).map((dept, index) => {
										return (
											<tr>
												<th scope="row" id={index}>
													{dept.dept_id}
												</th>
												<td>{dept.DeptName}</td>
												<td>{dept.DeptDescription}</td>
												<td>
													<Button
														color="danger"
														id={dept.dept_id}
														onClick={(e) =>this.handleDelete(e.target.id)}>
														Delete
													</Button>
												</td>
											</tr>
										);})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</div>
		);}}
export default GetDepartment;
