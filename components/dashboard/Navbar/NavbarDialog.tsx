import { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import { Button, Card, Flex } from "@tremor/react";
import Link from "next/link";

import { NavbarLogo } from "@/components/Logo";
import { navbarItems } from "./navbar-items";

export interface INavbarDialogProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
/** Responsive Navbar Dialog component */
const NavbarDialog = ({ isOpen, setIsOpen }: INavbarDialogProps) => {
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 bg-black/30 z-40" aria-hidden="true" />
			<div className="fixed inset-x-0 top-0 z-50 m-1 opacity-100 scale-100">
				<Dialog.Panel className="m-2">
					<Card className="p-0">
						<Flex className="p-5">
							<div className="text-xl">
								<NavbarLogo />
							</div>
							<Button
								color="slate"
								variant="light"
								onClick={() => setIsOpen(false)}
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</Button>
						</Flex>
						<div className="py-3 px-5 text-md block">
							{navbarItems.map((item) => (
								<Link href={item.path} key={item.path}>
									<span className="text-slate-700 font-medium inline-block w-full py-4">
										{item.title}
									</span>
								</Link>
							))}
						</div>
						<Flex
							className="space-x-6 px-5 bg-slate-50 py-4 rounded-b-xl"
							justifyContent="start"
						>
							<a
								href="https://github.com/minhpg/COS30049-NextJS-Typescript-Frontend"
								target="_blank"
								rel="noreferrer"
								title="Go to GitHub Repository"
								className="inline-flex flex-shrink-0 py-2 text-base font-medium group
                  text-md transition-all
                  text-slate-500 hover:text-slate-700"
							>
								<svg
									width="24"
									height="24"
									fill="currentColor"
									className="transform"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
									></path>
								</svg>
								<p className="ml-2">GitHub</p>
							</a>
						</Flex>
					</Card>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};

export default NavbarDialog;
