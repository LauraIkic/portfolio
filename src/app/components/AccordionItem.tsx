import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
                <h3 className="md:text-xl">{title}</h3>
                <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full 
                        transition-all duration-300 transform ${
                        isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                    }`}
                >
                    {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                </span>
            </div>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden 
                    ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col mt-4">
                    <header className="mb-4 mt-2 pt-2 border-t">
                        {date && <p className="text-gray-600">{date}</p>}
                        <p className="text-gray-700">{description}</p>
                    </header>
                    <section className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-gray-200 px-4 py-1 rounded-full text-sm">
                                {tool}
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </article>
    );
};

export { AccordionItem };
