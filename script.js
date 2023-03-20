const speakBtn = document.querySelector('#speak-btn');
const textInput = document.querySelector('#text-input');

speakBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    speechSynthesis.speak(utterance);
});