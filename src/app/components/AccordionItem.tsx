import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Marker from './Marker';

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
        date: string;
        description: string;
        icon: string;
        tools: string[];
        links: LinkProps[];
    };
}

const AccordionItem = ({ project }: ProjectProps) => {
    const { title, date, description, tools } = project;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <article className="m-4 border border-[#DFDFDF] p-4 transition-all duration-300">
            <div
                className="cursor-pointer flex justify-between items-center"
                onClick={toggleAccordion}
            >
                <h3 className="md:text-xl font-semibold">{title}</h3>
                <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    {isOpen ? (
                        <FaMinus className="text-lg" />
                    ) : (
                        <FaPlus className="text-lg" />
                    )}
                </span>
            </div>

            {isOpen && (
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <header className="mb-4 mt-2 pt-2 border-t">
                            {date && <p className="text-gray-600">{date}</p>}
                            <p className="text-gray-700">{description}</p>
                        </header>
                        <section className="flex flex-wrap gap-2 ">
                                {tools.map((tool, index) => (
                                    <Marker key={index} marker={tool}/>
                                ))}
                        </section>
                    </div>

                </div>
            )}
        </article>
    );
};

export {AccordionItem};
