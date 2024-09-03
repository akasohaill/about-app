'use client';
import React, { useState } from 'react';
import AboutMe from './NavItems/AboutMe';
import Experiences from './NavItems/Experiences';
import Recommended from './NavItems/Recommended';

function UpperWidget() {
    const [activeSection, setActiveSection] = useState('aboutme');

    return (
        <div className='flex flex-col p-3'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className='w-6 h-6 text-center border-2 rounded-full text-gray-400 border-gray-400'>
                        ?
                    </div>
                    <div className='mt-20'>
                        <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            <rect y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            <rect x="10.6878" y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            <rect y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                            <rect x="10.6878" y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row bg-black rounded-2xl items-center text-white gap-4 p-2 ml-3'
                         style={{
                             width: '100%',
                             height: 'auto',
                             maxWidth: '450px',
                             minHeight: '40px'
                         }}>
                        <button onClick={() => setActiveSection('aboutme')}
                            className={`flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl p-4 text-center rounded-xl h-9 ${activeSection === 'aboutme' ? 'bg-slate-800 shadow-xl' : 'bg-black shadow-lg'}`}
                            style={{
                                flex: '1',
                                minHeight: '40px',
                                fontSize: '0.9rem'
                            }}>
                            About me
                        </button>
                        <button onClick={() => setActiveSection('experiences')}
                            className={`flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl p-4 text-center rounded-xl h-9 ${activeSection === 'experiences' ? 'bg-slate-800 shadow-xl' : 'bg-black shadow-lg'}`}
                            style={{
                                flex: '1',
                                minHeight: '40px',
                                fontSize: '0.9rem'
                            }}>
                            Experiences
                        </button>
                        <button onClick={() => setActiveSection('recommended')}
                            className={`flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl p-4 text-center rounded-xl h-9 ${activeSection === 'recommended' ? 'bg-slate-800 shadow-xl' : 'bg-black shadow-lg'}`}
                            style={{
                                flex: '1',
                                minHeight: '40px',
                                fontSize: '0.9rem'
                            }}>
                            Recommended
                        </button>
                    </div>
                    <div className='mt-5 ml-2'>
                        {activeSection === 'aboutme' && <AboutMe />}
                        {activeSection === 'experiences' && <Experiences />}
                        {activeSection === 'recommended' && <Recommended />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpperWidget;
