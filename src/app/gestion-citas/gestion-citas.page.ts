import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../citas.service';
import { Validator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GestionCitasPage {

  citas = this.citasService.getCitas();
  nuevaCita = {frase: "", autor:"" };

  constructor(private citasService: CitasService) {}

  agregarCita(): void {
    this.citasService.agregarCita(this.nuevaCita);
    this.nuevaCita = {frase: "", autor: ""};
    }
  

  eliminarCita(index: number): void {
    this.citasService.eliminarCita(index);
  }
}
