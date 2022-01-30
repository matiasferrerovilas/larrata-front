import {EntidadBase} from "../../../core/models/entidad-base";
import {Rol} from "../../login/models/rol";
import {RolDto} from "../dtos/rol-dto";

export class Perfil extends EntidadBase{
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  imagen:string;
  roles: RolDto[];
}
