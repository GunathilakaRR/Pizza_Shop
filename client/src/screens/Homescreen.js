import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getAllPizzas} from '../actions/pizzaAction';
// import pizzas from "../pizzasdata";
import Pizza from "../Components/Pizza";


export default function Homescreen() {

  const dispatch = useDispatch();

  const pizzasstate = useSelector(state=>state.getAllPizzasReducer);

  const {pizzas, error, loading} = pizzasstate;

  useEffect(()=>{
    dispatch(getAllPizzas());
  },[]);
  return (
    <div>
      <div className="row ">

        {loading ? (<h1>LOading</h1>): error? (<h1>Something went wrong</h1>) : (
          pizzas?.map((pizza) => {
            return (
              <div className="col-md-4 p-3 ">
                <div className="m-5">
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })

        )}



        
      </div>
    </div>
  )
}
