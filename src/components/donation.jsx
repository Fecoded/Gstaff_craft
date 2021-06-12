// import { useState } from "react";
// import { PaystackButton } from "react-paystack";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// import swal from "sweetalert";

const Donation = () => {
  // const [price, setPrice] = useState(0);
  // const [fullname, setFullname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");

  // const amount = price * 100;
  // const publicKey = "pk_test_035666d8add8857fd065305ea4880d7aeb9a48ff";

  // const config = {
  //   email,
  //   price,
  //   amount,
  //   metadata: {
  //     name: fullname,
  //     phone,
  //   },
  //   publicKey,
  // };

  function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "1",
            currency: "USD",
          },
        },
      ],
    });
  }

  // const onSuccess = () => {
  //   swal({
  //     title: "Gstaff Craft",
  //     text: `Thanks you for you support`,
  //     icon: "info",
  //     buttons: true,
  //   });
  // };

  // const componentProps = {
  //   ...config,
  //   text: "Make Naira Donation",
  //   onSuccess: () => onSuccess(),
  //   onClose: () => null,
  // };

  return (
    <div className="galley-mt mb-n20 position-relative z-index-2">
      <div className="container">
        <div
          className="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13"
          style={{
            background: "linear-gradient(90deg, #20AA3E 0%, #03A588 100%)",
          }}
          id="donate"
          data-kt-scroll-offset="{default: 100, lg: 150}"
        >
          <div className="my-2 me-5">
            <div className="fs-1 fs-lg-2qx fw-bolder text-white mb-2">
              Make a one-time gift of $1 Or name your own amount <br />
              <span className="fw-normal fs-2">
                Children empowered with the craft of art as a skill set to
                restoring HOPE.
              </span>
            </div>

            <div className="fs-6 fs-lg-5 text-white fw-bold opacity-75">
              We rely on Donation to keep these children off their camps to a
              healthy home.
            </div>
          </div>

          <div className="rounded border p-10 w-50">
            {/* <form>
              <label class="required fs-5 fw-bold mb-2 text-white">
                Full Name
              </label>
              <input
                type="text"
                class="form-control form-control-solid"
                placeholder="John Doe"
                required
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              <label class="required fs-5 fw-bold my-2 text-white">
                Email Address
              </label>

              <input
                type="email"
                class="form-control form-control-solid"
                placeholder="name@example.com"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label class="required fs-5 fw-bold my-2 text-white">Phone</label>
              <input
                type="phone"
                class="form-control form-control-solid"
                placeholder="+143(564)77865"
                required
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label class="required fs-5 fw-bold my-2 text-white">
                Amount
              </label>

              <input
                type="number"
                class="form-control form-control-solid"
                placeholder="$1"
                required
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

            
            </form>
            <PaystackButton
              className="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 my-5"
              {...componentProps}
            /> */}

            <div className="border-bottom mt-5 mb-10"></div>

            <PayPalScriptProvider
              options={{
                "client-id":
                  "AQ576pJQoE_j6RfgLlvwbtVlH-UrEn8mE1hGx8o32R8Etw9hsNUbIMstOdWRwbhSG70pmhA5ILpyAygD",
                currency: "USD",
                intent: "capture",
              }}
            >
              <PayPalButtons
                createOrder={createOrder}
                style={{
                  color: "blue",
                  shape: "pill",
                  label: "pay",
                  height: 40,
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
