import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  person: any = [];

  constructor( 
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getNewUser()
  }

  getNewUser() {
    this.http.get('https://randomuser.me/api').subscribe(data=>{
      //process the json data
      this.person = data['results'][0];
      console.log(this.person)
    })
  }


}
