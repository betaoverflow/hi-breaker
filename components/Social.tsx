import React from "react";
import Image from "next/image";
import Discord from "../public/discord.png";
import Whatsapp from "../public/whatsapp.png";
import Linkedin from "../public/linkedin.png";
import Slack from "../public/slack.png";
import Twitter from "../public/twitter.png";

const Social = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Spread the concept in
      </h1>
      <div className="h-16 md:w-3/6 mx-auto md:h-32 mt-16 flex flex-row justify-evenly">
        <div className="w-16 md:w-24">
          <Image src={Discord} width={100} height={100} layout="responsive" />
        </div>
        <div className="w-16 md:w-24">
          <Image src={Whatsapp} width={100} height={100} layout="responsive" />
        </div>
        <div className="w-16 md:w-24">
          <Image src={Twitter} width={100} height={100} layout="responsive" />
        </div>
        <div className="w-16 md:w-24">
          <Image src={Linkedin} width={100} height={100} layout="responsive" />
        </div>
        <div className="w-16 md:w-24">
          <Image src={Slack} width={100} height={100} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Social;
