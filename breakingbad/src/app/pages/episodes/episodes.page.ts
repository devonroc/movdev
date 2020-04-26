import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

// In this file is the logic for the episodes HTML page.
//First the services and packages that interact with this code are imported at the top


@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    //variables created where the data will be stored and manipulated
    episodes: Observable<any>;
    characterId: Observable<any>


    constructor(private router: Router,

        private api: ApiService, private http: HttpClient) { }

    ngOnInit() {
        //The data will be extracted from an API, the method that is in charge of this 
        //is in the /api/service file

        //initialize the variable with the data from the API
        this.episodes = this.api.getEpisodes();

        //to show the result in console:
        //this.episodes.subscribe(data => {console.log('my data' , data);
        //});
    }


    //read the data from where the mouse is located and go to the episode selected
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }




}

