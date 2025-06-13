import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
     const handleScroll =() => {
        const isScrolled =window.scrollY >10;
        setScrolled(true);
     }

     window.addEventListener('scroll',handleScroll);
     return() => window.removeEventListener('scroll' , handleScroll);
    },[])

  return (
    <header className={`navbar ${scrolled ?'scrolled':'not-scrolled'}`}>
     <div className="inner">
       <a className='logo' href='#hero' >
        Yokesh
        </a>

        <nav className='desktop'>
         <ul>
            {navLinks.map (({link, name}) => (
                <li key={name} className='group'>
                    <a a href={link} >
                    <span>{name}</span>
                    <span className='underline'></span>
                    </a>
                </li>
            ))}
         </ul>
        </nav>

        <a href='https://drive.google.com/file/d/1lJMOat2v62O_xHH2Tk4B7kdhgastq2hJ/view?usp=sharing' className='contact-btn group' target='blank'>
            <div className='inner'>
                <span>Resume</span>
                </div>
        </a>
     </div>
    </header>
  )
}

export default NavBar

