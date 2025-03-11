'use client';
import { useState, useLayoutEffect } from 'react';
import projectsData from './projects.json';
import { Item } from '../components/Item';
import Link from "next/link";

export default function Page() {
    const [isRendered, setIsRendered] = useState(false);

    useLayoutEffect(() => {
        const handleRender = () => {
            setIsRendered(true);
        };

        requestAnimationFrame(handleRender);
    }, []);

    return (
        <div className="lg:w-1/2 sm:w-full mx-auto">
            {!isRendered ? (
                <div className="flex justify-center items-center h-48">
                    <div className="w-10 h-10 border-2 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 mt-4">
                    {projectsData.map((projectItem) => (
                        <Link href={`/projects/${projectItem.name}`} key={projectItem.name}>
                            <Item project={projectItem} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
