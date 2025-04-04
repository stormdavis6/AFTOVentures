import React from "react";
import SimpleNavbar from "../components/SimpleNavbar"; // Adjust the import path as needed
import Link from "next/link"; // Import the Link component

const GeminiApiKeyGuide = () => {
    return (
        <div>
            <SimpleNavbar /> {/* Add the simplified navbar here */}
            <div className="bg-gray-800">
                <div className="max-w-4xl mx-auto py-16 px-8 text-white bg-gray-800">
                    <h1 className="text-5xl font-bold text-center mb-8 text-[#ECF0F1]">How to Get Your Gemini API Key</h1>
                    <p className="text-lg text-center mb-10 text-[#BDC3C7]">
                        Follow these steps to generate your API key, which will be used to power your interactions within our chatbot app, Almost AI.
                    </p>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                                <h2 className="text-2xl font-semibold mb-3 flex items-center text-blue-600">
                                    <span className="text-blue-600 mr-3">{index + 1}.</span> {step.title}
                                </h2>
                                <p className="text-gray-700">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://aistudio.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
                        >
                            Get Your API Key
                        </a>
                    </div>

                    {/* Adding the Google AI Studio Link */}
                    <div className="text-center mt-4">
                        <p className="text-[#BDC3C7]">
                            For more details, visit{" "}
                            <Link
                                href="https://support.gemini.com/hc/en-us/articles/360031080191-How-do-I-create-an-API-key"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00BFFF] hover:text-[#1F9DCE] transition duration-300"
                            >
                                Gemini Support
                            </Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const steps = [
    {
        title: "Visit Google AI's Platform",
        description: (
            <>Go to{" "}
                <Link
                    href="https://aistudio.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00BFFF] hover:text-[#1F9DCE] transition duration-300"
                >
                    Google AI Studio
                </Link>{" "}
                and sign in with your Google account.
            </>
        ),
    },
    {
        title: "Navigate to API Keys",
        description: "Once logged in, click on the 'Get API key' button in the settings menu on the left.",
    },
    {
        title: "Generate a New API Key",
        description: "Click on 'Create API Key' and follow the prompts to generate your key.",
    },
    {
        title: "Copy and Store Your Key Securely",
        description: "Copy the generated key and store it in a safe place. You won’t be able to view it again.",
    },
    {
        title: "Use Your Key in API Requests",
        description: "Now you can use your API key to authenticate requests when integrating with Gemini AI.",
    },
];

export default GeminiApiKeyGuide;