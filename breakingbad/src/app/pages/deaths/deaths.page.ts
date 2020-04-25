import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    
    deaths: Observable<any>;
    items: any[] =[]; 
    searchText='';

    constructor(private router: Router, private api: ApiService, navCtrl: NavController) { }

    ngOnInit() {
                 this.initializeItems(); 
//this.getItems(event);

  //  this.deaths.subscribe(data => {console.log('my data' , data);
    //}
  
}

      initializeItems(){
      this.deaths=this.api.getDeaths(); 
      this.deaths.subscribe(item => {
          this.items=[item];
          // console it is only to check the info in console 
          //console.log( data); 
      });
    }

  //event is the name of the property that i have for this method 
  searchDeath(event){
      const text = event.target.value; 
      this.searchText = text; 
  //   this.searchText = event.detail.value;
    //    const text = event.target.href;
        
    //      this.initializeItems(); 
        
    //  if (text && text.trim()!=''){
    //        this.items=this.items.filter((quote)=>{
    //            return(quote.author.toLowerCase().includes(text.toLowerCase())>-1);
    //        })
    //    }
   
    //  const text = event.target.author; 
    //    if (text && text.trim()!=''){
    //        this.items=this.items.filter((quote)=>{
    //            return(quote.toLowerCase().indexOf(text.toLowerCase())>-1);
     //       })
    //    }
      //this.searchText = text; 
      console.log(text); 
  }
}
  

 



