import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: Observable<any[]>;
    characterId: Observable<any>
      page = 0;
users = [];
maxPages = 6;
    constructor(private router: Router, private api: ApiService, private http: HttpClient) { }   


    ngOnInit() {
        this.loadUsers();
        // this.characters= this.api.getCharacters();

     //  this.characters = this.api.loadUsers();
         //this.myChars= this.api.loadUsers();
       // this.characters.subscribe(data => {console.log('my data' , data);
  // });
    }

loadUsers(event?){
   return this.http.get<[]>(`https://randomuser.me/api?results=20&page=${this.page}`).subscribe(
       res => { console.log(res);
         this.users = this.users.concat(res['results']);
           
         if (event){
               event.target.complete();
           }
   })
}


loadMore(event){
    console.log(event);
    this.page++;
    this.loadUsers(event);

    if(this.page==this.maxPages){
        event.target.disabled =true;
    }
}
}

  

   // openDetails(character) {
     //   let characterId = character.char_id;
       // this.router.navigateByUrl(`/tabs/characters/${characterId}`);
        // this.characterId.subscribe(data => {console.log('my data' , data);

        //  });
  //  }
//}


