import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../validator/validator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  passwordType: string = 'password';
  passwordShown: boolean = false;

  correo: string;
  password: string;
  
  //validar login
  miFormulario: FormGroup = this.fb.group({
    correo:['', [Validators.required]],
    password:['',[Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorService,
    private router: Router,
  ) {

    this.correo ='';
    this.password = '';
  }

  ngOnInit(): void {
   
  }

  submitLogin(){
    this.validator.login(this.correo, this.password)
    .subscribe(
      (response) => {
        // Almacenar el token en el almacenamiento local
        localStorage.setItem('token', response.token);
        
        // Obtener el rol del usuario desde el token decodificado
        const rol = this.validator.getRolFromToken(response.token);

        // Redireccionar de acuerdo al rol
        if (rol == '2') {
          console.log('Bienvenido docente');
          this.router.navigate(['/docente']); // Redireccionar a la página de administrador
        } else if (rol == '3') {
          console.log('Bienvenido alumno');
          this.router.navigate(['/alumno']); // Redireccionar a la página de usuario
        } else {
          this.router.navigate(['/']); // Redireccionar a la página principal por defecto
        }
      },
      (error) => {
        console.error(error);
        // Mostrar mensaje de error al usuario
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

