"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    // Your TypeScript logic goes here  
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.onTap = function ($event) {
        console.log("Hey....");
        this.router.navigate(["/pages/HomePage"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <Button class=\"btn btn-primary btn-active\" id=\"button\" text=\"Tap me!\" (tap)=\"onTap($event)\"></Button>\n    \n    <!-- Your UI components go here -->\n    \n  "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQVl6QztJQUNFLG9DQUFvQztJQUNwQyx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUNELDhCQUFLLEdBQUwsVUFBTSxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBUlUsY0FBYztRQVYxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGlQQU1UO1NBQ0YsQ0FBQzt5Q0FHNEIsZUFBTTtPQUZ2QixjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTXkgQXBwXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiBpZD1cImJ1dHRvblwiIHRleHQ9XCJUYXAgbWUhXCIgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCI+PC9CdXR0b24+XHJcbiAgICBcclxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XHJcbiAgICBcclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZSAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgXHJcbiAgfVxyXG4gIG9uVGFwKCRldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhleS4uLi5cIik7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGFnZXMvSG9tZVBhZ2VcIl0pO1xyXG4gIH1cclxufVxyXG4iXX0=