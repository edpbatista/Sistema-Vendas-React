import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.title,
    preco_custo: props.preco_custo,
    preco_venda: props.preco_venda,
    quant_estoque: props.quant_estoque,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditProduto = () => {
    window.location.reload(false);
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      preco_custo: editValues.preco_custo,
      preco_venda: editValues.preco_venda,
      quant_estoque: editValues.quant_estoque,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                preco_custo: editValues.preco_custo,
                preco_venda: editValues.preco_venda,
                quant_estoque: editValues.quant_estoque,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteProduto = () => {
    window.location.reload(false);
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do produto"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="preco_custo"
            label="Preço de custo"
            defaultValue={props.preco_custo}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="preco_venda"
            label="Preço de Venda"
            defaultValue={props.preco_venda}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="quant_estoque"
            label="Quantidade de Estoque"
            defaultValue={props.quant_estoque}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteProduto()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditProduto()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
