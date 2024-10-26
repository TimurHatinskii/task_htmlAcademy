var temperature = 20;
var isRaining = true;
var minutes = 0;

if (isRaining) {
  minutes = 0;
}

if (!isRaining && temperature >= 10 && temperature < 15) {
  minutes = 30;
} 

if (!isRaining && temperature >= 15 && temperature < 25) {
  minutes = 40;
}

if (!isRaining && temperature >= 25 && temperature <= 35) {
  minutes = 20;
}