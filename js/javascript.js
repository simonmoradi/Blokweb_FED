// dit is de code die de audio afspeelt en pauzeert

// hiermee selecteer je in je html document de play and stop button, omdat hier een id op staat kan hij hem selecteren
var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');

// hiermee maak je een variable aan playsound, met daarin een functie om het vervolgens af te kunnen spelen
var playSound = function() {
	audio.play();
};

// hiermee zeg je wanneer je klikt op de button dat hij het geluid moet afspelen, en weer stoppen
playBtn.addEventListener('click', playSound);
stopBtn.addEventListener('click', function(){audio.pause()});