import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  soldProduct,
  updateBookedProductSoldStatus,
  updateSoldStatus,
  updateWishlistProductSoldStatus,
} from "../../Auth/product";
import { AuthContext } from "../../Context/UserContext";

const CheckoutForm = ({ product, bookedProductId }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const {
    price,
    productName,
    sellerEmail,
    sellerName,
    sellerPhone,
    _id,
    productId,
  } = product;

  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setProcessing(false);

      const paymentInfo = {
        productId: _id,
        productNo: productId,
        customerName: user?.displayName,
        customerEmail: user?.email,
        sellerName,
        sellerEmail,
        sellerPhone,
        productName,
        price,
        transactionId,
      };
      soldProduct(paymentInfo)
        .then((data) => {
          if (data.acknowledged) {
            updateSoldStatus(_id)
              .then((data) => {
                if (data.acknowledged) {
                  setTransactionId();
                  updateBookedProductSoldStatus(bookedProductId)
                    .then((data) => {
                      updateWishlistProductSoldStatus(bookedProductId)
                        .then((data) => console.log(data))
                        .catch((err) => toast.error(err.message));
                    })
                    .catch((err) => toast.error(err.message));
                  setSuccess(`your payment completed`);
                  navigate("/dashboard/my-orders");
                }
              })
              .catch((err) => toast.error(err.message));
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !elements || processing}
          className="btn btn-small btn-primary rounded-sm my-3 w-full text-white text-2xl"
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <p className="text-green-500 ">
          {success} {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
