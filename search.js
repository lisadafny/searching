const buttonYoutube = document.getElementById("buttonYoutube");

buttonYoutube.addEventListener("click", function onClick(event) {
  event.preventDefault();

  document.getElementById("youtubeForm").submit();
  const input = document.getElementById("youtube");
  input.value = "";
});

const buttonGoogle = document.getElementById("buttonGoogle");

buttonGoogle.addEventListener("click", function onClick(event) {
  event.preventDefault();

  document.getElementById("googleForm").submit();
  const input = document.getElementById("google");
  input.value = "";
});

const buttonReddit = document.getElementById("buttonReddit");

buttonReddit.addEventListener("click", function onClick(event) {
  event.preventDefault();

  document.getElementById("redditForm").submit();
  const input = document.getElementById("reddit");
  input.value = "";
});
