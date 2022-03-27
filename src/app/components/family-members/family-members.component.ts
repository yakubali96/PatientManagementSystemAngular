import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member } from './member.model';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  Member = new Member();
  formGroup: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private toastr: ToastrService) {
    this.formGroup = this.fb.group(
      {
        name: ['', [Validators.required]],
        relationship: ['', [Validators.required]],
        phoneNo: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
        address: ['', [Validators.required]],


      }
    )

  }

  get f() {
    return this.formGroup.controls;
  }

  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
    this.savePatient()

  }

  savePatient() {
    console.log(this.formGroup.value);
    if (this.formGroup.invalid) {
      this.toastr.error("save failed")

    } else {
      this.submitted = true;
      const formData: FormData = new FormData();
      formData.append('name', this.formGroup.get('name')?.value);
      formData.append('relationship', this.formGroup.get('relationship')?.value);  
      formData.append('phoneNo', this.formGroup.get('phoneNo')?.value);
      formData.append('address', this.formGroup.get('address')?.value);
      console.log(formData);

      const headers = { 'content-Type': 'application/json' };
      this.http.post<any>("http://localhost:9094/informationAdd", formData)
        .subscribe(data => {
          console.log(data);
          this.toastr.success("save successfull");
        }
        )
      //this.router.navigate(["/admin/show"]);
    }
  }
}

