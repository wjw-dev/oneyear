import { useEffect, useRef, MutableRefObject } from "react";

export function AnimatedText({html, animation, time} : {html:any,animation: string, time: number})
{
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const t = useRef() as MutableRefObject<HTMLDivElement>;

    async function StopAnimation()
    {
        await wait(time).then(()=>{t.current.style.animation = ''})   
    }


    useEffect(() => {
            t.current.style.animation = animation;
            StopAnimation()
    },[html]);


    return <span ref={t}>{html}</span>
}