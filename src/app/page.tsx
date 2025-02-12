import '../app/globals.css';
import Image from "next/image";
import LinkItem from "@/app/components/LinkItem";
import Marker from "@/app/components/Marker";

export default function Home() {
    const linkGithub =  {
        title: 'Github',
        image: '',
        type: 'link',
        link: 'https://github.com/LauraIkic',
    }
    const linkLikedIn =  {
        title: 'LinkedIn',
        image: '',
        type: 'link',
        link: 'https://www.linkedin.com/in/laura-ikic-aa62b021a/',
    }
    const linkMail =  {
        title: 'Send a Message',
        image: '',
        type: 'link',
        link: 'mailto:laura@ikic.at',
    }
    const linkResume =  {
        title: 'Resume',
        image: '',
        type: 'internalLink',
        link: 'https://www.linkedin.com/in/laura-ikic-aa62b021a/',
    }

    return (
        <div className="flex flex-col md:flex-row justify-center p-4">
            {/* Text Section */}
            <div className="w-full md:w-5/12 pt-10">
                <Marker marker="ME" width="w-11"/>
                <h1 className="text-2xl font-bold text-center md:text-left">
                    Software Developer from Austria based in Vienna
                </h1>
                <span className="block text-center md:text-left">
                    I am a dedicated Software Developer with a strong passion for tackling complex challenges.
                    I hold a BSc in Mobile Computing and am currently pursuing a Master's in Business Informatics,
                    where I am further refining my skills at the intersection of technology and business.
                </span>
                <div className="w-full pt-10 md:pt-32">
                    <p className="text-secondary italic font-bold text-lg text-center md:text-left">Get in touch</p>
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <LinkItem link={linkGithub}/>
                        <LinkItem link={linkLikedIn}/>
                        <LinkItem link={linkMail}/>
                        <LinkItem link={linkResume}/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-8 md:mt-0">
                <Image
                    aria-hidden
                    src="/profile.png"
                    alt="Profile picture"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}
