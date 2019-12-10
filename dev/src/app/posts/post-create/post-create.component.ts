import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = 'no content';
  newPost2 = 'no content 2';
  textareaVal = '';
  constructor() { }
  onAddPost(val: HTMLTextAreaElement) {
   this.newPost = val.value;
  }
  onAddPost2() {
    this.newPost2 = this.textareaVal;
  }
  ngOnInit() {
  }

}
