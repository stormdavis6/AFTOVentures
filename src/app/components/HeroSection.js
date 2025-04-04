"use client"; // This ensures the component is client-side only

const HeroSection = () => {
    const handleScroll = () => {
        const appsSection = document.getElementById("apps");
        if (appsSection) {
            appsSection.scrollIntoView({
                behavior: "smooth",
                block: "start", // Scroll to the top of the element
            });
        }
    };

    return (
        <section id="hero" className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl font-bold mb-4 text-[#ECF0F1]">
                Welcome to AFTO Ventures
            </h1>
            <p className="text-xl mb-8 text-[#BDC3C7]">
                We build high-quality mobile apps with Flutter that bring value to users.
            </p>
            <button
                onClick={handleScroll}
                className="bg-[#00BFFF] text-white px-6 py-3 rounded-md hover:bg-[#1F9DCE] transition duration-300 transform hover:scale-105 active:scale-100"
            >
                Explore Our Apps
            </button>
        </section>
    );
};

export default HeroSection;
