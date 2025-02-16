import experienceData from './experience.json';
import {Item} from '../components/Item';
export default function Page() {
    return (
        <div className="w-1/2 mx-auto">
            {experienceData.map((reference) => (
                <Item key={reference.name} project={reference} />
            ))}
        </div>
    );
}