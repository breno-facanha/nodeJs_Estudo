import { Router } from "express";

const router = Router();

router.get("/frutas/:id", (req, res) => {
  const frutas = ["Maça", "Uva", "Banana", "Limão"];
  const id = +req.params.id;
  if (id >= 0 && id < frutas.length) {
    res.status(200).send(frutas[id]);
  }else{
      res.sendStatus(204)
  }
});

router.get("/pessoa/:nome/:cor", (req, res) => {
    const novaPessoa = {nome: req.params.nome, corPreferida:req.params.cor}
    res.status(201).send(`${novaPessoa.nome} sua cor favorita é:<strong> ${novaPessoa.corPreferida} </strong>`)
})

export default router