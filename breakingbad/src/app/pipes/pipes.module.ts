/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author:     Fernando Herrera 
*    Date: 18 mar. 2019
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DeathsfilterPipe } from './deathsfilter.pipe';


//To be able of use the pipe module we need to import the pipes that we create into this page
//The pipes created are FilterPipe and DeathsfilterPipe
//To make posible that the app can interact with these pipes it is neccesary to export them
@NgModule({
    declarations: [FilterPipe, DeathsfilterPipe],
    exports: [FilterPipe, DeathsfilterPipe]
})
export class PipesModule { }


