import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

/**
 * COMPONENTE DE TARJETA DE AUTO
 */
//import HorizontalCard from "./HoriCardAuto";

const PaginationList = (props) => {
  const perslice = 3;

  const noslices = Math.ceil(props.marcas.length / perslice);

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(perslice);

  const MinMax = (key) => {
    if (key === 1) {
      setMinimo(0);
      setMaximo(perslice);
    } else {
      if (key * perslice > props.marcas.length) {
        setMaximo(props.marcas.length);
      } else {
        setMaximo(key * perslice);
      }
      setMinimo((key - 1) * perslice);
    }
  };

  const PaginaSelected = (key) => {
    MinMax(key);
  };

  let items = [];
  for (let number = 1; number <= noslices; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => {
          PaginaSelected(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {props.marcas.slice(minimo, maximo).map(function (item, i) {
        return (
          <h3>{item.marca}</h3>
        );
      })}
      <Pagination size="lg" className="justify-content-end px-5">
        {items}
      </Pagination>
    </>
  );
};

export default PaginationList;
