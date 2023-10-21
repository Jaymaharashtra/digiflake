import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/backEnd-Service/back-end.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username= '';
password ='';

constructor(private backEndService : BackEndService) { }
  
login(){
  
  this.backEndService.login(this.username, this.password).subscribe(
    (_Response)=>{
      //
    },
    (_Error)=>{
      //
    }
    );
  
  }
  


  ngOnInit(): void {
  }


}
