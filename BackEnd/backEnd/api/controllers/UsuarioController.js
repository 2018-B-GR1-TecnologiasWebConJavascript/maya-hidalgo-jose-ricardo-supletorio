/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async (req, res) => {
    const parametros = req.allParams();
    if(!parametros.nombre.match(/^[a-zA-z\s]+$/))
      return res.badRequest({mensaje:'Usuario Invalido, ingrese solo letras'});
    var usuarioLogeado = await Usuario.find({
      nombre: parametros.nombre,
      password: parametros.password,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Error'});
    }
  }
};

