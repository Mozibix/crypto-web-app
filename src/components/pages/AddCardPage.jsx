// import React from "react";

// export const AddCardPage = () => {
//   return (
//     <>
//       <div className="add_card">
//         <div className="add_card_inner">
//           <div className="new_card">
//             <p>add new card</p>
//             <p className="small_text">enter card information</p>
//           </div>
//           <form action=""></form>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
// import { Link } from "react-router-dom";

export const AddCardPage = () => {
  return (
    <div className="container">
      <h1>Add New Card</h1>
      <form className="form">
        <label for="fname">Name:</label>
        <input type="text" name="name" placeholder="Full Name" />

        <label for="fname">Card Number:</label>
        <input
          type="number"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
        />
        <label for="lname">Expiry Date:</label>
        <input type="date" name="date" placeholder="12/22" />
        <label for="lname">Security Code (CVV):</label>
        <input type="password" name="cvv" placeholder="123" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
