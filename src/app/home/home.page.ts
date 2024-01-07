import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonCardHeader, IonButton, IonButtons, IonFabList, IonFab, IonIcon, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, NavController } from '@ionic/angular/standalone';
import { CitasService } from '../citas.service';
import { ConfigCitasPage } from "../config-citas/config-citas.page"
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [CommonModule, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonCardHeader, IonButton, IonButtons, IonFab, IonIcon, IonFabList, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, ConfigCitasPage]
})

//Clase principal HOME que muestra cita aleatoria
export class HomePage implements OnInit {

  cita: { frase: string; autor: string; } | undefined;

  constructor(private citasService: CitasService,
    private router: Router,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.cita = this.citasService.getRandomCita();
  }

  cargarCitaAleatoria(): void {
    this.cita = this.citasService.getRandomCita();
    this.cdr.detectChanges();
  }

  Randonaizer(): void {
    this.cargarCitaAleatoria();
  }

  paginaGestion(): void {
    this.router.navigate(['gestion-citas']);
  }

  paginaCitas(): void {
    this.router.navigate(['citas']);
  }

  goToAnotherPage(): void {
    this.router.navigate(['configuracion']);
  }


 
}
