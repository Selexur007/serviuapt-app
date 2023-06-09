import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
      this.obtenerAlumnos();

    }, 2000);

  }

  options!: any[];
 

  constructor(private http: HttpClient) {
      this.obtenerAlumnos();
  }

  ngOnInit() {
  }


  obtenerAlumnos(){
    const apiUrl = 'http://localhost:3001/serviuapt/alumnos'; // Reemplaza con la URL de tu servidor Node.js

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        
        this.options = response;
      },
    (error) => {
        console.error('Error al obtener los datos del alumo:', error);
      }
    );
  }
}
