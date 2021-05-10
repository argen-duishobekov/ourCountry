import React, { useState } from "react";
import { Card } from "antd";

export const Tourts = (el) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="main">
      <Card
        className="container"
        hoverable
        style={{
          width: 600,
          margin: 10,
          border: "2px solid green ",
          marginLeft: 200,
          marginRight: "auto",
          
        }}
      >
        <img className="pic" src={el.img} />
        <h3 style={{ color: "green" }}>{el.name}</h3>
        <div className="day">
          <p className="d">{el.day}</p>

          <i className="price">{el.price}</i>
        </div>

        <p>
          {readMore ? el.info : `${el.info.substring(0, 200)}...`}
          <a onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "show less" : "  read more"}
          </a>
        </p>
      </Card>
    </div>
  );
};
