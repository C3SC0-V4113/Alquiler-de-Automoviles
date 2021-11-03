import React, { useEffect, useState } from "react";
import {
  Badge,
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  Pagination,
  Modal,
} from "react-bootstrap";
import HorizontalCard from "./HoriCardAuto";

let items = [];
for (let number = 1; number <= 2; number++) {
  items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
}

const PaginationList=(props)=>{
return(
    <>
    {
        /*console.log(autos)*/
        props.autos.map(function (item, i) {
          return <HorizontalCard item={item} i={i} handleShow={props.handleShow} />;
        })
      }
      <Pagination size="lg" className="justify-content-end px-5">
        {items}
      </Pagination>
      </>
)
}

export default PaginationList;