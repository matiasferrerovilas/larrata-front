import {EntidadBase} from '../../../core/models/entidad-base';
import {Rol} from "./rol";

export class ClienteLogeado extends EntidadBase{
  email:string;
  rol: Rol[];
}
