import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { Provider } from "react-redux";
// import { loadStripe } from "@stripe/stripe-js";
import { store } from "./redux/store.ts";
import "@smastrom/react-rating/style.css";
// import { Elements } from "@stripe/react-stripe-js";

// const stripe = await loadStripe(
//   "pk_test_51NrBpjKfBQVbvexET1jq1NRfsjyOJT0ImLEaGM0W3L8vUK9m60CKoDjLtYBYMPBynallH7KggbGiLl6K9g273HAz00hQ1v7aNl"
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Elements stripe={stripe}> */}
      <RouterProvider router={router} />
      {/* </Elements> */}
    </Provider>
  </React.StrictMode>
);
