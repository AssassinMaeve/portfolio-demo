"use client";
import { useEffect, useState } from "react";

export default function CustomCursor(){
    const[position, setPosition] = useState({x:0, y:0});

    useEffect(()=>{
        const mouseMove = (e) =>{
            setPosition({x: e.clientX, y: e.clientY});
        };
        window.addEventListener("mousemove", mouseMove);
        return () =>  window.removeEventListener("mousemove", updatePosition);

        
    },[]);

    return(
        <div 
        className=" fixed top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none mix-blend-difference transition-transform duration-150 ease-out"
        style={{
            transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
        >

        </div>
    );
}