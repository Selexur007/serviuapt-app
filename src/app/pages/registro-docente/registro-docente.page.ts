import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {



  passwordType: string = 'password';
  passwordShown: boolean = false;
  
  
  numeroEmpleado!:number
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  carrera: string;
  cargo: string;
  correo: string;
  password: string;
  status: number;
  rol: number;




  constructor(private http: HttpClient,private toastController: ToastController) {

    this.numeroEmpleado;
    this.Nombre = '';
    this.ApellidoPaterno = '';
    this.ApellidoMaterno = '';
    this.carrera = '';
    this.cargo = '';
    this.correo = '';
    this.password = '';
   
    this.status = 1;
    this.rol = 2;
  

   }


  ngOnInit() {

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  registrarUsuario() {
    const url = 'http://localhost:3001/serviuapt/create';
    const data = {

      numeroEmpleado:this.numeroEmpleado,
       Nombre:this.Nombre,
        ApellidoPaterno:this.ApellidoPaterno,
         ApellidoMaterno:this.ApellidoMaterno,
          carrera:this.carrera,
          cargo: this.cargo,
           correo:this.correo,
            password:this.password,
               status: this.status,
               rol: this.rol,

                
    };

    
    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        // Realiza cualquier acción adicional después de registrar al usuario

        // Comprueba si la respuesta contiene un mensaje de éxito
        if (response && response.hasOwnProperty('message')) {
          // Muestra un Toast de éxito al usuario
          this.presentToast('Usuario registrado exitosamente');
        } else {
          // Muestra un Toast de error genérico en caso de que la respuesta no tenga un mensaje de éxito
          this.presentToast('Error al registrar el usuario');
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Muestra un Toast de error al usuario o realiza acciones adicionales en caso de error
        this.presentToast('Error en la solicitud');
      }
    );
  }

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
