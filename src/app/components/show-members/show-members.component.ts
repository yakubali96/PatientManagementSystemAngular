import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  Member:any
  isSupplier:boolean=true
  searchQuery: any

  ngOnInit(): void {

    this.getSupplier();
  }



  getSupplier() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:9094/getAllInformation', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.Member = map.Data;
      })
  }

  editSupplier(sup: any) {
    this.router.navigate(['supplier'], { state: { supp: sup, isSave: false } })
    this.Member.sname = sup.sname
  }

  deleteSupplier(sup: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:9094/deleteInformation" + sup.sid, { headers: headers })
      .subscribe(data => {
        this.getSupplier();
      }
      )
  }



}