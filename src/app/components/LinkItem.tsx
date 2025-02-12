'use client';

import LinkItemButton from "@/app/components/LinkItemButton";
import Image from "next/image";
import Link from "next/link";

interface LinkItemProps {
    link: {
        title: string,
        image: string,
        type: string,
        link: string,
    }
}

const LinkItem = ( linkProp : LinkItemProps) => {
    return (
        <Link href={linkProp.link.link} className="border w-11/12 mb-3 flex flex-col hover:border-secondary group">
                <div className="p-3 ">
                    {linkProp.link.image !== "" ? (
                        <Image
                            aria-hidden
                            src={linkProp.link.image}
                            alt="Globe icon"
                            width={170}
                            height={300}
                            className="flex justify-center"
                        />) : null}
                    <div className="flex justify-between">
                        <h3 className="font-bold items-center flex flex-col justify-center">{linkProp.link.title}</h3>
                        <LinkItemButton type={linkProp.link.type}/>
                    </div>
                </div>
        </Link>
    );
};

export default LinkItem;