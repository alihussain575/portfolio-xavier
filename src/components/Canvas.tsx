'use client'

import React, { useRef, useEffect } from 'react';
import ParticleNetwork from '../utils/ParticleNetwork';

interface ParticleCanvasProps {
    children?: React.ReactNode;
}

const ParticleCanvas = ({ children }: ParticleCanvasProps) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvasDiv = canvasRef.current;
        const options = {
            particleColor: '#14b8a6d9',
            background:
                'https://images.unsplash.com/photo-1682367726284-d251786251f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            interactive: true,
            speed: 'fast',
            density: 'high',
        };
        const particleCanvas = new ParticleNetwork(canvasDiv as any, options);

        return () => {
            particleCanvas.canvas && particleCanvas?.canvas.remove();
        };
    }, []);

    return (
        <div
            ref={canvasRef}
            className='h-[464px] w-full top-0 absolute overflow-hidden md:h-[650px]'
        >{children}</div>
    );
};

export default ParticleCanvas;