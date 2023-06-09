import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';


@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.page.html',
  styleUrls: ['./actualizacion.page.scss'],
})
export class ActualizacionPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  alumnoId!: number;

  numeroCuenta!: number;
  Nombre_alumno: string;
  AP_alumno: string;
  AM_alumno: string;
  carrera!: number;
  semestre!: number;
  Prac_Ser!: number;


  handleRefresh(event: any) {
    setTimeout(() => {
     this.obtenerAlumnos();
      event.target.complete();
    }, 2000);
  }

  options!: any[];


  constructor(private http: HttpClient) {
    this.obtenerAlumnos();

    this.alumnoId;
    this.numeroCuenta;
    this.Nombre_alumno = '';
    this.AP_alumno = '';
    this.AM_alumno = '';
    this.Prac_Ser;
    this.carrera;
    this.semestre;
  }

  ngOnInit() {
   
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  obtenerAlumnos() {
    const apiUrl = 'http://localhost:3001/serviuapt/alumnos'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        console.log(response);
        this.options = response;
      },
      (error) => {
        console.error('Error al obtener los datos del alumo:', error);
      }
    );
  }


  deleteAlumno(id_alumno: number) {
    const apiUrl = `http://localhost:3001/serviuapt/delete-alumno/${id_alumno}`; // Reemplaza el ${id} con el identificador del alumno a eliminar

    this.http.delete<any>(apiUrl).subscribe(
      () => {
        console.log('Registro eliminado correctamente.');
        this.obtenerAlumnos();
        // Realiza cualquier acción adicional necesaria después de eliminar el registro.
      },
      (error) => {
        console.error('Error al eliminar el registro:', error);
      }
    );
  }


  actualizarAlumno(id_alumno: number) {
    this.alumnoId = id_alumno; 
    
    const apiUrl = `http://localhost:3001/serviuapt/update-alumno/${id_alumno}`;

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        const alumno = response[0]; // Se asume que la respuesta es un array con un solo elemento (el registro del alumno)

        this.Nombre_alumno = alumno.Nombre_alumno;
        this.numeroCuenta = alumno.numeroCuenta;
        this.AP_alumno = alumno.AP_alumno;
        this.AM_alumno = alumno.AM_alumno;
        this.carrera = alumno.licenciatura;
        this.semestre = alumno.semestre;
        this.Prac_Ser = alumno.Prac_Ser;
      },
      (error) => {
        console.error('Error al obtener los datos del alumno:', error);
      }
    );
  }

  

}
