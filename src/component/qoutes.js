import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
function Qoutes(props) {
  const quotes = props.quotes;
  // console.log(quotes);
  return (
    <div>
      <Navbar />
      <h2 className="mt-20 text-center text-3xl">Food Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <div className="m-5 border p-6">
              <h1 className="text-3xl text-center font-bold">{quote.quote}</h1>
              <p className="text-center p-3 font-medium"> - {quote.author ? quote.author :'Annonymous'}</p>
            </div>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
}

export default Qoutes;
