'use client'
import { useRef, useEffect, use, useState } from "react"

export default function VideoPlayer({vdoSrc, isPlaying}:{vdoSrc:string, isPlaying:boolean}) {//default
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isPlaying) {
            // alert('Playing');
            videoRef.current?.play()
        }
        else {
            // alert('Paused');
            videoRef.current?.pause()
        }
    }, [isPlaying]);

    return (
        <div>
            <video src={vdoSrc} ref={videoRef} controls loop muted/>
        </div>
    )
}