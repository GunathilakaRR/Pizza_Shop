import React from "react";
import pizzas from "../pizzasdata";
import Pizza from "../Components/Pizza";

export default function Homescreen() {
  return (
    <div>
      <div className="row ">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 p-3 ">
              <div className="m-5">
                <Pizza pizza={pizza} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
