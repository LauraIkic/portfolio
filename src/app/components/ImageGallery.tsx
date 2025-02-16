'use client';

import Image from "next/image";

interface ImageGalleryItem {
    tile: string;
    src: string;
}

interface ImageGalleryProps {
    imageGallery: ImageGalleryItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageGallery }) => {
    console.log(imageGallery);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col pt-10">
                {imageGallery.map((image, index) => (
                    <div key={index}>
                        <Image
                            aria-hidden
                            src={image.src}
                            alt={image.tile}
                            width={500}
                            height={400}
                            className="m-4 h-auto md:h-80 w-full"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ImageGallery;
