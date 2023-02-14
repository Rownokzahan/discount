document.getElementById('calculate').addEventListener('click', function () {
    const price = parseFloat(document.getElementById('price').value);
    const coupon = document.getElementById('coupon').value;

    if (isNaN(price) || price < 0 || document.getElementById('coupon').value != "DISC30") {
        if (isNaN(price) || price < 0) {
            document.getElementById('invalid-price').innerText = 'Invalid price';
            document.getElementById('price').classList.add("border", "border-red-600");
        }
        if (document.getElementById('coupon').value != "DISC30") {
            document.getElementById('invalid-coupon').innerText = 'Invalid Coupon Code';
            document.getElementById('coupon').classList.add("border", "border-red-600");
        }
        return;
    }

    document.getElementById('discount-price-area').style.display = 'hidden';
    document.getElementById('discount-price').value = '';
    const discount = ((30 / 100) * price).toFixed(2);
    const discountedPrice = price - discount;
    document.getElementById('discount-price').value = discountedPrice;
    document.getElementById('discount-price-area').style.display = 'grid';
});