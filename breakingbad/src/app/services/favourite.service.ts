/**  Title:  Week 7: Storing Data inside Ionic Apps
*    Author: Mikhail Timofeev
*    Date: 31/March/2020
*    Availability: https://mikhail-cct.github.io/mobdev/wk7/#/13
**/

// Service to store the state of the episodes and characters marked as favourite

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//Create variables to store the state of the favourite Episode and character
const STORAGE_KEYEpi = 'favouriteEpisodes';
const STORAGE_KEYChar = 'favouriteCharacteres';


@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    constructor(private storage: Storage) { }

    // Method that returns all the episodes marked as favourite 
    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEYEpi);
    }

    //Method to store the id of the episode marked as favourite
    isFavouriteEp(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    //Method to mark the id of the episode as favourite
    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEYEpi, result);
            } else {
                return this.storage.set(STORAGE_KEYEpi, [episodeId]);
            }
        });
    }

    //If the episode is alreade marked as favourite so unmark 
    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYEpi, result);
            }

        });
    }

    // Method that returns all the characters marked as favourite 
    getAllFavouriteCharacteres() {
        return this.storage.get(STORAGE_KEYChar);
    }

    //Method to store the id of the character marked as favourite
    isFavouriteChar(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    //Method to mark the id of the character as favourite
    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEYChar, result);
            } else {
                return this.storage.set(STORAGE_KEYChar, [characterId]);
            }
        });
    }

    //If the episode is alreade marked as favourite so unmark 
    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYChar, result);
            }

        });

    }
}

