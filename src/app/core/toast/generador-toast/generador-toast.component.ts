import { Injectable, OnInit, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeneradorToastComponent{

  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
      this.toasts.push({ textOrTpl, ...options });
    }

    remove(toast) {
      this.toasts = this.toasts.filter(t => t !== toast);
    }

  correcto(mensaje: string) {
    console.log("fuck")
    this.show(mensaje, { classname: 'bg-success text-light', delay: 10000 });
  }
}
