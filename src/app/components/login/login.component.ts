import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // FormsModule ekledik

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
name: string = "";

constructor(private http: HttpClient,
  private router: Router
){
}

login(){
this.http.get("https://localhost:7089/api/Auth/Login?name=" + this.name).subscribe(res=>{
  localStorage.setItem("accessToken",JSON.stringify(res));
  this.router.navigateByUrl("/");
});
}
}
 