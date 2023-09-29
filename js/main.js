function convertArea(){
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    const coefic = {
        'м²' : 1,
        'дм²' : 100,
        'см²' : 1000
    };

    const convertinMeter = inputValue / coefic[inputUnit];
    const convertedValue = convertinMeter * coefic[outputUnit];
    document.getElementById('output').innerText = convertedValue + ' ' + outputUnit

}









































/*function convertArea() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;;
    const outputUnit = document.getElementById('outputUnit').value;

    const conversionRates = {
        'м²': 1,
        'дм²': 100,
        'см²': 10000
    };
    const valueInMeters = inputValue / conversionRates[inputUnit];
    const convertedValue = valueInMeters * conversionRates[outputUnit];
    document.getElementById('output').innerText = convertedValue + ' ' + outputUnit;
}
*/