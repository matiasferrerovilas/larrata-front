import {EntidadBase} from '../../../../core/models/entidad-base';

export class Email extends EntidadBase{
  contenido: string;
  email: string;
  asunto: number;
}
