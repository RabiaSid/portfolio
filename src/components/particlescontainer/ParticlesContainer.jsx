"use client"
//===== Imports
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <Particles
                className='w-full h-full absolute translate-z-0'
                id='tsparticles'
                init={init}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                    },
                    background: {
                        color: {
                            value: '',
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 90
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#a65903'
                        },
                        links: {
                            color: '#f5d393',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 150
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 5
                            }
                        }
                    },
                    detectRetina: true
                }}
            />
        </>
    )
}

export default ParticlesContainer
