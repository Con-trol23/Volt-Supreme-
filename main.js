
//this line enters the billing name on to the supremes website
document.getElementById('order_billing_name').value = "Nelson Pompigne - Mognard"
//this line enters the billing email on to the supremes website
document.getElementById('order_email').value = "sybobotics@gmail.com"
//this line enters the billing phone number on to the supremes website
document.getElementById('order_tel').value = "+351 932 073 140"
//this line clicks the terms and condos and the process payment on to the supremes website
document.getElementsByClassName('iCheck-helper')[1].click();
document.getElementsByClassName ("button checkout")[0].click();
//this line enters the card credit_card_year
document.getElementById('credit_card_year').value = "2025"
//this line enters the customers city
document.getElementById('order_billing_city').value = "Cascais"
//this line enters the customers CVV
document.getElementById('vval').value = "123"
//this line enters the customers Card number
document.getElementById('cnb').value = "123"
//need to Fix
document.getElementById('credit_card_type').value = "Visa"
