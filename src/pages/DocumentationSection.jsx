const Documentation = () => {
    return (
        <div className=" text-white min-h-screen p-8">
            <h1 className="text-4xl mb-4 font-got tracking-wide">Documentation</h1>
            <p className="mb-6 text-xl">
                ThroneLang is a mystical, dynamically typed language forged for the rulers of code, where logic meets legend. ✨
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* General Section */}
                <div className="border-t border-white my-6 mb-10">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">General 📝</h2>
                    <p className="mb-4 text-lg">
                        <span className="bg-gray-700 px-2 py-1 rounded">hi bhai</span> is the entrypoint for the program and all programs must end with
                        <span className="bg-gray-700 px-2 py-1 rounded"> bye bhai</span>. Anything outside of it will be ignored.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-gray-500">This will be ignored</p>
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-gray-400">// Write code here</p>
                        <p className="text-red-400">bye bhai</p>
                        <p className="text-gray-500">This too</p>
                    </div>
                </div>

                {/* Variables Section */}
                <div className="border-t border-white my-6">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">Variables  🔮</h2>
                    <p className="mb-4 text-lg">
                        Variables can be declared using <span className="bg-gray-700 px-2 py-1 rounded">bhai ye hai</span>.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-yellow-400">bhai ye hai a = <span className="text-red-400">10</span>;</p>
                        <p className="text-yellow-400">bhai ye hai b = <span className="text-blue-400">"two"</span>;</p>
                        <p className="text-yellow-400">bhai ye hai c = <span className="text-red-400">15</span>;</p>
                        <p className="text-white">a = a + <span className="text-red-400">1</span>;</p>
                        <p className="text-white">b = <span className="text-red-400">21</span>;</p>
                        <p className="text-white">c *= <span className="text-red-400">2</span>;</p>
                        <p className="text-red-400">bye bhai</p>
                    </div>
                </div>

                {/* Types Section */}
                <div className="border-t border-white my-6 mb-10">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">Types  🎯</h2>
                    <p className="mb-4 text-lg">
                        Numbers and strings are like other languages. Null values can be denoted using nalla. sahi and galat are the boolean values.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-gray-500">hi bhai</p>
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-gray-400">// Write code here</p>
                        <p className="text-red-400">bye bhai</p>
                        <p className="text-gray-500">This too</p>
                    </div>
                </div>

                {/* Built-ins Section */}
                <div className="border-t border-white my-6 mb-10">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">Built-ins 🛠️</h2>
                    <p className="mb-4 text-lg">
                        Use bol bhai to print anything to console.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-gray-500">hi bhai</p>
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-gray-400">// Write code here</p>
                        <p className="text-red-400">bye bhai</p>
                        <p className="text-gray-500">This too</p>
                    </div>
                </div>

                {/* Conditionals Section */}
                <div className="border-t border-white my-6">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">Conditionals ⚓</h2>
                    <p className="mb-4 text-lg">
                        Bhailang supports if-else-if ladder construct , agar bhai block will execute if condition is sahi, otherwise one of the subsequently added nahi to bhai blocks will execute if their respective condition is sahi, and the warna bhai block will eventually execute if all of the above conditions are galat.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-yellow-400">bhai ye hai a = <span className="text-red-400">10</span>;</p>
                        <p className="text-yellow-400">bhai ye hai b = <span className="text-blue-400">"two"</span>;</p>
                        <p className="text-yellow-400">bhai ye hai c = <span className="text-red-400">15</span>;</p>
                        <p className="text-white">a = a + <span className="text-red-400">1</span>;</p>
                        <p className="text-white">b = <span className="text-red-400">21</span>;</p>
                        <p className="text-white">c *= <span className="text-red-400">2</span>;</p>
                        <p className="text-red-400">bye bhai</p>
                    </div>
                </div>

                {/* Loops Section */}
                <div className="border-t border-white my-6">
                    <h2 className="text-2xl font-semibold mb-2 mt-6">Loops 🎢</h2>
                    <p className="mb-4 text-lg">
                        Statements inside jab tak bhai blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes galat, statement within the loop stops executing and control passes to the statement following the loop. Use bas kar bhai to break the loop and agla dekh bhai to continue within loop.
                    </p>
                    <div className="bg-[#063C4C] p-4 rounded-md text-md font-mono">
                        <p className="text-green-400">hi bhai</p>
                        <p className="text-yellow-400">bhai ye hai a = <span className="text-red-400">10</span>;</p>
                        <p className="text-yellow-400">bhai ye hai b = <span className="text-blue-400">"two"</span>;</p>
                        <p className="text-yellow-400">bhai ye hai c = <span className="text-red-400">15</span>;</p>
                        <p className="text-white">a = a + <span className="text-red-400">1</span>;</p>
                        <p className="text-white">b = <span className="text-red-400">21</span>;</p>
                        <p className="text-white">c *= <span className="text-red-400">2</span>;</p>
                        <p className="text-red-400">bye bhai</p>
                    </div>
                </div>

            </div>
            <div className="mt-20 flex justify-center">
                © 2025 Jayesh Vegda, Jay Dhandhukiya
            </div>
        </div>
    );
};

export default Documentation;
