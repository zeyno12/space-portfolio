import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <Link href={'/https://github.com/zeyno12'}>
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <Link href={'/https://discord.com/channels/@me'}>

                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </Link>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <Link href='/https://www.linkedin.com/in/zeynab-bagirova-78b424246/'>
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </Link>

                        </p>
                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Zeynab Dev 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer