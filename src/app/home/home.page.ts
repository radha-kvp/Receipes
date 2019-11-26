import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedPosts: [];

constructor(private http: HttpClient) {

   }

  ngOnInit() {

  }
  onClickFunction() {
    console.log('Event caught');
  }

  onCreatPost(postData: {title: string; content: string }) {
    this.http.post('https://recipes-7ccb1.firebaseio.com/posts.json',
    postData).subscribe(responceData => {
      console.log(responceData);
    });
  }
  onFetchPosts() {

    

  }
}



