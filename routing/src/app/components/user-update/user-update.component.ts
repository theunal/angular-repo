import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user : UserModel

  constructor(private activatedRoute: ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    // this.user = this.userService.getUser(+this.activatedRoute.snapshot.params['id'])
    this.activatedRoute.params.subscribe(res => {
      this.user = this.userService.getUser(+res['id'])
    })
  }

 update(name : any) {
    this.userService.update(+this.activatedRoute.snapshot.params['id'], name.value)
 }

  

}
