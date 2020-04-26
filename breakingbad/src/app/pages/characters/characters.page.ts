/**  Title:  Faster List Performance with Ionic 4 Virtual Scroll & Infinite Scroll
*    Author:  Simon Grimm
*    Date: 18 jun. 2019
*    Availability: https://www.youtube.com/watch?v=NBeExE9dvR0
**/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    //variables declared to implement the methods in the class

    characters: Observable<any[]>;
    characterId: Observable<any>;
    //the offset that the page will start
    offset = 0;
    //chars is the array where the elements will be stored
    chars = [];
    //the maximun number of elements that will be charged in the page
    //once this element is reached the scroll will stop
    maxChars = 64;

    constructor(private router: Router, private api: ApiService, private http: HttpClient) { }


    ngOnInit() {
        //initialize the loadCharacters method
        this.loadCharacters();

    }

    //the method will call the elements from the getCharacters declared in 
    //the api service and will store these elements in an array called chars
    //the ? is used to make the event optional so the method will not sent an error
    //if the value of the event is null
    loadCharacters(event?) {
        this.api.getCharacters(this.offset)
            .subscribe(data => {
                console.log("chars: ", data);
                this.chars = this.chars.concat(data);
                if (event) {
                    event.target.complete();
                }
            })
    }


    //The loadMore event will be activate and will charge 20 elements more
    //when the the scroll goes down and has charged the previous 20 elements
    //the offset will start where the previous offset stopped
    loadMore(event) {
        this.offset = this.offset + 20;
        this.loadCharacters(event)
        console.log(event);

        //when the offset reaches the number of elements set in the 
        //maxChars the fuction will stop
        if (this.offset == this.maxChars) {
            event.target.disabled = true;
        }
    }

    //Method to open the page were the details of the characters are
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
        this.characterId.subscribe(data => {
            console.log('my data', data);

        });
    }
}


