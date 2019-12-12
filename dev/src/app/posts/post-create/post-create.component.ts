import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // newPost = 'no content';
  // newPost2 = 'no content 2';
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostService) { }
  // onAddPost(val: HTMLTextAreaElement) {
  //  this.newPost = val.value;
  // }
  onAddPost2(form: NgForm) {
    if (form.invalid) {
      alert('invalid form');
      return true;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    this.postsService.addPost(form.value.title, form.value.content);
  }
  ngOnInit() {
  }

}
