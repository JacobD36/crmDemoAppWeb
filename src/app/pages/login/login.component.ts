import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: UserModel;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userData = new UserModel();
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      if ( this.userData.password.length < 6) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Su contraseña debe tener al menos 6 caracteres'
        });
      } else {
        Swal.fire({
          icon: 'info',
          allowOutsideClick: false,
          text: 'Espere, por favor...',
        });
        Swal.showLoading();
        this.auth.login(this.userData).subscribe( resp => {
          Swal.close();
          this.router.navigateByUrl('/home');
        }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: err.error
          });
        });
      }
    }
  }
}
