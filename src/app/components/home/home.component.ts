import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { ChatModel } from '../../models/chat.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: UserModel[] = [];
  chats: ChatModel[] =[];
  selectedUserId: string = "1";
  selectedUser: UserModel = new UserModel();
  user = new UserModel();

  constructor(
    private http: HttpClient
  ){
    this.user = JSON.parse(localStorage.getItem("accessToken") ?? "");
  }
  

  getUsers(){
  this.http.get<UserModel[]>("https://localhost:7089/api/Chat/GetUsers").subscribe(res=>{
    this.users = res.filter(p => p.id != this.user.id);
  })
  }

  changeUser(user: UserModel){
    this.selectedUserId = user.id;
    this.selectedUser = user;

    //this.chats = Chats.filter(p=> p.toUserId == user.id && p.userId == "0" || p.userId == user.id && p.toUserId == "0");
  }

  logout(){
    localStorage.clear();
    document.location.reload();
  }

}





