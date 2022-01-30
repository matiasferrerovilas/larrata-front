import {EntidadBase} from "../../../core/models/entidad-base";
import {Banco} from "../../perfil/models/banco";

export class DatoBancario extends EntidadBase{
  banco: Banco;
  cbu: string;
  alias: string;
}
