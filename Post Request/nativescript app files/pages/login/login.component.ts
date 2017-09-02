import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Button class="btn btn-primary btn-active" id="button" text="Tap me!" (tap)="onTap($event)"></Button>
    
    <!-- Your UI components go here -->
    
  `
})
export class LoginComponent {
  // Your TypeScript logic goes here  
  constructor(private router: Router) {
    
  }
  onTap($event){
    console.log("Hey....");
    this.router.navigate(["/pages/HomePage"]);
  }
}
