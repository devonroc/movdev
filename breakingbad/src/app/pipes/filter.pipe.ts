import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

      transform( quotes: any[], text: String): Quote[] {
    console.log(quotes);
    
    if (text.length===0){return quotes;}
    text = text.toLocaleLowerCase(); 
    return quotes.filter(quote =>{
        return quote.quote.toLocaleLowerCase().includes(text);
      // console.log(text);
    });
    
  }

}