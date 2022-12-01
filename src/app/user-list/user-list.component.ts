import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  adminData!:any;
  formValue!: FormGroup;
  userListDetails!: any;
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  getAllUser(){
    this.api.getAllUsers().subscribe((res) =>{
      console.log(res);
      this.userListDetails=res;
      console.log(this.userListDetails);
    })
  }

}
