"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Set up an IntersectionObserver to detect when sections are in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Set the active section based on the intersection
                    }
                });
            },
            {
                threshold: 0.5, // Trigger the event when 50% of the section is in view
            }
        );

        // Observe the sections by their ID
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });

        // Cleanup the observer when the component is unmounted
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="bg-transparent sticky top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md bg-opacity-80">
            <div className="max-w-screen-xl mx-auto px-4 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">
                    <Link href="/" onClick={(e) => handleScroll(e, "home")}>
                        AFTO Ventures
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-white font-medium">
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "apps")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "apps" ? "after:w-full" : ""
                            }`}
                        >
                            Apps
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "about")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "about" ? "after:w-full" : ""
                            }`}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "contact")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "contact" ? "after:w-full" : ""
                            }`}
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`transition-all duration-300 bg-opacity-20 backdrop-blur-md bg-transparent md:hidden ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <ul className="flex flex-col items-center py-4 text-white text-lg gap-4">
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "apps")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "apps" ? "after:w-full" : ""
                            }`}
                        >
                            Apps
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "about")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "about" ? "after:w-full" : ""
                            }`}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => handleScroll(e, "contact")}
                            className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                                activeSection === "contact" ? "after:w-full" : ""
                            }`}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;