"use client"
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"; 
import { useRef } from "react";

export default function PromoteCard() {//default

    const [playing, setPlaying] = useState(true);
    const cardRef = useRef(null);

    useWindowListener(cardRef, "contextmenu", (e) => {
        e.preventDefault();
    });

    return (
        <div ref={cardRef} className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <div className="w-[40%]"><VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}/></div>
            <div className="flex flex-col m-5 justify-between">
                <div>Get your vaccine today</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                text-white shadow-sm" name="Book Vaccine"
                onClick={()=>{ setPlaying(!playing) }}>{ playing? 'Pause':'Play'}</button>   
            </div>        
        </div>
    )
}