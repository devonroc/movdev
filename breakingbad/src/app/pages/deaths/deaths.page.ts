/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera 
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    //variables to be used in the class
    deaths: Observable<any>;
    mDeaths: any[] = [];
    searchdeath = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.loadDeaths();
        //initialize loadDeaths Method

        //  this.loadDeaths.subscribe(data => {console.log('my data' , data);
        //}

    }

    //The method will call the elements from the getCharacters method declared in 
    //the api service and will store these elements in an array called mDeaths
    loadDeaths() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            this.mDeaths = [data];
            // console it is only to check the info in console 
            //console.log( data); 
        });
    }


    //In this method the attribute event will be taken to start the search
    // according with what is written in the box
    searchDeath(event) {
        const text = event.target.value;
        this.searchdeath = text;

        //it will show the text in the console
        // console.log(text);
    }
}






