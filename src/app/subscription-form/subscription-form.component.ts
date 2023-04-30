import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor( private subService: SubscribersService ) {}

  onSubmit(formVal: NgForm) {
    const subData: ISub = {
      name: formVal.value.name,
      email: formVal.value.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => {

      if(val.empty == true) {
        this.subService.addSubs(subData);
        this.isSubscribed = true;
      }else{
        this.isEmailError = true;

      }

    })
  }

}
