import { Component, OnInit } from '@angular/core';
import { Profesional } from '../models/profesional.model';
import { ProfesionalesService } from '../services/profesionales.services';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  profesionales: Profesional[] = [];
  profesional: Profesional = {
    name: '',
    lastName: '',
    age: 0,
    weight: 0,
    height: 0,
    isRetired: false,
    nationality: '',
    oscarsNumber: 0,
    profession: '',
    photo: ''
  };

  constructor(private profesionalesService: ProfesionalesService) { }

  ngOnInit(): void {
  }

  // Función para mostrar los profesionales ya sean todos o por nombre
  mostrarProfesionales() {
    if (this.profesional.name && this.profesional.lastName) {
      this.profesionalesService.getProfesionalByName(this.profesional.name, this.profesional.lastName).subscribe((prof: Profesional) => {
        console.log(prof);
        this.profesional = { ...prof};
        this.profesionales = [{ ...prof}];
      }, (error) => {
        console.error(error);
      });
    } else {
      this.profesionalesService.getAllProfesionales().subscribe((prof: Profesional[]) => {
        console.log(prof);
        this.profesionales = prof;
      }, (error) => {
        console.error(error);
      });
    }
  }

  // Función para crear un nuevo profesional
  crearProfesional() {
    this.profesionalesService.addProfesional(this.profesional).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }

  // Función para actualizar un profesional existente
  actualizarProfesional() {
    this.profesionalesService.updateProfesionalByName(this.profesional.name, this.profesional).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }

  // Función para eliminar un profesional
  eliminarProfesional() {
    if (this.profesional.name && this.profesional.lastName) {
      this.profesionalesService.deleteProfesionalByName(this.profesional.name).subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.error(error);
      });
    }
  }
}
