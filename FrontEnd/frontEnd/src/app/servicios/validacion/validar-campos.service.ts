import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  validarLetra(texto:string):boolean{
    const regexSoloLetras = /^[a-zA-Z\s]+$/;
    if(regexSoloLetras.test(texto))
      return true;
    else
      return false;
  }
  validarNumero(texto:string):boolean{
    const regexSoloNumeros = /^[0-9]+$/;
    if(regexSoloNumeros.test(texto))
      return true;
    else
      return false;
  }
  validarEmail(texto:string):boolean{
    const regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexCorreo.test(texto))
      return true;
    else
      return false;
  }

  validarLetraMinuscula(texto:string){
    const regez= /[a-z]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  validarLetraMayuscula(texto:string){
    const regez= /[A-Z]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  validarnumeros(texto:string){
    const regez= /[0-9]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }
  validarCaracteresEspeciales(texto:string){
    const regez= /\W/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  validarFechaMayor(texto:string):boolean{
    var fecha = new Date(texto);
    var Now = new Date();
    if(Now<fecha)
      return true
    else
      return false;
  }

  validarFechaMenor(texto:string):boolean{
    var fecha = new Date(texto);
    var Now = new Date();
    if(Now>fecha)
      return true
    else
      return false;
  }
}
