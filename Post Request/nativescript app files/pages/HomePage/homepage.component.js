"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var Config_1 = require("../../shared/Config");
var HomePageComponent = (function () {
    function HomePageComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // Your TypeScript logic goes here
        this.ProjectList = [];
        userService.postData({ LeaderId: Config_1.Config.LeaderId }).subscribe(function (res) {
            console.dir(res);
            alert(res);
        }, function (err) { return console.log("Something went wrong :" + err); });
    }
    HomePageComponent.prototype.onTap = function ($event) {
        console.log("Hey....");
        this.router.navigate([""]);
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: "HomePage",
            providers: [user_service_1.UserService],
            template: "\n  <StackLayout>\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <Button class=\"btn btn-primary btn-active\" id=\"button\" text=\"HomePage!\" (tap)=\"onTap($event)\"></Button>\n    <!-- Your UI components go here -->\n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6Qyw0REFBd0Q7QUFDeEQsOENBQTJDO0FBYTNDO0lBR0UsMkJBQW9CLFdBQXVCLEVBQVMsTUFBYTtRQUE3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQU87UUFGakUsa0NBQWtDO1FBQ2xDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUU5QixXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUMsUUFBUSxFQUFDLGVBQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBQyxHQUFHLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFDLEdBQUcsQ0FBQyxFQUF6QyxDQUF5QyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBbkJVLGlCQUFpQjtRQVg3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixRQUFRLEVBQUUsNFFBTVQ7U0FDRixDQUFDO3lDQUlnQywwQkFBVyxFQUFnQixlQUFNO09BSHRELGlCQUFpQixDQW9CN0I7SUFBRCx3QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9Db25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkhvbWVQYWdlXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLCBcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxTdGFja0xheW91dD5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cclxuICAgIDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZVwiIGlkPVwiYnV0dG9uXCIgdGV4dD1cIkhvbWVQYWdlIVwiICh0YXApPVwib25UYXAoJGV2ZW50KVwiPjwvQnV0dG9uPlxyXG4gICAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VDb21wb25lbnQge1xyXG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcclxuICBQcm9qZWN0TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6Um91dGVyKXtcclxuICAgIHVzZXJTZXJ2aWNlLnBvc3REYXRhKHtMZWFkZXJJZDpDb25maWcuTGVhZGVySWR9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xyXG4gICAgICBhbGVydChyZXMpO1xyXG4gICAgfSxcclxuICAgIChlcnIpPT5jb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIDpcIitlcnIpXHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBvblRhcCgkZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coXCJIZXkuLi4uXCIpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19