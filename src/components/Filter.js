import React, { useState } from "react";
import {} from "react-bootstrap";
import { Container, Row, Button  } from "react-bootstrap";

function Filter() {
  const [isFilter, setIsFilter] = useState(false);
  const [collectionValue, setCollectionValue] = useState("All");
  const [price, setPrice] = useState(100);


  return (
    <>
      <Container>
        <Row style={{ borderBottomStyle: "solid" }}>
          <h3>Filter by</h3>
        </Row>
        <Row style={{ borderBottomStyle: "solid" }} className="padding-topAnddown">
        <h5>Collection</h5>
         <select value = {collectionValue} onChange={function(e){
             setCollectionValue(e.target.value);
             setIsFilter(true);
         }}>
          <option value="All">All</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy & Eggs</option>
          <option value="bread">Bread & Grains</option>
          <option value="goods">Household Goods</option>
   
        </select>
   
        </Row>
        <Row style={{ borderBottomStyle: "solid" } } className="padding-topAnddown"
        
        >
        <h5> Price </h5>
       <input type="range" min="1" max="100" value={price} onChange={function(e){
           setPrice(e.target.value);
           setIsFilter(true);
       }}/>
       <p>${price}</p>
        </Row>
        <Row className="padding-topAnddown">
   
   {isFilter ? (     <Button onClick={function(){
            setIsFilter(false);
            setCollectionValue("All");
            setPrice(100)
        }}>Clear filters </Button>) : ""}
        
        </Row>
      </Container>
    </>
  );
}

export default Filter;
