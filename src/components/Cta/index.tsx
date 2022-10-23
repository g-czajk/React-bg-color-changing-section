import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export interface Props {
    text: string
    description: string
    backgroundFrom: string
    backgroundTo: string
}

const Pinned: React.FC<Props> = ({ text, description, backgroundFrom, backgroundTo }) => {
    gsap.registerPlugin(ScrollTrigger)

    const sectionEl = useRef<HTMLElement>(null)
    const buttonEl = useRef<HTMLButtonElement>(null)

    // flag to make useEffect run once in React strict mode (dev) - otherwise gsap gets bugged
    let ignore = false

    useEffect(() => {
        if (!ignore) {
            gsap.set(sectionEl.current, {
                backgroundColor: backgroundFrom,
            })

            gsap.to(sectionEl.current, {
                backgroundColor: backgroundTo,
                scrollTrigger: {
                    trigger: sectionEl.current,
                    scrub: true,
                    start: "bottom bottom",
                    end: "top top",
                },
            })

            gsap.to([buttonEl.current], {
                color: backgroundTo,
                scrollTrigger: {
                    trigger: sectionEl.current,
                    scrub: true,
                    start: "bottom bottom",
                    end: "top top",
                },
            })
        }

        return () => {
            ignore = true
        }
    }, [])

    return (
        <section ref={sectionEl} className="container cta">
            <div className="content">
                <h2>{text}</h2>
                <p>{description}</p>
                <button ref={buttonEl}>Learn more</button>
            </div>
        </section>
    )
}

export default Pinned
