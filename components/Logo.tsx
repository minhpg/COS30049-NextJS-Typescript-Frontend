import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

// Using react-text-gradient library to render page logo with a gradient background

export const NavbarLogo = () => {
  return (
    <Link href="/" className="font-black transition-all hover:scale-110">
      <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
        BAN CORP.
      </LinearGradient>
    </Link>
  );
};

export const FooterLogo = () => {
    return (
      <Link href="/" className="font-black transition-all hover:scale-110">
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          bancorp.
        </LinearGradient>
      </Link>
    );
  };
