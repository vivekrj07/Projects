const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

const celsiusToOthers = (e) => {
  const c = parseFloat(e.target.value);
  fahrenheit.value = ((c * 9) / 5 + 32).toFixed(2);
  kelvin.value = (c + 273.15).toFixed(2);
};

fahrenheit.addEventListener("input", (e) => {
  const f = parseFloat(e.target.value);
  celsius.value = (((f - 32) * 5) / 9).toFixed(2);
  kelvin.value = (((f - 32) * 5) / 9 + 273.15).toFixed(2);
});

kelvin.addEventListener("input", (e) => {
  const k = parseFloat(e.target.value);
  celsius.value = (k - 273.15).toFixed(2);
  fahrenheit.value = (((k - 273.15) * 9) / 5 + 32).toFixed(2);
});
