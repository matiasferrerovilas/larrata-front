import { DatoBancario } from './datoBancatio';
import {EntidadBase} from "../../../core/models/entidad-base";
import {Telefono} from "./telefono";

export class Miembro extends EntidadBase{
  nombre: string ;
  apellido: string ;
  email: string ;
  fechaNacimiento: string ;
  rol: string ;
  datosBancario : DatoBancario[];
  telefono : Telefono;
  src: string;
}
