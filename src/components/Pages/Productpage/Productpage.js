import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FourO4 from "../Four04/Four04";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  // console.log(useParams);
  const { productID } = useParams(); // Get productID from URL params

  useEffect(() => {
    // Fetch data from the API
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (x) => x.product_url === productID
        );
        setProducts(singleProduct);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [productID]);

  // console.log(products)

  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {products.map((product) => {
              let id = product.product_id;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let details = product.product_description;

              return (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <br />
                      <br />
                      <br />
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="product-image">
                        <img src={img} alt={title} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <FourO4 />;
  }
};

export default ProductPage;
