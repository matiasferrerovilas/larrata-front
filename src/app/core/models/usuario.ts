import {EntidadBase} from './entidad-base';

export class Usuario extends EntidadBase{

  token: string = "";
  name: string = "";
  surname: string = "";
  twoFaEnabled: boolean = false;
}
