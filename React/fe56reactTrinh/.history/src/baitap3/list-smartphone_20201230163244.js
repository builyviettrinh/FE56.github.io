import React from "react";

export default function ListSmartphone() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}
