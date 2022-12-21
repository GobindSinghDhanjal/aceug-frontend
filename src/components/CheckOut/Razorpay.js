import axios from "axios";
import * as React from "react";
import { baseURL } from "../../shared/baseUrl";

function Razorpay(course) {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(baseURL + "payment/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const notes = {
      studentId: localStorage.getItem("token"),
      courseId: course.courseId,
      testId: course.testId,
    };

    const options = {
      key: "rzp_test_18Afta030OaQku", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      // callback_url: baseURL +" payment/razorpay/callback",
      // redirect:true,
      name: "Soumya Corp.",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function(response) {
        const data = {
          notes: notes,
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(baseURL + "payment/success", data, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <button
      className="btn btn-primary btn-hover-secondary"
      onClick={displayRazorpay}
    >
      Place Order
    </button>
  );
}

export default Razorpay;
