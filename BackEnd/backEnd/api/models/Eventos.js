/**
 * Eventos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_evento',
  attributes: {
    nombre:{
      type: 'String',
      required: true,
      unique: true,
      regex: /[a-zA-Z\s]+/
    },
    fecha:{
      type: 'String',
      required: true,
      custom: function (value) {
        var fecha = new Date(value);
        var now = new Date();
        if(!Date.parse(value))
          return false;
        if(fecha>now)
          return true;
        else
          return false;
      }
    },
    latitud: {
      type: 'number',
      columnType: 'float'
    },
    longitud:{
      type: 'number',
      columnType: 'float'
    },
    eventoMateria:{
      collection: 'EventoPorMateria',
      via: 'idEvento'
    },
    facturaCabecera:{
      collection: 'FacturaCabecera',
      via: 'idEvento'
    },
  },
};

