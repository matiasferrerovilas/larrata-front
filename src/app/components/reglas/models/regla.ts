import {EntidadBase} from "../../../core/models/entidad-base";
import {TipoRegla} from "./tipo-regla";

export class Regla extends  EntidadBase{
  tipoRegla: TipoRegla;
  contenido: string;
  numero: number;
}
