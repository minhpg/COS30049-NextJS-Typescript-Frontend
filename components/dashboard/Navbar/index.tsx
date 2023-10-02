"use client";

import { useState } from "react";
import { Button, Card, Flex } from "@tremor/react";
import { NavbarLogo } from "../../Logo";
import Link from "next/link";
import SearchDialog from "./SearchDialog";
import NavbarDialog from "./NavbarDialog";
import { navbarItems } from "./navbar-items";

/** Dashboard Footer component */
const Navbar = () => {
	const [isOpenNavigation, setIsOpenNavigation] = useState(false);
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	return (
		<>
			<SearchDialog isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
			<NavbarDialog isOpen={isOpenNavigation} setIsOpen={setIsOpenNavigation} />
			<Flex className="my-6" justifyContent="between" alignItems="center">
				<Flex justifyContent="start">
					<div className="hidden lg:block w-full text-xl">
						<NavbarLogo />
					</div>
					<div className="lg:hidden w-full text-xl">
						<NavbarLogo />
					</div>
					<Flex className="space-x-8" alignItems="center" justifyContent="end">
						<div
							id="menu-items"
							className="text-slate-500 relative hidden lg:flex justify-center text-base font-medium space-x-8"
						>
							{navbarItems.map((item) => (
								<Link href={item.path} key={item.path}>
									<span className="hover:text-slate-700 transition-all">
										{item.title}
									</span>
								</Link>
							))}
						</div>
						<Button
							onClick={() => setIsOpenSearch(true)}
							color="slate"
							variant="light"
							className="hidden lg:flex"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</Button>
						<a
							href="https://github.com/minhpg/COS30049-NextJS-Typescript-Frontend"
							target="_blank"
							rel="noreferrer"
							title="Go to GitHub Repository"
							className="inline-flex flex-shrink-0 py-2 text-base font-medium group
                md:text-lg transition-all
                text-slate-500 hover:text-slate-700 hidden lg:flex"
						>
							<div className="flex items-center space-x-2">
								<svg
									width="24"
									height="24"
									fill="currentColor"
									className="transform"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
									></path>
								</svg>
							</div>
						</a>
					</Flex>
					<Flex alignItems="center" className="relative lg:hidden space-x-4">
						<Flex justifyContent="end" className="space-x-3.5">
							<Button
								onClick={() => setIsOpenSearch(true)}
								color="slate"
								variant="light"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</Button>
							<Button
								onClick={() => setIsOpenNavigation(true)}
								color="slate"
								variant="light"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default Navbar;
