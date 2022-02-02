import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import logoName from "../../assets/LogoNameMd.svg";
import classes from "./header.module.scss";
import { Col, Input, Row } from "reactstrap";
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if ((size.width > 768) & toggleMenu) {
			setToggleMenu(false);
		}
	}, [size.width, toggleMenu]);

	const toggleMenuHandler = () => {
		setToggleMenu(toggle => !toggle);
	};

	return (
		<Row>
			<header className={classes.header}>
				<div className={classes.header_content}>
					<Col md={3}>
						<a to="/" className={classes.header_content_logo}>
							<img src={logoName} alt="logoName" />
						</a>
					</Col>
					<Col md={6}>
						<nav
							className={`${classes.header_content_nav} ${
								toggleMenu ? classes.isMenu : ""
							}`}
						>
							<div className={classes.header_content_search}>
								<AiOutlineSearch className={classes.header_content_search_icon} />
								<Input
									className={classes.header_content_search_box}
									placeholder="Search..."
									bsSize="sm"
									type="search"
								/>
							</div>
						</nav>
					</Col>
					<Col md={3}>
						<div className={classes.header_content_nav_toggle}>
							{toggleMenu ? (
								<AiOutlineClose onClick={toggleMenuHandler} />
							) : (
								<BiMenuAltRight onClick={toggleMenuHandler} />
							)}
						</div>
					</Col>
				</div>
			</header>
		</Row>
	);
};

export default Header;
