//your JS code here. If required.
// List of sound names (without extensions)
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5"];

// Reference to the buttons container
const buttonsContainer = document.getElementById("buttons");

// Array to store audio elements
let audioElements = {};

// Function to create buttons
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = sound;
    button.addEventListener("click", () => playSound(sound));
    buttonsContainer.appendChild(button);

    // Create and store the audio object
    const audio = new Audio(`sounds/${sound}.mp3`);
    audioElements[sound] = audio;
});

// Stop Button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";
stopButton.addEventListener("click", stopAllSounds);
buttonsContainer.appendChild(stopButton);

// Function to play sound
function playSound(sound) {
    stopAllSounds(); // Stop any currently playing sound
    audioElements[sound].play();
}

// Function to stop all sounds
function stopAllSounds() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset to start
    });
}
