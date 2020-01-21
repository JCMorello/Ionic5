import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  persons: any = [];

  constructor( 
    private http: HttpClient
  ) {}

  getUsers() {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
      //process the json data
      this.persons = data['results'];
      console.log(data)
    })
  }

}
