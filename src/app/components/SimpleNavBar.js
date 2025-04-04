"use client";

import Link from "next/link";

const SimpleNavbar = () => {
    return (
        <nav className="bg-transparent sticky top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md bg-opacity-80">
            <div className="max-w-screen-xl mx-auto px-4 py-5 flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    <Link href="/">AFTO Ventures</Link>
                </div>
            </div>
        </nav>
    );
};

export default SimpleNavbar;
