import { Text } from "@tremor/react";
import { FooterLogo } from "../Logo";

/** Dashboard Footer component */
const Footer = () => {
	return (
		<footer className="footer footer-center w-full p-6">
			<div className="text-center">
				<Text>
					Copyright © {new Date().getFullYear()} - <FooterLogo />
				</Text>
			</div>
		</footer>
	);
};

export default Footer;
