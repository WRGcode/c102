const purchase = [
    { id: '1', name: "t-shirt", price: 1999 },
    { id: '2', name: "shoes", price: 4999 },
]

const total_amount = 10998
const shipping_fee = 1099

var stripe = Stripe("pk_test_51K4A9VLkIJoRlsbFtSdjhKpCvMe3tc9U1Q0QEYmndQwu2HS4b2IbvJQraIT0jjdJe6UTS0pDpbFTcrNLVdJfZ0Vl00QGZ5y07h")

document.querySelector("button").disabled = true;
fetch('/stripe', {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
    },
    body: JSON.stringify({ purchase, total_amount, shipping_fee }),
})
    .then(function (result) {
        return result.json()
    })
    .then(function (data) {
        var elements = stripe.elements()

        var style = {
            base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                fontFamily: "Arial, sans-serif",
                color: "#fa755a",
                iconColor: "#fa755a",
            }
        }

        var card = elements.create("card", { style: style })

        card.mount('#card-element')

        card.on("change", function (event) {
            document.querySelector("button").disabled = event.empty
            document.querySelector("#card-error").textContent = event.error
                ? event.error.message
                : ""
        })

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', (e) => {
            payWithCard(stripe, card, data.clientSecret)
        });
    });

    // call stripe.confrimCardPayment
    // if card needs authentication details with out leaving the page

    const payWithCard = function (stripe, card, clientSercret) {
        console.log("test");
        loading(true)
        stripe.confirmCardPayment(clientSercret, {
            payment_method: {
                card: card
            }
        })
        .then(function (result) {
            if(result.error){
                showError(result.error.message)
            }else{
                orderComplete(result.paymentIntent.id)
            }
        })
    }

    const orderComplete = function (paymentIntentId) {
        console.log("test");
        loading(false)
        document
        .querySelector(".result-message a")
        .setAttribute(
            "href",
            "https://dashboard.stripe.com/test/payments" + paymentIntentId
        )
        document.querySelector(".result-message").classList.remove('hidden')
        document.querySelector("button").disabled = true
    }

    const showError = function (errorMsgText){
        loading(false)
        const errorMsg = document.querySelector('#card-error')
        errorMsg.textContent = errorMsgText
        setTimeout(() =>{
            errorMsg.textContent =""
        }, 4000)
    }

    const loading = function (isLoading) {
        if(isLoading) {
            document.querySelector("button").disabled = true
            document.querySelector("#spinner").classList.remove('hidden')
            document.querySelector("button-text").classList.add("hidden")
        } else {
            document.querySelector("button").disabled = false
            document.querySelector("#spinner").classList.add('hidden')
            document.querySelector("button-text").classList.remove("hidden")
        }

    }