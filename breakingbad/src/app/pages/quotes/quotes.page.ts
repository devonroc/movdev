/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera 
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PipesModule } from 'src/app/pipes/pipes.module';


@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    //Declaration of the variables that will be used in the class  
    //quotes is the variable where the elements from the API will be stored
    quotes: Observable<any>;
    //quotesId will be the variable to store the Id of each quote
    quotesId: Observable<any>;
    //in the array quoteItem the quotes will be stored in a new array
    quoteItem: any[] = [];
    //mySearch is the variable where the input from the user will be stored when a search is being done
    mySearch = '';

    constructor(private router: Router, private api: ApiService, /*private filter: FilterPipe*/) {
    }

    ngOnInit() {
        this.loadQuotes();
        //initialize loadDeaths Method

        // this.quotes = this.api.getQuotes();
        // this.quotes.subscribe(data => {console.log('my data' , data);
        // });

    }

    //The method will call the elements from the getCharacters method declared in 
    //the api service and will store these elements in an array called quoteItem
    loadQuotes() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            this.quoteItem = [data];
            //console.log( data); 
        });
    }

    //In this method the attribute event will be taken to start the search
    // according with what is written by the user in the search 
    searchQuote(event) {
        const text = event.target.value;
        this.mySearch = text;

        //return(text.toLowerCase().indexOf(text.toLowerCase())>-1);


        //show the results in the console
        // console.log(text);
    }

    //Method to go to the details page of the quote selected by the user with a click
    openDetails(quotes) {
        let quotesId = quotes.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
    }
}
