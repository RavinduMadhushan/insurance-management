import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { VirtualTimeScheduler } from "rxjs";
import { DataService } from "../data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private data: DataService) {}
  loading = false;
  error = true;
  messege = "";
  fname: any;
  lname: any;
  address: any;
  nicno: any;
  pwd: any;
  phnnum: any;
  email: any;

  ngOnInit() {}

  onSubmit() {
    let registerDetails = {
      fullname: this.fname + " " + this.lname,
      address: this.address,
      nic: this.nicno,
      password: this.pwd,
      phone_num: this.phnnum,
      email: this.email
    };

    this.data.register(registerDetails).subscribe();

    this.fname = "";
    this.lname = "";
    this.address = "";
    this.nicno = "";
    this.pwd = "";
    this.phnnum = "";
    this.email = "";
  }
}
