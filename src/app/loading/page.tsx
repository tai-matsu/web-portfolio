"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingScreeen() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    useEffect (() => {
        if(progress >=100) return;
        const root = document.documentElement;
        const interval = setInterval(() => {
            setProgress(progress + 1);
        },parseFloat(getComputedStyle(root).getPropertyValue("--prog_bar-seconds"))*7)
        
        return () => clearInterval(interval)
    })

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-xl">
                <div className="prog_bar " onAnimationEnd={ () => router.replace("./main") }/> 
            </div>
            <div className="mt-[10px]">
                <div className="flex justify-center text-[80px]">{progress}%</div>
            </div>
        </div>
    );
}