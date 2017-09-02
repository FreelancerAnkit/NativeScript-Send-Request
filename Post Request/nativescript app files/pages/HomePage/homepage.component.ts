import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";
import {Config} from "../../shared/Config";

@Component({
  selector: "HomePage",
  providers: [UserService], 
  template: `
  <StackLayout>
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Button class="btn btn-primary btn-active" id="button" text="HomePage!" (tap)="onTap($event)"></Button>
    <!-- Your UI components go here -->
    </StackLayout>
  `
})
export class HomePageComponent {
  // Your TypeScript logic goes here
  ProjectList: Array<Object> = [];
  constructor(private userService:UserService,private router:Router){
    userService.postData({LeaderId:Config.LeaderId}).subscribe((res) => {
      console.dir(res);
      alert(res);
    },
    (err)=>console.log("Something went wrong :"+err)
    );
  }
  
  onTap($event){
    console.log("Hey....");
    this.router.navigate([""]);
  }
  
  ngOnInit() {
    
  }
}
