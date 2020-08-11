import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from '../../../core/services/authors.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  public authorForm: FormGroup;
  public submitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private authorService: AuthorsService) { }


  ngOnInit() {
    if (localStorage.getItem("authorId")) {
      this.createFormGroup();
      this.getAuthorDetails();
    }
  }

  createFormGroup() {
    this.authorForm = this.formBuilder.group({
      authorId: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  getAuthorDetails() {
    var authorId = + localStorage.getItem("authorId");
    this.authorService.getAuthorById(authorId).subscribe(res => {
      if (res) {
        let obj: any = res;
        this.authorForm.patchValue({
          authorId: obj.authorId,
          firstName: obj.firstName,
          lastName: obj.lastName
        });
      }
    });
  }

  saveAuthorDetails() {
    this.submitted = true;
    if (this.authorForm.invalid) {
      alert("Please fill the required fields");
      return;
    }

    this.authorService.updateAuthorDetails(this.authorForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/author-list']);
      } else {
        alert('Error while saving author details');
      }
    }, error => {
      alert(error);
    }
    );
  }

  goBack() {
    localStorage.removeItem("authorId");
    this.router.navigate(['/author-list']);
  }

}
