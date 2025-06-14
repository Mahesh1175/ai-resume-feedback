import { GoPerson } from "react-icons/go";
import Tippy from '@tippyjs/react'; 
import 'tippy.js/dist/tippy.css';   
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
//  const [user, setUser] = useState(null);
const { setUser } = useContext(AuthContext);
const { user } = useContext(AuthContext);

  useEffect(() => {
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []); 

  return (
    <header className="bg-[#2a2a2a] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
        AI Resume Feedback <span className="animate-pulse">✨</span>
      </h1>

      {user?.username ? (
        <Tippy content={`Logged in as ${user.username}`} placement="bottom">
          <div className="flex items-center gap-2 px-4 py-2  hover:bg-[#444] transition cursor-pointer">
            <GoPerson  className="text-2xl text-yellow-400" />
            <span className=" sm:block text-sm font-medium capitalize text-white">
              {user.username} !
            </span>
          </div>
        </Tippy>
      ) : (
        
        <a href="/signin" className="hover:text-yellow-400 text-sm sm:text-base font-medium">
          Sign In
        </a>
      )}
    </header>
  );
}
