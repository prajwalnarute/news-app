import React from "react";

function Card(props) {
  const data = props.data || []; // Ensure data is always an array

  console.log(data); // Log the data to check if it's null or empty

  return (
    <div className="cardContainer">
      {
        data.map((curItem, index) => {
          // Using if-else to decide if the article should be rendered
          if (curItem.urlToImage) {
            // If there is an image URL, render the article
            return (
              <div className="card" key={index}>
                <img src={curItem.urlToImage} alt="" />
                <div className="cardContent">
                  <a id="title" onClick={() => window.open(curItem.url)}>
                    {curItem.title}
                  </a>
                  <p>{curItem.description}</p>
                  <button onClick={() => window.open(curItem.url)}>Read More</button>
                </div>
              </div>
            );
          } else {
            // If no image URL, don't render the article
            return null;
          }
        })
       }
    </div>
  );
}

export default Card;
