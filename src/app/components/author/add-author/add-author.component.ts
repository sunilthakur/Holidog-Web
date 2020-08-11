import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from '../../../core/services/authors.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  public authorForm: FormGroup;
  public submitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private authorService: AuthorsService) { }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  get f() { return this.authorForm.controls; }

  saveAuthorDetails() {
    this.submitted = true;
    if (this.authorForm.invalid) {
      alert("Please fill the required fields");
      return;
    }

    this.authorService.saveAuthorDetails(this.authorForm.value).subscribe(res => {
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
    this.router.navigate(['/author-list']);
  }

}
