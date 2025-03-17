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
        link: 'mailto:ikic.laura@gmx.at',
    }
    // const linkResume =  {
    //     title: 'Resume',
    //     image: '',
    //     type: 'internalLink',
    //     link: 'https://www.linkedin.com/in/laura-ikic-aa62b021a/',
    // }

    return (
        <div className="flex flex-col lg:flex-row justify-center p-4">
            <div className="w-full lg:w-5/12 pt-10">
                <div className="flex justify-center lg:justify-start">
                    <Marker marker="ME" width="w-11"/>
                </div>
                <h1 className="text-2xl font-bold text-center lg:text-left">
                    Software Developer from Austria based in Vienna
                </h1>
                <span className="block text-center lg:text-left">
                    I am a Software Developer with a strong passion for tackling complex challenges.
                </span>
                <div className="w-full pt-10 lg:pt-32">
                    <p className="text-secondary italic font-bold text-lg text-center lg:text-left">Get in touch</p>
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <LinkItem link={linkGithub}/>
                        <LinkItem link={linkLikedIn}/>
                        <LinkItem link={linkMail}/>
                        {/*<LinkItem link={linkResume}/>*/}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-4/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
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
