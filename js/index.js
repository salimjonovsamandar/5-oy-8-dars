const button = document.getElementById("button");
const input = document.getElementById("input");
const cerad = document.getElementById("cerad");

const KEY = "96b947a45d33d7dc1c49af3203966408";

function validate() {
  if (!input.value.trim()) {
    alert("SHaxar nomini kiriting");
    return false;
  }
  if (Number(input.value)) {
    alert("Shaxar nomi raqamda bo'lishi mumkin emas");
    return false;
  }
  return true;
}

const getData = async (sity) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const puery = `?q=${sity}&units=metric&appid=${KEY}`;

  const req = await fetch(base + puery);
  const data = await req.json();

  return data;
};

function creatCard(weather) {
  document.querySelector(".nom").innerHTML = weather.name;
  document.querySelector(".grad").innerHTML = weather.main.temp;
 }

function clear() {
  input.value = "";
}

button.addEventListener("click", () => {
  validate();

  getData(input.value).then((data) => {
    creatCard(data);
  });
  clear();
});
