import { useRef, useState } from "react";
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste'

const Documentation = () => {
    const [copied, setCopied] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const divRef = useRef(null)

    const data = [
        {
            title: "General",
            description:
                "hi bhai is the entrypoint for the program and all programs must end with bye bhai. Anything outside of it will be ignored.",
            code: [
                { text: "This will be ignored", color: "text-gray-500" },
                { text: "hi bhai", color: "text-green-400" },
                { text: "// Write code here", color: "text-gray-400" },
                { text: "bye bhai", color: "text-red-400" },
                { text: "This too", color: "text-gray-500" },
            ],
        },
        {
            title: "Variables",
            description:
                "Variables can be declared using bhai ye hai.",
            code: [
                { text: "hi bhai", color: "text-green-400" },
                { text: 'bhai ye hai a = 10;', color: "text-yellow-400" },
                { text: 'bhai ye hai b = "two";', color: "text-yellow-400" },
                { text: "bye bhai", color: "text-red-400" },
            ],
        },
        {
            title: "Types",
            description:
                "Numbers and strings are like other languages. Null values can be denoted using nalla. sahi and galat are the boolean values.",
            code: [
                { text: "hi bhai", color: "text-green-400" },
                { text: 'hi bhai', color: "text-yellow-400" },
                { text: '// Write code here', color: "text-yellow-400" },
                { text: "bye bhai", color: "text-red-400" },
                { text: "This too", color: "text-gray-500" },
            ],
        },
        {
            title: "Built-ins",
            description:
                "Use bol bhai to print anything to console.",
            code: [
                { text: "hi bhai", color: "text-green-400" },
                { text: 'hi bhai', color: "text-yellow-400" },
                { text: '// Write code here', color: "text-yellow-400" },
                { text: "bye bhai", color: "text-red-400" },
                { text: "This too", color: "text-gray-500" },
            ],
        },
        {
            title: "Conditionals",
            description:
                "Bhailang supports if-else-if ladder construct , agar bhai block will execute if condition is sahi, otherwise one of the subsequently added nahi to bhai blocks will execute if their respective condition is sahi, and the warna bhai block will eventually execute if all of the above conditions are galat.",
            code: [
                { text: "hi bhai", color: "text-green-400" },
                { text: 'hi bhai', color: "text-yellow-400" },
                { text: '// Write code here', color: "text-yellow-400" },
                { text: "bye bhai", color: "text-red-400" },
                { text: "This too", color: "text-gray-500" },
            ],
        },
        {
            title: "Loops",
            description:
                "Statements inside jab tak bhai blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes galat, statement within the loop stops executing and control passes to the statement following the loop. Use bas kar bhai to break the loop and agla dekh bhai to continue within loop.",
            code: [
                { text: "hi bhai", color: "text-green-400" },
                { text: 'hi bhai', color: "text-yellow-400" },
                { text: '// Write code here', color: "text-yellow-400" },
                { text: "bye bhai", color: "text-red-400" },
                { text: "This too", color: "text-gray-500" },
            ],
        },
    ];

    const handleCopy = (index, text) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className=" text-white min-h-screen p-8">
            <h1 className="text-2xl mb-4 font-got tracking-wide sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">Documentation</h1>
            <p className="mb-6 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                ThroneLang is a mystical, dynamically typed language forged for the rulers of code, where logic meets legend.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {data.map((section, index) => (
                    <div key={index} className="border-t border-white pt-6">
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                        <p className="mb-4 text-md">{section.description}</p>
                        <div className="bg-[#063C4C] relative p-4 rounded-md text-sm font-mono">
                            <button
                                onClick={() =>
                                    handleCopy(index, section.code.map((line) => line.text).join("\n"))
                                }
                                className="absolute cursor-pointer top-2 right-2 bg-gray-500/35 hover:bg-gray-500/60 transition text-white px-2 py-1 text-xs rounded flex items-center gap-1"
                            >
                                {copiedIndex === index ? <ContentPaste fontSize="inherit" /> : <ContentCopy fontSize="inherit" />}
                                {copiedIndex === index ? "Copied" : "Copy"}
                            </button>
                            {section.code.map((line, idx) => (
                                <p key={idx} className={line.color}>{line.text}</p>
                            ))}
                        </div>
                    </div>
                ))}



            </div>
            <div className="mt-20 flex justify-center text-md">
                © 2025 Jayesh Vegda, Jay Dhandhukiya
            </div>
        </div>
    );
};

export default Documentation;
