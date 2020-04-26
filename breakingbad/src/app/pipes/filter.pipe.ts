/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera 
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

//Creation of pipe called filter, it will be used to filter and search the data from the quotes page
@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    //PipeTransform is an interface that uses pipes, this pipes take data and transform it into to a desired output.

    transform(quotes: any[], search: String): any[] {

        //show the result in the console
        // console.log(quotes);

        //if the variable is empty it will return the list of quotes
        if (search.length === 0) { return quotes; }

        //this fuction convert the text typed by the user and convert it in lowercase
        search = search.toLocaleLowerCase();

        //this fuction will search the input in the quote and in the author variables and 
        //will return the result of the filtering the input in the array
        return quotes.filter(quote => {
            return quote.quote.toLocaleLowerCase().includes(search) ||
                quote.author.toLocaleLowerCase().includes(search);


            //show the result in the console
            // console.log(search);
        });

    }

}