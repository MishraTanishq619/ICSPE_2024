import React from "react";
import CopyrightFooter1 from "@/components/CopyrightFooter1";
import FixedBgAttachmentPaper2 from "@/components/FixedBgAttachmentPaper2";
import FixedBgAttachmentVideo1 from "@/components/FixedBgAttachmentVideo1";
import Headbar1 from "@/components/Headbar1";
import HeadMenuBar2 from "@/components/HeadMenuBar2";
import HeroCorousel from "@/components/HeroCorousel";
import I2ctJourney from "@/components/I2ctJourney";
import OurSpeakersCorousel from "@/components/OurSpeakersCorousel";
import SponsorFooter2 from "@/components/SponsorFooter2";
import SuccessCounter from "@/components/Conference_Tracks";
import About_the_Conference from "@/components/About_the_Conference";
import About_the_OPJU from "@/components/About_the_OPJU";
import Important_Dates from "@/components/Important_Dates";
import Conference_Tracks from "@/components/Conference_Tracks";
import OtherSponsorFooter2 from "@/components/OtherSponsorFooter2";

const page = () => {
	return (
		<div className="text-black bg-white flex flex-col w-full ">
			<HeroCorousel />
			<div className="w-full  min-[900px]:flex">
				<div className="min-[900px]:w-2/3">
					<About_the_Conference />
					{/* <FixedBgAttachmentVideo1 /> */}

					<About_the_OPJU />
					{/* <FixedBgAttachmentPaper2 /> */}

					<Important_Dates h={1} />

					<Conference_Tracks />
				</div>
				<div className="min-[900px]:w-1/3">
					<SponsorFooter2 />
					<OtherSponsorFooter2 />
				</div>
			</div>
		</div>
	);
};

export default page;
