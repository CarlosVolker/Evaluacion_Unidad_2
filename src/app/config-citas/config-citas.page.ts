import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './config-citas.page.html',
  styleUrls: ['./config-citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfigCitasPage  {

  permitirEliminarCitas = true;


}
