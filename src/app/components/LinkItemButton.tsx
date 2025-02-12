'use client';

import Image from "next/image";
import {LinktItemType} from "@/app/enums/LinktItemType";

interface LintItemButtonProps {
    type: string
}

const LintItemButton = ({ type }: LintItemButtonProps) => {
    const src = type === LinktItemType.link ? '/link.svg' : '/download.svg'

    return (
        <div className="rounded-2xl border h-fit p-1 self-center mr-1 group-hover:bg-secondary group-hover:text-white group-hover:border-white">
            <Image
                aria-hidden
                src={src}
                alt="Link icon"
                width={15}
                height={12}
            />
        </div>
    );
};

export default LintItemButton;