import logo from './logo.svg';
import './App.css';
import './asset/css/header.css';
import './asset/css/footer.css';
import './asset/css/content.css';
import { render } from '@testing-library/react';
import React from "react";
import Header from './fassker/header';
import Banner from './fassker/banner';
import Footer from './fassker/footer';
import Products from './fassker/content';
const axios = require('axios').default;

// function Product(props) {
//   return (
//     <div>
//       <img src="https://static.dosi-in.com/images/detailed/42/CDL10_1.jpg" className="product"></img>
//       <h1 className="text-center">{ props.name }</h1>
//       <h4 className="text-center">{props.price} K</h4>
//     </div>
//   );
// }

// function Products() {
//   return (
//     <div className='row'>
//       <Product name="Aó Phông 1" price="50"></Product>
//       <Product name="Aó Phông 2" price="50"></Product>
//       <Product name="Aó Phông 3" price="50"></Product>
//       <Product name="Aó Phông 4" price="50"></Product>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     var productList = "https://61b5b8db0e84b70017331bac.mockapi.io/Items";
//     var products = axios(productList);
//     super(props);
//     //Chỉ định một state
//     this.state = { 
//       fields: {
//         img: "https://static.dosi-in.com/images/detailed/42/CDL10_1.jpg",
//         name:"Aó Phông 1",
//         price:50
//       }
//     };
//   }
//   render() {
//     return (
//       <div>
//         <img src={this.state.fields.img} className="product"></img>
//         <h1 className="text-center">{this.state.fields.name }</h1>
//         <h4 className="text-center">{this.state.fields.price} K</h4>
//      </div>
//     );
//   }
// }

// class product extends React.Component {
//   state = {
//     products: []
//   }

//   componentDidMount() {
//     axios.get(`https://61b5b8db0e84b70017331bac.mockapi.io/Items`)
//       .then(res => {
//         const products = res.data;
//         this.setState({ products });
//       })
//       .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <div className="grid">{
        
//         this.state.products.map(product =>
//           <div>
//             <img src={product.image} className="product"></img>
//             <h1 className="text-center">${product.nameItem}</h1>
//             <h4 className="text-center">${product.price} K</h4>
//           </div>
//           )
//         }
//       </div>
//     )
//   }
// }

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </>
  )
}

export default App;

// export default Products;
