import React from "react";
import "../../App.css";
import Cards from "../../components/Cards";

export default function Products() {
  return (
    <>
      <div style={{ backgroundImage: "url(images/img-3.jpg)" }}>
        <div className="products">
          <Cards />
        </div>
      </div>
    </>
  );
}
