import {Banco} from "./banco";
import {EntidadBase} from "../../../core/models/entidad-base";

export class DatoBancarioNuevo extends EntidadBase{
  banco: number;
  cbu: string;
  alias: string;
}
