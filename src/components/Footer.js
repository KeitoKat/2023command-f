import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<Container>
		<Row>
		<Column>
			<Heading>Who we are</Heading>
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Teams</FooterLink>
			<FooterLink href="#">Support</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Subscript</FooterLink>
			<FooterLink href="#">Advertise</FooterLink>
		</Column>
		<Column>
			<Heading>News</Heading>
			<FooterLink href="#">Latest News</FooterLink>
			<FooterLink href="#">Supscript</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
		</Column>
		<Column>
			<Heading>Contact</Heading>
            <FooterLink href="#">Phone: 1+123-456-789</FooterLink>
			<FooterLink href="#">Email: pinion.ubc@gmail.com</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
