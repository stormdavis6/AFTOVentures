import Link from "next/link";

const AppList = () => {
    return (
        <section id="apps" className="py-20 bg-[#2C3E50] text-center">
            <h2 className="text-4xl font-semibold mb-8 text-[#ECF0F1]">Our Apps</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {/* App 1 */}
                <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-[#34495E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        {/* Image Wrapper with Background Color Border */}
                        <div className="w-full h-52 bg-[#2C3E50] p-2 rounded-md relative overflow-hidden">
                            {/* Blurred Background */}
                            <div
                                className="absolute inset-0 bg-contain bg-center rounded-md"
                                style={{
                                    backgroundImage: "url('/app1_chat.svg')",
                                    filter: "blur(1.25px)",
                                }}
                            ></div>

                            {/* Overlay Image (Not Blurred) */}
                            <img
                                src="/app1_logo.svg"
                                alt="App 1"
                                className="relative w-full h-full object-contain z-10"
                            />
                        </div>

                        {/* Text Content */}
                        <h3 className="text-xl font-semibold mb-2 text-[#ECF0F1]">Almost AI</h3>
                        <p className="text-[#BDC3C7] mb-4">
                            Almost AI combines cutting-edge technology with pure chaos. It's artificial, it's intelligent—just never at the same time.
                        </p>
                        <Link href="/app1" className="text-[#00BFFF] hover:text-[#1F9DCE] transition duration-300">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* App 2 - Coming Soon */}
                <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-[#34495E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="w-full h-48 bg-[#2C3E50] flex items-center justify-center rounded-md mb-4">
                            <p className="text-[#BDC3C7] text-xl">Coming Soon</p>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#ECF0F1] blur-sm">App 2</h3>
                        <p className="text-[#BDC3C7] mb-4">This app is coming soon. Stay tuned for more updates.</p>
                        <Link href="#" className="text-[#7F8C8D] cursor-not-allowed">Learn More</Link>
                    </div>
                </div>

                {/* App 3 - Coming Soon */}
                <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                    <div className="bg-[#34495E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <div className="w-full h-48 bg-[#2C3E50] flex items-center justify-center rounded-md mb-4">
                            <p className="text-[#BDC3C7] text-xl">Coming Soon</p>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#ECF0F1] blur-sm">App 3</h3>
                        <p className="text-[#BDC3C7] mb-4">This app is coming soon. Stay tuned for more updates.</p>
                        <Link href="#" className="text-[#7F8C8D] cursor-not-allowed">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppList;
