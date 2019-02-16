/**
 * FacturaDetalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_factura_detalle',
  attributes: {
    catidad:{
      type: 'number',
      columnType: 'int',
      min: 0,
      defaultsTo: 0
    },
    precio:{
      type: 'number',
      min: 0,
      defaultsTo: 0
    },
    total:{
      type: 'number',
      min: 0,
      defaultsTo: 0
    },
    idFacturaCabecera:{
      model: 'FacturaCabecera'
    },
    idEventoPorMateria:{
      model: 'EventoPorMateria'
    }
  },

};

