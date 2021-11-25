import { useBasket } from "../../contexts/BasketContext";

import "../../App.css";
import "./style.css";

export default function Basket() {
  const { basketItems } = useBasket();

  return (
    <>

     <div style={{ backgroundImage: "url(images/img-2.jpg)" }}>
     <div className="basket">
        <div className="container mb-5">
          <div className="row ">
            <div className="col-md-8  mt-4">
              <div className="basketTitle ">
                <h2>Basket</h2> <h4>{basketItems.length} Products</h4>
              </div>
              <hr />

              {basketItems.map((res) => {
                return (
                  <div
                    key={res.id}
                    className="row  rounded-3 mt-3 bg-light p-2"
                  >
                    <div className="col-3">
                      <img
                        src={`${res.image}/${res.id}`}
                        height="160px"
                        width="130"
                        className="rounded-3"
                      ></img>
                    </div>
                    <div className="col-9">
                      <div className="fw-bold">
                        <b>{res.price}TL</b>
                      </div>
                      <div className="mt-1">
                        <b> {res.title} </b>
                      </div>
                      <div className="mt-2 basketDescription">
                        <p>
                          <small>{res.description}</small>
                        </p>
                      </div>
                      <div className="float-end">
                        <button
                          type="button"
                          className=" btn btn-outline-primary btn-sm mr-2"
                        >
                          Add to Favorites
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm ms-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-4  mt-4">
              <div className="ms-1 fw-bold  ">
                <h3>TOTAL</h3>
              </div>
              <hr />
              {basketItems.length > 0 && (
                <div className="bg-light p-3 rounded-3 sticky-top">
                  <div className="subTotal">
                    <b>Sub-Total:</b>
                    <b className="fs-4 text">
                      {basketItems.reduce(
                        (acc, res) => acc + Number(res.price),
                        0
                      )}
                      .00TL
                    </b>
                  </div>
                  <form className="basketForm">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control form-control-sm"
                    />
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      className="form-control form-control-sm"
                    />
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>

                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-sm"
                    />
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>

                    <input
                      id="phone"
                      placeholder="0534 XXX XX XX"
                      type="tel"
                      className="form-control form-control-sm"
                    />
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>

                    <textarea
                      id="address"
                      type="text"
                      className="form-control form-control-sm"
                      rows="3"
                    />

                    <button
                      type="submit"
                      className="btn btn-outline-success btn-sm w-100 mt-3"
                    >
                      CHECKOUT
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
     </div>

    </>
  );
}
