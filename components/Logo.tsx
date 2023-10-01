import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { Linear } from "react-text-gradients/lib/types/types";

// Using react-text-gradient library to render page logo with a gradient background

export const NavbarLogo = () => {
	return (
		<Link href="/" className="font-black transition-all hover:scale-110">
			<LinearGradient gradient={LogoGradient}>BAN CORP.</LinearGradient>
		</Link>
	);
};

export const FooterLogo = () => {
	return (
		<Link href="/" className="font-black transition-all hover:scale-110">
			<LinearGradient gradient={LogoGradient}>bancorp.</LinearGradient>
		</Link>
	);
};

export const LogoGradient = ["to left", "#17acff ,#ff68f0"] as Linear;
