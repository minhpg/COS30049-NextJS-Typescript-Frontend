"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Flex } from "@tremor/react";

import { NavbarLogo } from "@/components/Logo";

/** Homepage Navbar component */
const Navbar = () => {
	const [top, setTop] = useState<boolean>(true);

	/** Detect whether user has scrolled the page down by 10px */
	const scrollHandler = () => {
		window.scrollY > 10 ? setTop(false) : setTop(true);
	};

	useEffect(() => {
		scrollHandler();
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top ? "bg-white backdrop-blur-sm shadow-lg" : ""
			}`}
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="shrink-0 mr-4 text-2xl">
						<NavbarLogo />
					</div>

					<Flex className="space-x-6 text-md" justifyContent="end">
						<Link href="/dashboard">Sign in</Link>
					</Flex>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
