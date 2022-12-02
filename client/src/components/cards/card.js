import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        quant_estoque={props.quant_estoque}
        preco_custo={props.preco_custo}
        preco_venda={props.preco_venda}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-cartegory">Estoque: {props.quant_estoque}</p>
        <h3 className="card-cost">Preço de custo: R${props.preco_custo}</h3>
        <h3 className="card-cost">Preço de venda: R${props.preco_venda}</h3>
      </div>
    </>
  )
}


