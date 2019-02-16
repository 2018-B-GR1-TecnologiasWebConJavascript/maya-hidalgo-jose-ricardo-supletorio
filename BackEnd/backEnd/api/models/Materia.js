/**
 * Materia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_materia',
  attributes: {
    nombre:{
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/
    },
    codigo:{
      type: 'string',
      required: true,
      unique: true
    },
    descripcion:{
      type: 'string',
    },
    activo:{
      type: 'boolean',
      defaultsTo: true
    },
    fechaCreacion:{
      type: 'string',
      custom: function (value) {
        var fecha = new Date(value);
        var now = new Date();
        if(!Date.parse(value))
          return false;
        if(fecha<now)
          return true
        else
          return false;
      },
      columnName: 'fecha_creacion'
    },
    numeroHorasPorSemana:{
      type: 'number',
      columnType: 'int',
      min: 0,
      max: 20,
      defaultsTo: 0,
      columnName: 'horas_semana'
    },
    idEstudiante:{
      model: 'Estudiante'
    },
    eventoMateria:{
      collection: 'EventoPorMateria',
      via: 'idMateria'
    },
},

};

