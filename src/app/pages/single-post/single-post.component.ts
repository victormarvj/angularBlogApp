import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPostData } from 'src/app/models/post-data';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostsArray: IPostData<any>[];

  constructor( private route: ActivatedRoute, private postService: PostsService ) {}

  ngOnInit(): void {
      this.route.params.subscribe(val => {
        this.postService.countViews(val['id']);
        this.postService.loadOnePost(val['id']).subscribe(post => {
          this.postData = post;
          this.loadSimilarPosts(this.postData.category.categoryId);
        })
      })
  }


  loadSimilarPosts(catId) {
    this.postService.loadSimilar(catId).subscribe(val => {
    this.similarPostsArray = val;
    });
  }

}
