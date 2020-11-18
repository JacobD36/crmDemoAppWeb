import { Component, OnInit } from '@angular/core';
import { NgForm, NgControlStatus } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-jaime',
  templateUrl: './jaime.component.html',
  styleUrls: ['./jaime.component.css']
})
export class JaimeComponent implements OnInit {
  usuario = {
    nombre: 'Jaime',
    apellido: 'Pérez Frias',
    correo: 'jperezfrias33@gmail.com',
    pais: '',
    genero: ''
  };

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[ Seleccione País ]',
        codigo: ''
      });
    });
  }

  guardar( forma: NgForm){
    if (forma.invalid) {
      Object.values(forma.controls).forEach( control => {
        control.markAllAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }
}
