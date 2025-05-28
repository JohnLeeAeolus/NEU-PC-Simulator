import React, { useEffect, useRef } from 'react';
import './PCBuildingSimulator.css';

export default function PCBuildingSimulator() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Check Windows version compatibility
        const checkWindowsCompatibility = () => {
            const userAgent = navigator.userAgent;
            const isWindows = userAgent.indexOf('Windows') !== -1;

            if (isWindows) {
                // Check for minimum required Windows version (Windows 7 and above)
                const windowsVersion = userAgent.match(/Windows NT (\d+\.\d+)/);
                if (windowsVersion && parseFloat(windowsVersion[1]) < 6.1) {
                    console.warn('This application requires Windows 7 or later');
                    return false;
                }
            }
            return true;
        };

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
            gdextensionLibs: [],
            // Add compatibility settings
            compatibility: {
                forceSoftwareRendering: false, // Use hardware acceleration when available
                fallbackToSoftwareRendering: true, // Fallback to software rendering if needed
                useLegacyAudio: false, // Use modern audio API
                useLegacyInput: false, // Use modern input handling
            }
        };

        if (checkWindowsCompatibility()) {
            script.onload = () => {
                const engine = new Engine(config);
                engine.startGame().then(() => {
                    console.log('PC Building Simulator started successfully');
                }).catch((err) => {
                    console.error('Failed to start PC Building Simulator:', err);
                    // Show user-friendly error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message';
                    errorDiv.textContent = 'Unable to start the simulator. Please ensure your system meets the minimum requirements.';
                    containerRef.current.appendChild(errorDiv);
                });
            };

            containerRef.current.appendChild(script);
        } else {
            // Show compatibility warning
            const warningDiv = document.createElement('div');
            warningDiv.className = 'compatibility-warning';
            warningDiv.textContent = 'This application requires Windows 7 or later. Please update your operating system.';
            containerRef.current.appendChild(warningDiv);
        }

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