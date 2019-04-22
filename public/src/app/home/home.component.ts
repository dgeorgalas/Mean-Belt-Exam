import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets = [];
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {

    this.AllPets();

  }

  ngOnInit() {
  }

  AllPets() {
    let allpets = this._httpService.getPets();
    allpets.subscribe(data => {
      this.pets = data['pets'];
      console.log(data);
    })
  }

  // onDelete(pet_id) {
  //   let delete_pet = this._httpService.deletePet(pet_id);
  //   delete_pet.subscribe(data => {
  //     this.AllPets();
  //   })
  // }

}
