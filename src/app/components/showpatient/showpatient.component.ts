import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',

  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  getPatient: any = [];
  patients = new Patient();
  isSave: boolean = true;

  patientName = "patientName";

  constructor(private http: HttpClient,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPatient();
  }
  gotoHome(){
    this.router.navigate(['/gardian']);  // define your component where you want to go
}
  getAllPatient() {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9094/getAllPatient', { headers: header }).subscribe((res) => {
      //console.log(res);
      this.getPatient = res;
      console.log(this.getPatient);
    }, err => {
      console.log("load failed");


    })
  }
  delete(patient: any) {
    if (confirm(" Confirm delete")) {     
      const headers = { 'content-Type': 'application/json' };
      this.http.get("http://localhost:9094/deletePatient/" + patient.id, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.getAllPatient();
          this.toastr.warning("Patient delete");
        })
    }

  }
  editPatient(item: any) {
    console.log(item);

    this.patients.id = item.id;
    this.patients.patientName = item.patientName;
    this.patients.gender = item.gender;
    this.patients.age = item.age;
    this.patients.dob = item.dob;
    this.patients.phonNo = item.phonNo;
    this.patients.email = item.email;
    this.patients.address = item.address;
    this.patients.photosUri = item.photosUri;
    this.router.navigate(['/patient'], { state: { patient: item, isSave: false } })


    console.log(this.patients)
  }

}








