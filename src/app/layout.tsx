import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CopyrightFooter1 from "@/components/CopyrightFooter1";
import HeadMenuBar2 from "@/components/HeadMenuBar2";
import Headbar1 from "@/components/Headbar1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ICSPE_2024",
	description: "ICSPE_OPJU_2024",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
					integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body className={"text-black bg-[#ffffff]"}>
				<Headbar1 />
				{/* <HeadMenuBar2 /> */}
				{children}
				<CopyrightFooter1 />

				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
					integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
					integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				></script>
			</body>
		</html>
	);
}
