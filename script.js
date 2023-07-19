// Define the audio source
var audioSource = "https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=lifelike-126735.mp3&g-recaptcha-response=03AAYGu2QCRxOAxZmFCo5dvWXyJ7ORujyMevESPQoqpfBerF761jgjPyCe5bXzPwd565ch1vWvW3ygo-0N5wus97iycVDrKBzC96JU9kEyyeZswcazVG768DORP-8-Yd6ajuydRefqymvBw-v0oQEbwSCw21jdUe0upZSTAIeJ-zFWhcjTxToTQfBfRSSzd4z-eJv-SqJJ8s8wbKumkm6g4z_aNUmmDkVHoRduilpj_ylE15KiLlTqOzbq9qlLpnfKSVseXWqTJ8EPdTuxM51fvd9jiQUhtTdDjP5JQDxM5fYDeFW7whyaD7DkqB4kOT_flCfd5-ffV5I3CbXdfTUWclL6vzYuh1p271lYnPST8Z9p0W6Z9ELasbAi29_JX5DUH2-1wpI_-KlZPKgEq45eZc8kEfM64NO8wFQOD1nmOmuk3fbNufykw6guV3FKY7AyJsH4y-SuDkv4yGYJ1U1aFkGiH-mDAJWeJIF555GhbzF37eXPhb0PZQ4eNCSlo_F4sNOicYW6lfrhkHtyoM7m9Psrd2Hsfu9JB_DcGGQ7RD2YWm4YWNDwsT0AUrNQPwZ-zypzRQbQsGxyUhdydEU-DKgXHd43-CFBLQ&remote_template=1";

// Get references to the HTML elements
var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var skipButton = document.getElementById("skip-button");

// Set the audio source for the player
audioPlayer.src = audioSource;

// Add event listeners to the buttons
playButton.addEventListener("click", function() {
    audioPlayer.play();
});

pauseButton.addEventListener("click", function() {
    audioPlayer.pause();
});

skipButton.addEventListener("click", function() {
    // You can implement the logic to skip to the next song here
});
