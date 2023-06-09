import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-registros',
  templateUrl: './vista-registros.page.html',
  styleUrls: ['./vista-registros.page.scss'],
})
export class VistaRegistrosPage {
  isModalOpen = false;

  /* variables para mostrar y ocultar la contraseña */
  passwordType: string = 'password';
  passwordShown: boolean = false;
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() { }
  ngOnInit() {
  }

  // Método para mostrar y ocultar la contraseña 
  public togglePassword(){
    
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }
}
