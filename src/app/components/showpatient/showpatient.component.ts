import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',

  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  getPatient: any = [];

  patientName = "patientName";

  constructor(private http: HttpClient,private router: Router) { }

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
  delete(){
    
  }

}








