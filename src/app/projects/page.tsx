'use client';
import { useState, useEffect } from 'react';
import projectsData from './projects.json';
import { Item } from '../components/Item';
import Link from "next/link";

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="lg:w-1/2 sm-w-full mx-auto">
            {isLoading ? (
                <div className="flex justify-center items-center h-48">
                    <div className="w-10 h-10 border-2 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                projectsData.map((projectItem) => (
                    <Link href={`/projects/${projectItem.name}`} key={projectItem.name}>
                        <Item key={projectItem.name} project={projectItem} />
                    </Link>
                ))
            )}
        </div>
    );
}
