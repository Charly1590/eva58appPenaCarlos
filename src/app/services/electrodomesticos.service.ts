import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Electrodomestico } from '../domain/electrodomestico';

@Injectable({
  providedIn: 'root'
})
export class ElectrodomesticosService {

  constructor(public afs: AngularFirestore) { }
  
  save(electrodomestico:Electrodomestico){
      const refElectrodomestico = this.afs.collection("electrodomestico");
      
      if (electrodomestico.uid == null){
        electrodomestico.uid = this.afs.createId();
        electrodomestico.activo = true;
      }

      refElectrodomestico.doc(electrodomestico.uid).set(Object.assign({}, electrodomestico));
  }

  getContactos():Observable<any[]>{
    return this.afs.collection("electrodomestico",
            ref=> ref.where("activo","==",true)).valueChanges();
  }
  
  filtro(nombre:string):Observable<any[]>{
    return this.afs.collection("electrodomestico",
            ref=> ref.where("nombre",">=",nombre)).valueChanges();
  }  
}
