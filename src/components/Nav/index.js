import React from 'react';

function Nav() {
    return (

        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#projects'>
                        Projects
                    </a>
                </li>
                <li className='mx-1'>
                    <a href='#contact'>
                        Contact Me
                    </a>
                </li>
                <li className='mx-1'>
                    <a href='#resume'>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>

    )
}


export default Nav;