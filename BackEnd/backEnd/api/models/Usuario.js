/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'db_usuario',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/
    },
    correo:{
      type: 'string',
      required: true,
      isEmail: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 16,
      custom: function (value) {
        return _.isString(value) && value.length >= 8 && value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/\W/);
      }
    },
    fechaNacimiento:{
      type: 'string',
      required: true,
      columnName: 'fecha_nacimiento',
      custom: value => Date.parse(value)
    },
    rolesUsuario:{
      collection: 'RolesPorUsuario',
      via: 'idUsuario'
    },
    estudiante:{
      collection: 'Estudiante',
      via: 'idUsuario'
    },
    facturaCabecera:{
      collection: 'FacturaCabecera',
      via: 'idUsuario'
    },
  },

};

