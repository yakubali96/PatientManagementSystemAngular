import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  Member = new Member();
  isSave: boolean = true;
  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveMem(){
const headers ={'content-type': 'application/json'};
this.http.post<any>("http://localhost:9094/informationAdd",JSON.stringify(this.Member),{headers: headers}).subscribe(data=>{
  alert("New member added Successful");
  this.Member= new Member();
  this.isSave =true;
}, err => {
  alert("member already exist");
}
)
  }
}

