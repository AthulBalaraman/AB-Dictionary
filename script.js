
const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d7d4620a1fmsh9f9818160d2535ep1f56e7jsn82522564fe5a",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };
  const url =
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
    word;
  fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      wordHeading.innerHTML = "Meaning of : " + response.word;
      definition.innerHTML = response.definition
        .replace("2.", "<br>2.")
        .replace("3.", "<br>3.")
        .replace("4.", "<br>4.")
        .replace("5.", "<br>5.")
        .replace("6.", "<br>6.")
        .replace("7.", "<br>7.")
        .replace("8.", "<br>8.")
        .replace("9.", "<br>9.")
        .replace("10.", "<br>10.")
    })
    .catch((err) => console.error("error:" + err));
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchInput.value);
});
