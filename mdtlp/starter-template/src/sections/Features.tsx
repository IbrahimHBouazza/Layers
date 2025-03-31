import Tag from "@/components/Tag";
import { div, span } from "framer-motion/client";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg';
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-28 lg:py-40">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-center font-medium text-4xl md:text-6xl lg:text-7xl mt-10">
                Where power meets <span className="text-lime-400">simplicity</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 
            md:grid-cols-4 lg:grid-cols-3 gap-4 lg:gap-6">
                <FeatureCard 
                    title="Real time collaboration"
                    description="Work with your team in real time.
                     Share your designs with your team and get feedback on your work."
                     className="md:col-span-2 lg:col-span-1"
                >
                    <div className="aspect-video flex items-center">
                        <Avatar className="z-30">
                            <img src={avatar1.src} alt="Avatar 1" className="rounded-full" />
                        </Avatar>
                        <Avatar className="-ml-6 z-30 border-indigo-500">
                        <img src={avatar2.src} alt="Avatar 2" className="rounded-full" />
                        </Avatar>
                        <Avatar className="-ml-6 border-amber-500">
                        <img src={avatar3.src} alt="Avatar 3" className="rounded-full" />
                        </Avatar>
                        <Avatar className="-ml-6 ">
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard 
                    title="Interactive prototyping"
                    description="Engage your users with interactive prototypes. 
                    Make your designs come to life with animations and transitions."
                    className="md:col-span-2 lg:col-span-1"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center">
                            We've achieved <span 
                            className="bg-gradient-to-r from-purple-200 to 
                            bg-pink-400 bg-clip-text text-transparent">
                                Incredible
                            </span> {" "}
                            growth in the last 3 months.
                        </p>
                    </div>
                </FeatureCard>
                <FeatureCard 
                    title="Keyboard quick actions"
                    description="Powerful keyboard shortcuts to help you fly through 
                    your design workflow."
                    className="md:col-span-2 md:col-start-2 lg:col-span-1"
                >
                    <div className="aspect-video flex items-center justify-center gap-4">
                        <Key className="w-28">Shift</Key>
                        <Key>alt</Key>
                        <Key>C</Key>

                    </div>
                </FeatureCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
               {features.map(feature => (
                <div 
                key={feature} 
                className="bg-neutral-900 border border-white/10 inline-flex 
                px-3 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
                    <span className="bg-lime-400 text-neutral-950 size-5 
                    rounded-full inline-flex items-center justify-center text-xl">
                        &#10038;
                    </span>
                    <span className="font-medium md:text-lg">{feature}</span>
                </div>
               ))}
            </div>
        </div>
    </section>;
}
