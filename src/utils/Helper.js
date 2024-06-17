export function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


export function transformPercentageToFloat(percentageString) {
    let numberString = percentageString.replace('%', '');

    let floatValue = parseFloat(numberString) / 100;
  
    floatValue = parseFloat(floatValue.toFixed(4));
  
    return floatValue;
}
