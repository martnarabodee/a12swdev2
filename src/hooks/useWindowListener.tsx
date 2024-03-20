import { useEffect } from "react";

export function useWindowListener(ref: React.RefObject<HTMLElement>, eventType:string, listener:EventListener) {
    useEffect(() => {
        let element = ref.current;

        if (element && process.env.NODE_ENV != "test") {
            element.addEventListener(eventType, listener);

            return () => {
                element.removeEventListener(eventType, listener);
            }
        }
        else {
            window.addEventListener(eventType, listener);

            return () => {
                window.removeEventListener(eventType, listener);
            }
        }
    }, []); 
}