 // Check if device orientation is supported
window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha ? event.alpha.toFixed(1) : 0; // Compass heading
    const beta = event.beta ? event.beta.toFixed(1) : 0;   // Front/back tilt
    const gamma = event.gamma ? event.gamma.toFixed(1) : 0; // Left/right tilt

    const sensorBox = document.getElementById('sensor-data');
    sensorBox.innerHTML = `
        <strong>Sensor Tracking Active:</strong><br>
        Heading (Alpha): ${alpha}°<br>
        Tilt Forward (Beta): ${beta}°<br>
        Tilt Side (Gamma): ${gamma}°
    `;
});

// Fallback message if sensors aren't triggered immediately
setTimeout(() => {
    const sensorBox = document.getElementById('sensor-data');
    if (sensorBox.innerHTML.includes("Waiting")) {
        sensorBox.innerHTML = "Move device or simulate orientation to test sensors.";
    }
}, 3000);