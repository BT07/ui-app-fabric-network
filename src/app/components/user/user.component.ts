import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  address: Address;
  hobbies: string[];
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = "John Doe";
    this.email = 'john@gmail.com'
    this.age = 30;
    this.address = {
      street: "Main Street",
      city: "Margao",
      state: "Goa"
    }

    this.hobbies = ['write code', 'watch movies', 'cook'];

    this.dataService.getPosts().subscribe(posts => this.posts = posts);
  }

  onClick() {
    console.log('Clicked');
    this.name = 'Jane Doe';
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }


}

interface Address {
  street: string,
  city: string,
  state: string;
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
