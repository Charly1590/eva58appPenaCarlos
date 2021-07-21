import { Component, OnInit } from '@angular/core';
import { ElectrodomesticosService } from '../services/electrodomesticos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private electrodomesticosService: ElectrodomesticosService) { }
  
  electrodomesticos: any;

  nombre:string;
  
  ngOnInit() {
    this.electrodomesticos =  this.electrodomesticosService.getContactos();
  }

  filtro(){
    console.log(this.nombre)
    this.electrodomesticos =  this.electrodomesticosService.filtro(this.nombre);
  }

}
