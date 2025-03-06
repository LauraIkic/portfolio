'use client';
import experienceData from './experience.json';
import {AccordionItem} from "@/app/components/AccordionItem";

export default function Page() {
    return (
        <div className="lg:w-1/2 sm:w-full mx-auto">
            {experienceData.map((category) => (
                <div key={category.title}>
                    <h2 className="pl-4 pt-8 text-xl font-bold text-secondary">{category.title}</h2>
                    {
                        category.items.map((reference) => (
                           <AccordionItem key={reference.name} project={reference} />
                        ))
                    }
                </div>
            ))}
        </div>
    );
}
