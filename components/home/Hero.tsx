import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/home/ModalVideo";
import { LinearGradient } from "react-text-gradients";
import { LogoGradient } from "../Logo";
import { Button } from "@tremor/react";
import Link from "next/link";

/** Homepage Hero component */
const Hero = () => {
	return (
		<section className="relative">
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-32 pb-0 md:pt-32">
					<div className="text-center pb-12 md:pb-16">
						<h1
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out"
						>
							Explore{" "}
							<LinearGradient gradient={LogoGradient}>
								<span>Ethereum</span>
							</LinearGradient>
						</h1>
						<div className="max-w-3xl mx-auto">
							<p
								className="text-xl text-gray-600 mb-8"
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Explore Ethereum Blockchain Transactions and Patterns to
								understand more about the Network
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<Link href="/dashboard">
									<Button>Visit Dashboard</Button>
								</Link>
							</div>
						</div>
					</div>
					{/* Hero image */}
					<ModalVideo
						thumb={VideoThumb}
						thumbWidth={768}
						thumbHeight={432}
						thumbAlt="Modal video thumbnail"
						video="/videos/COS30049 - Video Report.mp4"
						videoWidth={1920}
						videoHeight={1080}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
