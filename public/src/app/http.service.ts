import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  addPet(newpet) {
    return this._http.post('/addNew', newpet)
  }

  getPets() {
    return this._http.get('/all');
  }

  deletePet(pet_id) {
    return this._http.delete('/pet/'+pet_id)
  }

  editPet(pet_id, onepet) {
    return this._http.put('/pet/'+pet_id, onepet)
  }

  getOnePet(pet_id){
    return this._http.get('/pet/'+ pet_id)
  }

  addOneLike(pet_id, onepet) {
    return this._http.put('/petlike/'+pet_id, onepet)
  }
}
