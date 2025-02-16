import Marker from './Marker';
import Image from 'next/image';

interface LinkProps {
    title: string;
    image: string;
    type: string;
    link: string;
}

interface ProjectProps {
    project: {
        name: string;
        title: string;
        image: string;
        description: string;
        icon: string;
        tools: string[];
        links: LinkProps[];
    };
}

const Item = ({ project }: ProjectProps) => {
    const { image, title, description, tools } = project;

    return (
        <article className="flex flex-col md:flex-row group m-4 border border-[#DFDFDF] hover:border hover:border-secondary p-4 transition-all duration-300">
            <div className="w-full sm:w-[350px] md:max-w-[250px] h-auto mb-4 md:mb-0 overflow-hidden">
                <Image
                    aria-hidden
                    src={image}
                    alt={title}
                    width={350}
                    height={350}
                    className="object-cover transition-all sm:w-[350px] md:max-w-[250px] duration-300 transform group-hover:scale-105 grayscale-[0.8] group-hover:grayscale-0"
                />
            </div>

            <div className="flex flex-col mt-4 md:mt-0 md:ml-10">
                <header className="mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-secondary">{title}</h3>
                    <p className="text-sm sm:text-base">{description}</p>
                </header>
                <section className="flex flex-wrap gap-2 h-1/3">
                    {tools.map((tool, index) => (
                        <Marker key={index} marker={tool} />
                    ))}
                </section>
            </div>
        </article>
    );
};

export { Item };
