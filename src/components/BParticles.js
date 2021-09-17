import React from 'react'
import styled from 'styled-components';


const ParticleStyles = styled.div`

   .canvas{ 
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

`;
const config = {
    particles: {
        number: {
            value: 6,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#950740"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 0,
                color: "#000"
            },
            polygon: {
                nb_sides: 6
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.6549925425547863,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 160,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2
        },
        move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

export default function BParticles() {
    return (
        <ParticleStyles>

        </ParticleStyles>
    )
}
