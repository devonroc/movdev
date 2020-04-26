/**  Title:  Week 3: Routing & Navigating with Ionic
*    Author: Mikhail Timofeev
*    Date: 2/March/2020
*    Availability: https://mikhail-cct.github.io/mobdev/wk3/#/
**/


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

//Class where the details of the characters will be loaded

export class CharacterDetailsPage implements OnInit {

    //variables declared to use in the class
    character: any;
    characterId = null;
    isFavourite = false;


    url = 'https://www.breakingbadapi.com/api/characters/';


    constructor(private activatedRoute:
        ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        //Assign the Id of the character into the variable characterId
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        //Get the Id and the img from the getCharacter method 
        //declared in the api service  and store the character in an array 
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
            this.url = this.character.img;
        });


        //Mark  of the character as favourite
        this.favouriteService.isFavouriteChar(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    //Store the the state of the Character as favourite
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    //If the character is marked as unfavourite the state will be stored as false
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
}
