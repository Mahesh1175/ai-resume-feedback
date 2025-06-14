import { BsBalloonHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-gray-400 text-sm py-4 ">
       <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base flex justify-center items-center gap-1 flex-wrap">
          © 2025. 
          Built with <BsBalloonHeartFill className="text-yellow-500 inline text-lg" />.
        </p>
      </div>
    </footer>
  );
};

export default Footer;