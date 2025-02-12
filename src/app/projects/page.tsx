'use client';
import projectsData from './projects.json';
import {Item} from '../components/Item';
import Link from "next/link";
export default function Page() {
    return (
        <div className="lg:w-1/2 sm-w-full mx-auto">
            {projectsData.map((projectItem) => (
                <Link href={`/projects/${projectItem.name}`} key={projectItem.name}>
                <Item key={projectItem.name} project={projectItem} />
                </Link>
            ))}
        </div>
    );
}