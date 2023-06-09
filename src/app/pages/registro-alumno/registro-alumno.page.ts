import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  //variables para obtener servicio o prácticas
  Prac_Ser!: number;
  options!: any[];

  //variables para obtener las licenciaturas
  carrera!: number;
  optionC!: any[];

  //variables para obtener los semestres
  semestre!: number;
  optionS!: any[];

  //variables para el docente asignado
  id_prof!: number;
  optionp!: any[];

  passwordType: string = 'password';
  passwordShown: boolean = false;


  numeroCuenta!: number;
  Nombre_alumno: string;
  AP_alumno: string;
  AM_alumno: string;
  correo: string;
  password: string;
  status: number;
  rol: number;


  constructor(private http: HttpClient, private toastController: ToastController) {
    this.numeroCuenta;
    this.Nombre_alumno = '';
    this.AP_alumno = '';
    this.AM_alumno = '';
    this.Prac_Ser;
    this.carrera;
    this.semestre;
    this.correo = '';
    this.password = '';

    this.status = 1;
    this.rol = 3;
    this.id_prof;

    this.loadOptions();
    this.loadOptionsCarrer();
    this.loadOptionsSemesters();
    this.loadOptionsTeacher();
  }

  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  registrarUsuario() {
    const url = 'http://localhost:3001/serviuapt/create-alumno';
    const data = {

      numeroCuenta: this.numeroCuenta,
      Nombre_alumno: this.Nombre_alumno,
      AP_alumno: this.AP_alumno,
      AM_alumno: this.AM_alumno,
      licenciatura:this.carrera,
      Prac_Ser: this.Prac_Ser,
      semestre: this.semestre,
      correo: this.correo,
      password: this.password,

      status: this.status,
      rol: this.rol,
      id_prof: this.id_prof,


    };


    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        // Realiza cualquier acción adicional después de registrar al usuario

        // Comprueba si la respuesta contiene un mensaje de éxito
        if (response && response.hasOwnProperty('message')) {
          // Muestra un Toast de éxito al usuario
          this.presentToast('Alumno registrado exitosamente');
        } else {
          // Muestra un Toast de error genérico en caso de que la respuesta no tenga un mensaje de éxito
          this.presentToast('Error al registrar al alumno');
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Muestra un Toast de error al usuario o realiza acciones adicionales en caso de error
        this.presentToast('Error en la solicitud');
      }
    );
  }


  loadOptions() {
    const apiUrl = 'http://localhost:3001/serviuapt/rolSP'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.options = response;
      },
      (error) => {
        console.error('Error al obtener los datos del select:', error);
      }
    );
  }

  loadOptionsCarrer() {
    const apiUrl = 'http://localhost:3001/serviuapt/carreras'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.optionC = response;
      },
      (error) => {
        console.error('Error al obtener los datos del select:', error);
      }
    );

  }

  loadOptionsSemesters() {
    const apiUrl = 'http://localhost:3001/serviuapt/semestres'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.optionS = response;
      },
      (error) => {
        console.error('Error al obtener los datos del select:', error);
      }
    );
  }

  loadOptionsTeacher() {
    const apiUrl = 'http://localhost:3001/serviuapt/docente'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.optionp = response;
        this.presentToast('Error en la solicitud');
      },
      (error) => {
        console.error('Error al obtener los datos del select:', error);
      }
    );
  }

  public togglePassword() {

    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

}
