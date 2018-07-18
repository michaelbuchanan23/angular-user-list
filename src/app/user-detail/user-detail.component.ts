import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../JsonResponse';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	user: User;

  constructor(private usersvc: UserService) { }

  	ngOnInit() {
		this.usersvc.get(1)
			.subscribe(resp => {
				this.user = resp.Data;
				console.log(resp);	
		});
	}
}
