const colorForm = document.getElementById("color-form");


let colorsArray = [];

colorForm.addEventListener("submit", getColors);


getColors();

function getColors(e) {
  if (e) e.preventDefault();

  const formData = new FormData(colorForm);
  const color = formData.get("seedColor").substring(1);
  const scheme = formData.get("schemeMode");
  const count = formData.get("colorCount");

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=${count}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      renderColors();
    });
}

function renderColors() {
  const hexColors = colorsArray
    .map((colors) => {
      return `
      <div class="panels__color" style="background-color:${colors.hex.value}">
        <div class="panels__hex">${colors.hex.value}</div>
      </div>`;
    })
    .join("");

  document.getElementById("panels").innerHTML = hexColors;
}