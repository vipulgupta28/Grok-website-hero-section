import { useEffect, useState } from "react";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [query, setQuery] = useState("");
  const CIRCLE_SIZE = 200;
 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (query.trim() !== "") {
      window.open(`https://grok.com/?q=${encodeURIComponent(query)}`, "_blank");
    }
  };


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-between items-center px-4 sm:px-8 py-4 fixed top-0 z-10 bg-transparent"
      >
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button
          onClick={() => window.open("https://x.ai/", "_blank")} 
          className="hover:cursor-pointer "><span className="text-white text-lg sm:text-xl font-bold">xAI</span></button>
          <div className="hidden sm:flex space-x-15">
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">GROK</a>
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">API</a>
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">COMPANY</a>
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">COLOSSUS</a>
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">CAREERS</a>
            <a href="https://x.ai/" className="text-gray-400 hover:text-white transition text-sm sm:text-base">NEWS</a>
          </div>
        </div>
        <button 
        onClick={() => window.open("https://x.ai/", "_blank")} 
        className="border hover:cursor-pointer border-gray-400 text-gray-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-black hover:text-white transition duration-400 text-sm sm:text-base">
        TRY GROK
        </button>

      </motion.nav>

      <div
        className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center pt-20 lg:pt-0 px-4 sm:px-8 gap-30 relative overflow-hidden"
        style={{ background: "radial-gradient(circle at center, #000000, #1a1a1a)" }}
      >
       
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 pt-5 flex justify-center lg:justify-end"
        >
          <h1
            className="text-[clamp(150px,40vw,400px)] leading-[clamp(150px,40vw,400px)] font-bold text-transparent"
            style={{
              WebkitTextStroke: isHovering ? "1px gray" : "1px gray",
              backgroundImage: isHovering
                ? `radial-gradient(circle ${CIRCLE_SIZE}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.5) 0%, transparent 100%)`
                : "none",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              position: "relative",
              zIndex: 1,
              fontFamily: "Roboto, Montserrat, sans-serif",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>G</span>
            <span>R</span>
            <br />
            <span>O</span>
            <span>K</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0 lg:pl-12"
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
            AI for all Humanity
          </h1>

          <div className="relative w-full max-w-md">
  <input
    className="bg-black p-3 sm:p-4 w-full border border-white rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 pr-12"
    placeholder="Ask GROK Anything!"
    value={query}
    onChange={handleInputChange}
  />
  <button
    onClick={handleSubmit}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center bg-white text-black p-2 rounded-full hover:cursor-pointer hover:bg-gray-300 transition h-8 w-8 sm:h-10 sm:w-10"
  >
    <ArrowRight />
  </button>
</div>



          <p className="text-white text-sm sm:text-base lg:text-lg mt-6 max-w-md">
            We are thrilled to unveil Grok 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="border hover:cursor-pointer border-gray-400 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-black duration-400 hover:text-white transition">
              BUILD WITH GROK
            </button>
            <button className="border border-gray-400 hover:cursor-pointer text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-black hover:text-white duration-400 transition">
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default App;
