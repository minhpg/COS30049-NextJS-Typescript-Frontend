import { Text } from "@tremor/react";
import { FooterLogo } from "../Logo";

const Footer = () => {
  return (
    <footer className="footer footer-center w-full p-6">
      <div className="text-center">
        <Text>
          Copyright © 2022 - <FooterLogo />
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
