import React from "react";
import { data } from "./data";
import { Tourts } from "./Tourts";

export const Tour = () => {
  return (
    <section>
      <div className="title">
        <h2>TRAVEL TO KYRGYZSTAN</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((el, id) => {
          return (
            <Tourts
              key={id}
              name={el.name}
              day={el.day}
              info={el.info}
              img={el.img}
              price={el.price}
            />
          );
        })}
      </div>
    </section>
  );
};
