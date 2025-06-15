import React, { useRef } from 'react'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
const sectionRef = useRef(null);
const project1Ref =useRef(null);
const project2Ref =useRef(null);
const project3Ref =useRef(null);


useGSAP (() => {
    const projects =[project1Ref.current ,project2Ref.current , project3Ref.current];

    projects.forEach((card,index) => {
        gsap.fromTo(
            card,
            {
                y:50 ,opactity:0
            },
            {
                y:0,
                opactity:1,
                duration:1,
                delay:0.3 * (index +1) ,
                scrollTrigger: {
                    trigger :card ,
                    start: 'top bottom-=100'
                }
            }
        )
    })

   gsap.fromTo(
    sectionRef.current , 
    {opacity:0 },
    {
     opacity:1 ,
    duration:1.5 }
)
},[]);


  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref} >
                    <div className="image-wrapper">
                        <img src="/images/P1.png" alt="Project1" />
                    </div>
                    <div className="text-content">
                        <h2>Nike Website Clone</h2>
                        <p className="text-white-50 md:text-xl">
                        This project is a responsive e-commerce website inspired by Nike build with Tailwind and React.js
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden" >
                    <div className="project" ref={project2Ref} >
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/P2.png' alt='Project 2' />
                        </div>
                        <h2>Visually stunning animated website</h2>
                    </div>

                    <div className="project" ref={project3Ref} >
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src='/images/P3.png' alt='Project 3' />
                        </div>
                        <h2> Responsive Website with Modern UI/UX</h2>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection