'use client';

interface MarkerProps {
    marker: string;
    width?: string;
}

const Marker = ({ marker, width }: MarkerProps) => {

    return (
        <div className={`rounded-2xl border border-black h-fit pl-2 pr-2 self-center mr-1 group-hover:bg-secondary group-hover:text-white group-hover:border-white ${width}`}>
            {marker}
        </div>

    );
};

export default Marker;