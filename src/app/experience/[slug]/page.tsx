'use client';
import projectsData from '../experience.json';
import { usePathname } from "next/navigation";
import Image from "next/image";
import ImageGallery from "@/app/components/ImageGallery";
import React from "react";
import Marker from "@/app/components/Marker";

export default function ProjectDetail() {
    const pathname = usePathname();
    const project = projectsData.find((item) => '/experience/' + item.name === pathname);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Image
                aria-hidden
                src={project.thumbnail}
                alt="Globe icon"
                width={1700}
                height={60}
                className="mb-10 w-full object-cover h-96"
            />
            <div className="flex flex-col md:flex-row w-full md:w-8/12 mx-auto pb-32">
                <div className="w-full md:w-3/4 mt-2 pr-4">
                    <div className="flex flex-wrap mb-2">
                        {project.tools.map((tool, index) => (
                            <Marker key={index} marker={tool}/>
                        ))}
                    </div>
                    <h1 className="text-3xl font-semibold">{project.title}</h1>
                    <p className="mt-4 font-bold">{project.description}</p>
                    <p className="mt-4">{project.text}</p>
                    <ImageGallery imageGallery={project.imageGallery}/>
                </div>
            </div>
        </div>
    );
}
