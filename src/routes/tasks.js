const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
 response.status(200).json({
   message: 'Handling POST requests para pedidios',
   id: "1",
   id_do_pedido: "1",
   id_clinte: "1",
   nome_recebidor: "Joao",
   cpf_recebidor: "09812308",
   recebidor_comprador: true,
   data: "xx:xx",
   localizacao: "wwww"
   
 });
});

router.get('/', (request, response) => {
    const data = {};
    data.message = `Handling ${request.protocol} ${request.method} para buscar pedidios`;
    
    response
      .status(200)
      .json(data)
});

router.get('/:taskId', (request, response) => {
    const data = {
      taskId: request.params.taskId,
      message: `HTTP GET method by ID`
    }
  
    response
      .status(200)
      .json(data);
  });

module.exports = router;