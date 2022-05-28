import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: UserModel

  @ViewChild('inputUserName')
  inputUserName: ElementRef

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // this.user = this.userService.getUser(+this.activatedRoute.snapshot.params['id'])
    this.activatedRoute.params.subscribe(res => {
      this.user = this.userService.getUser(+res['id'])
    })
  }

  update(name: any) {
    this.userService.update(+this.activatedRoute.snapshot.params['id'], name.value)
  }

  canDeactivate() {
    if (this.userService.getUserByName(this.inputUserName.nativeElement.value)) {
      return true
    } else {
      return confirm('Are you sure?')
    }
  }


}
