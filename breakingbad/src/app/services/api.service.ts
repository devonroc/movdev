/**  Title:  Week9 (Ap 13- Ap 19)
*    Author: Mikhail Timofeev
*    Date: 14/April/2020
*    Availability: https://drive.google.com/file/d/1DtBAlEWYf28XwlT0eEHIsYc8D0DKLz3Q/view?usp=sharing
**/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }
    //Method to get the Episodes data from the API
    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
    }

    //Method to get the Episode by the ID from the API
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }


    //Method to get the  list of characters and the offset from the API
    getCharacters(offset) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${offset}`)

    }

    //Method to get the characters by ID from the API
    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);

    }
    //Method to get the  list of Quotes from the API
    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`);
    }

    //Method to get the  Quotes by ID  from the API
    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);

    }
    //Method to get the  list of Deaths  from the API
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }



}