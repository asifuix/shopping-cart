function updateProductNumber(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncresing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // Update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const watchTotal = getInputValue('watch') * 199;
    const airpodTotal = getInputValue('airpod') * 12;
    const phoneTotal = getInputValue('phone') * 999;
    const subTotal = watchTotal + airpodTotal + phoneTotal;
    const tax = parseFloat(subTotal / 15).toFixed(2);
    const total = parseFloat(subTotal) + parseFloat(tax);
    
    document.getElementById('subtotal-amount').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total
}


// Increase and decrese watch number
document.getElementById('watch-plus').addEventListener('click', function(){
    updateProductNumber('watch',199, true);
});
document.getElementById('watch-minus').addEventListener('click', function(){
    updateProductNumber('watch',199, false);
})
// Increase and decrese airpod number
document.getElementById('airpod-plus').addEventListener('click', function(){
    updateProductNumber('airpod',12, true);
});
document.getElementById('airpod-minus').addEventListener('click', function(){
    updateProductNumber('airpod',12, false);
})
// Increase and decrese phone number
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',999, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',999, false);
})