import { Component, OnInit } from '@angular/core';
import { Electrodomestico } from '../domain/electrodomestico';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage{

  electrodomestico : Electrodomestico = new Electrodomestico()

  constructor(private electrodomesticosService: ElectrodomesticosService,
              public afs: AngularFirestore) { }

  ngOnInit() {
  }

  guardar(){
    this.electrodomesticosService.save(this.electrodomestico)
  }

}
