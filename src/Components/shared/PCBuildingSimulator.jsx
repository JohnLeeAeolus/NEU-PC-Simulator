import React, { useEffect, useRef } from 'react';
import './PCBuildingSimulator.css';

export default function PCBuildingSimulator() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Load the PC Building Simulator game
        const script = document.createElement('script');
        script.src = '/src/PC Building Simulator/PC Building Simulator.js';
        script.async = true;

        const config = {
            args: [],
            canvasResizePolicy: 2,
            ensureCrossOriginIsolationHeaders: true,
            executable: "PC Building Simulator",
            experimentalVK: false,
            fileSizes: {
                "PC Building Simulator.pck": 5563424,
                "PC Building Simulator.wasm": 52126319
            },
            focusCanvas: true,
            gdextensionLibs: []
        };

        script.onload = () => {
            const engine = new Engine(config);
            engine.startGame().then(() => {
                console.log('PC Building Simulator started successfully');
            }).catch((err) => {
                console.error('Failed to start PC Building Simulator:', err);
            });
        };

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="pc-building-simulator-container" ref={containerRef}>
            <canvas id="canvas"></canvas>
            <div id="status">
                <img id="status-splash" className="show-image--true fullsize--true use-filter--true"
                    src="/src/PC Building Simulator/PC Building Simulator.png" alt="Loading..." />
                <progress id="status-progress"></progress>
                <div id="status-notice"></div>
            </div>
        </div>
    );
} 