import { Component } from '@angular/core';
import { IPostData } from 'src/app/models/post-data';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPostsArray: IPostData<any>[];
  latestPostsArray: IPostData<any>[];

  constructor( private postService: PostsService ) {
    postService.loadFeatured().subscribe(val => {
      this.featuredPostsArray = val;
    })

    postService.loadLatest().subscribe(val => {
      this.latestPostsArray = val;
    })
  }

}
