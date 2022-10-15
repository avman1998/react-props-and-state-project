import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "../cssFiles/card.css";
function Card(props) {
  const [status, setStatus] = useState(false);
  return (
    <div className="card-desgin m-[5px] cursor-pointer flex flex-col justify-center items-center">
      <img src={props.img} alt="system-Image" width="400px" height="400px" />
      <h1 class="text-center">{props.name}</h1>
      <p class="text-center">{props.price}</p>
      {status ? (
        <p class="text-center bg-black text-white p-[5px] rounded-lg w-[100%] my-[5px]">
          Booked
        </p>
      ) : (
        <p class="text-center"></p>
      )}
      <button
        onClick={() => setStatus((x) => !x)}
        class="bg-black text-white rounded-lg p-[5px] w-[100%]"
      >
        {status ? <p>Remove from card</p> : <p>Added to cart</p>}
      </button>
    </div>
  );
}
export default Card;
