import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

export default function Sidebar() {
    const [isCollapsed, setCollaspsed] = useState(false)
    return (
        <aside className={`h-screen pt-2 bg-slate-900 text-[#f6f5f4] flex flex-col ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-250`}>
            <div className="flex text-center items-center justify-between h-10 p-4">
                {
                    !isCollapsed && (
                        <h1 className="mt-3 mb-4 font-extrabold font-mono text-2xl pr-4">
                        PrioritizeQ
                        </h1>
                    )
                }
                <button
                    onClick={() => setCollaspsed(!isCollapsed)}
                    >
                        {isCollapsed ? <GiHamburgerMenu size={26} /> : <FaRegWindowClose size={26} /> }
                </button>
            </div>
            
        </aside>

    );
}