import experienceData from './experience.json';
import {Item} from '../components/Item';
import Link from "next/link";

export default function Page() {
    return (
        <div className="lg:w-1/2 sm-w-full mx-auto">
            {experienceData.map((category) => (
                <div key={category.name}>
                    <h2 className="pl-4 pt-8 text-xl font-bold text-secondary">{category.title}</h2>
                    {
                        category.items.map((reference)=>
                            <Link href={reference.externalLink} key={reference.name} target="_blank">
                                <Item key={reference.name} project={reference} />
                            </Link>
                        )
                    }
                </div>
            ))}
        </div>
    );
}