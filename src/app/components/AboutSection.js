import Link from "next/link";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-800 text-white text-center">
            <h2 className="text-4xl font-semibold mb-8">About Us</h2>
            <p className="text-xl mb-8">
                At AFTO Ventures, we craft powerful mobile experiences with Flutter, turning bold ideas into seamless, high-performance apps.
                Whether for businesses or individuals, we build innovative, scalable solutions that make an impact.
            </p>
            <Link
                href="/about"
                className="bg-[#00BFFF] text-white px-6 py-3 rounded-md hover:bg-[#1F9DCE] transition duration-300"
            >
                Learn More
            </Link>
        </section>
    );
};

export default AboutSection;