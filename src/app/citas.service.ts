import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private citas: { frase: string; autor: string; }[] = [
    { frase: 'La única manera de hacer un gran trabajo es amar lo que haces.', autor: 'Steve Jobs' },
    { frase: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', autor: 'Allen Saunders' },
    { frase: 'No dejes para mañana lo que puedas hacer hoy.', autor: 'Benjamin Franklin' },
    { frase: 'La imaginación es más importante que el conocimiento.', autor: 'Albert Einstein' },
    { frase: 'Somos el universo observándose a sí mismo', autor: 'Carl Sagan' }
  ];

  getCitas():{ frase: string; autor: string}[]{
    return this.citas;
  }

  getRandomCita(): { frase: string; autor: string; } {
    const randomIndex = Math.floor(Math.random() * this.citas.length);
    return this.citas[randomIndex];
  }

  agregarCita(cita: { frase: string; autor: string; }): void {
    this.citas.push(cita);
  }

  // Servicio para eliminar una cita por índice
  eliminarCita(index: number): void {
    this.citas.splice(index, 1);
  }
}
