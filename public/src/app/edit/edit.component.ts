import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
 selector: 'app-edit',
 templateUrl: './edit.component.html',
 styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  editPet: any;
 thispet: any;
 id: any;
 message: any;

 constructor(private _httpService: HttpService,
   private _route: ActivatedRoute,
   private router: Router) {
 }

 ngOnInit() {
   this._route.params.subscribe((params: Params) => {
     console.log(params['id'])
     this.id = params['id'];
 });
   
   this.getPetFromService();
 }
 getPetFromService() {
   let Observable = this._httpService.getOnePet(this.id);
   Observable.subscribe(data => {
     console.log("Got our One pet", data);
     this.thispet = data['data']
   })
 }

 onEdit(thispet) {
   let Observable = this._httpService.editPet(this.id,thispet);
   Observable.subscribe(data => {
     console.log("Edited the Pet", data)
     if (data['error'] != null) {
      this.message = data['error']['errors']['name']['message'];
    }
    else {
      this.router.navigate(['/detail/' + this.id]);
    }
   })
 }
}