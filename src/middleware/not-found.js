const notFound = (request, response, next) => {
    const HttpStatusNotFound = 404;
    const errorInfo = {
      status: HttpStatusNotFound,
      message: `A rota para ${request.method} ${request.path} não foi encontrada!`
    };
  
    response
      .status(HttpStatusNotFound)
      .json(errorInfo);
  
    next && next();
  }
  
  module.exports = notFound; 