import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.page.html',
  styleUrls: ['./horas.page.scss'],
})
export class HorasPage implements OnInit {

  today: string;
  selectedDateTime!: string;
  selectedDate!: string;
  selectedTime!: string;



  Fecha_entrada!: Date;
  Hora_entrada!: Date;
  Fecha_salida!: Date;
  Hora_salida!: Date;
  status!: number;
  TiempoRestante!: number;


  Prac_Ser!: number;
  optionS!: any[];


  constructor(private http: HttpClient, private toastController: ToastController) {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const isoString = date.toISOString();
    const formattedDateTime = isoString.slice(0, 19).replace("T", " ");
    
    // Utiliza formattedDateTime en tu objeto data o consulta de inserción
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);

    this.today = `${year}-${month}-${day}`;
    
    this.Fecha_entrada = new Date();
    this.Hora_entrada = new Date();
    this.Fecha_salida = new Date();
    this.Hora_salida = new Date();
    this.status = 1;
    this.TiempoRestante!;
    this.Prac_Ser;
  }

  ngOnInit() {

  }

  handleDateTimeChange(event: any) {
    const selectedDateTime = new Date(event.detail.value);
    const formattedDateTime = selectedDateTime.toLocaleString('es-MX', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/,/g, '');

    const formattedTime = selectedDateTime.toLocaleString('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).replace(/,/g, '');

    this.selectedDate = formattedDateTime;
    this.selectedTime = formattedTime;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  registrarHoras() {
    
      const formattedFechaEntrada = this.Fecha_entrada.toISOString().slice(0, 19).replace('T', ' ');

    const data = {

      Fecha_entrada: formattedFechaEntrada,
      Hora_entrada: this.Hora_entrada.toISOString().slice(0, 19).replace('T', ' '),
      Fecha_salida: null, 
      Hora_salida: '0000-00-00 00:00:00', 
      status: this.status = 1,
      TiempoRestante: this.TiempoRestante,
      Prac_Ser: this.Prac_Ser,
    };
    const url = 'http://localhost:3001/serviuapt/horarios-ss';



    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);

        if (response && response.hasOwnProperty('message')) {
          this.presentToast('Hora registrada exitosamente');


        } else {
          this.presentToast('Error al registrar la hora');
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.presentToast('Error en la solicitud');
      }
    );
  }
}
