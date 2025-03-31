import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Link from "next/link";
const footerLinks = [
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <footer className="py-24">
            <div className="container">
                <div className="mt-12 flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-8 md:gap-12">
                        <h1 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">Get Started Today</h1>
                        <p className="text-white/50 text-xl font-medium mt-3 text-center max-w-xl mx-auto">
                            Get in touch with us to start your journey to success.
                        </p>
                        <Button variant="primary" className="flex justify-center items-center w-fit mx-auto text-lg md:text-lg">Get Started</Button>
                    </div>
                    <div className="flex justify-center">
                        <p className="gap-4 md:gap-12 flex text-white/70 text-base md:text-lg">{footerLinks.map((link) => (
                            <Link href={link.href} key={link.label}>{link.label}</Link>
                        ))}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-white/30 text-base md:text-lg">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
