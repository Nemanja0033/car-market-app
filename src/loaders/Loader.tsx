import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
    const loaderRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (loaderRef.current) {
            gsap.to(loaderRef.current, {
                rotation: 360,
                duration: 1,
                repeat: -1,
                ease: "linear"
            });
        }
    }, []);

    return (
        <div className="flex w-full h-screen justify-center justify-self-center items-center">
            <img className="h-16" ref={loaderRef} src="/loader.png" alt="Loading..." />
        </div>
    );
};

export default Loader;
