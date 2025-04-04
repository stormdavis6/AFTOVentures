"use client";

import { useState } from "react";

const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);

        const response = await fetch("https://formsubmit.co/5c295be8d165f54346bba0f0583a8866", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setIsSubmitted(true);
            event.target.reset();
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-20 px-4 bg-[#2C3E50] text-white text-center">
            <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>
            <p className="text-xl mb-8">
                Have a question, feedback, or just want to say hello? Drop us a message below!
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#34495E] p-6 rounded-lg shadow-lg">
                {/* Prevent spam bots */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="mb-4 text-left">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-md bg-[#2C3E50] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                </div>

                <div className="mb-4 text-left">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-md bg-[#2C3E50] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                </div>

                <div className="mb-4 text-left">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea id="message" name="message" required rows="4" className="w-full px-4 py-2 rounded-md bg-[#2C3E50] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                </div>

                <button
                    type="submit"
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold transition duration-300 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"}`}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2 border-4 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
                            Sending...
                        </span>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>

            {/* Modal Popup */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md">
                    <div className="bg-white/90 text-black p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                        <p>Your message has been sent. We'll be in touch as soon as possible.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactSection;
