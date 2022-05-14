import React from "react";
const axios = require('axios').default;

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trouserses: [],
            tShirts: []
        }
    }
    componentDidMount() {
    axios.get(`https://61b5b8db0e84b70017331bac.mockapi.io/products`)
        .then(res => {
            var trouserses = res.data.filter(product => product.type === "trousers")
            var tShirts = res.data.filter(product => product.type === "tShirt")
            this.setState({trouserses, tShirts})
        })
        .catch(error => console.log(error));
  }

  render() {
      return (
          <>
              <section className="products">
                  <h1 className="text-center">TROUSERS</h1>
                  <div className="product-list container">
                      <div className="grid">
                          {
                              this.state.trouserses.map(trousers =>
                                  <div className="product" onClick={() => addToCart(trousers.name)}>
                                      <img src={trousers.img} alt="photo" />
                                      <h1 className="text-center">{trousers.name}</h1>
                                      <h4 className="text-center">$ {trousers.newPrice}.00</h4>
                                      <h4 className="old-price"><strike>{trousers.oldPrice == trousers.newPrice || trousers.oldPrice < trousers.newPrice ? "" : `$ ${trousers.oldPrice}.00`}</strike></h4>
                                      <p className="text-center">Add To Cart</p>
                                  </div>
                              )
                          }
                      </div>
                  </div>
              </section>
              <section className="products-shirt">
                  <h1 className="text-center">T-SHIRT</h1>
                  <div className="product-list container">
                      <div className="grid">
                          {
                              this.state.tShirts.map(tShirt =>
                                  <div className="product" onClick={() => addToCart(tShirt.name)}>
                                      <img src={tShirt.img} alt="photo" />
                                      <h1 className="text-center">{tShirt.name}</h1>
                                      <h4 className="text-center">$ {tShirt.newPrice}.00</h4>
                                      <h4 className="old-price"><strike>{tShirt.oldPrice == tShirt.newPrice || tShirt.oldPrice < tShirt.newPrice? "" : `$ ${tShirt.oldPrice}.00`}</strike></h4>
                                      <p className="text-center">Add To Cart</p>
                                  </div>
                              )
                          }
                      </div>
                  </div>
              </section>
          </>
    )
  }
}

const addToCart = (n) => {
    alert(`You have successfully ${n}`);
}


export default Products;