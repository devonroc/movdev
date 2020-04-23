import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    //  user: any = []
     users: any[] = [];
    //users: Array<any>;  
    deaths: Observable<any>;
  searchQuery: string = '';

    constructor(private router: Router, private api: ApiService, navCtrl: NavController) { }

    ngOnInit() {
     
    this.ionViewDidLoad();
//this.getItems(event);

    }

    //  this.deaths.subscribe(data => {console.log('my data' , data);
    //}


    ionViewDidLoad() {
          this.deaths= this.api.getUsers();
       this.deaths.subscribe((data) => { // Success
            this.users = data['results'];
            console.log('data: ' + data);

        }
        );
    }

     getItems(ev: any) {
    // Reset items back to all of the items
    this.ionViewDidLoad();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users = this.users.filter((user) => {
                  console.log('newdata: ' + user)  
        return (user.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }}


}

