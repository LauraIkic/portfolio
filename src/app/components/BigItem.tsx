import Marker from './Marker';
import Image from "next/image";
interface ProjectProps {
    project: {
        name: string;
        title: string;
        description: string,
        image: string;
        icon: string;
        tools: string[];
        link: string;
    };
}

const BigItem = ({ project }: ProjectProps) => {
    return (
        <div className="flex flex-col w-1/2 group m-4 border border-white hover:border hover:border-black">
            <div className="w-full h-98">
                <Image
                    aria-hidden
                    src={project.image}
                    alt="Globe icon"
                    width={800}
                    height={500}
                    className="grayscale-[0.8] group-hover:grayscale-0"
                />
            </div>
            <div className="flex flex-col mt-4 p-2">
                <div className="flex h-1/3 mb-2">
                    {project.tools.map((tool, index) => (
                        <Marker key={index} marker={tool}/>
                    ))}
                </div>
                <h3 className="group-hover:text-secondary text-xl">{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export {BigItem};