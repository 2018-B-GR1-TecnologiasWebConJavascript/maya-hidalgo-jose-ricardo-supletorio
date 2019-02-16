/**
 * Estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'db_estudiante',
  attributes: {
    nombres:{
      type: 'string',
      required: true,
      regex: /[a-zA-Z\s]+/
  },
    apellidos:{
      type: 'string',
      required: true,
      regex: /[a-zA-Z\s]+/
    },
    fechaNacimiento:{
      type: 'string',
      required: true,
      custom: function (value) {
        var fecha = new Date(value);
        var now = new Date();
        if(!Date.parse(value))
          return false;
        if(fecha<now)
          return true;
        else
          return false;
      },
      columnName: 'fecha_nacimiento'
    },
    semestreActual:{
      type: 'number',
      columnType: 'int',
      min: 0,
      max: 10,
      columnName: 'semestre_actual',
      defaultsTo: 0
    },
    graduado:{
      type: 'boolean',
      defaultsTo: false
    },
    idUsuario: {
      model: 'Usuario'
    },
    materia:{
      collection: 'Materia',
      via: 'idEstudiante'
    },
},

};

