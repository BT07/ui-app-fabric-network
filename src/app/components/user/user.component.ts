import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = "John Doe";
    this.age = 30;
    this.address = {
      street: "Main Street",
      city: "Margao",
      state: "Goa"
    }

    this.hobbies = ['write code', 'watch movies', 'cook']
  }

  onClick() {
    console.log('Clicked');
    this.name = 'Jane Doe';
  }

  addHobby(hobby:string) {
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(index:number) {
    this.hobbies.splice(index, 1);
  }


}

interface Address {
  street: string,
  city: string,
  state: string;
}
