import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  drinks: any[] = [];
  allDrinks: any[] = [];
  url: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  name: string = "";
  showResults: boolean = false;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.showResults = false;

    this.http.get(this.url+this.name, {
    })
    .subscribe(data=>{
      //process the json data
      this.drinks = data['drinks'];
      this.allDrinks = data['drinks'];
      this.showResults = true;
      console.log(data)
    })
  }

  onInput($event) {

    var value = $event.srcElement.value;

    this.drinks = this.allDrinks.filter(drink => {
      if (drink.strDrink.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
    

  }



}
