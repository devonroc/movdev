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


@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    //Declaration of the variables to be used in the class
    quote: any;
    quoteId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
   
    ngOnInit() {
        //Get the Quote selected by the user by the Id and store it in an array called quote
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.quote_id));
        });
    }
}