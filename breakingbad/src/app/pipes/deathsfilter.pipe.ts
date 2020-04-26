/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera 
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

//Creation of pipe called filter, it will be used to filter and search the data from the deaths page
@Pipe({
    name: 'deathsfilter'
})
export class DeathsfilterPipe implements PipeTransform {
    //PipeTransform is an interface that uses pipes, this pipes take data and transform it into to a desired output.


    transform(deaths: any[], keyword: String): any[] {
        console.log(deaths);

        //if the variable is empty it will return the list of deaths
        if (keyword.length === 0) { return deaths; }

        //this fuction convert the text typed by the user and convert it in lowercase
        keyword = keyword.toLocaleLowerCase();

        //this fuction will search the input in the death variable and 
        //will return the result of the filtering the input in the array
        return deaths.filter(death => {
            return death.death.toLocaleLowerCase().includes(keyword);

            //show the result in the console
            // console.log(keyword);
        });

    }

}
