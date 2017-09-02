"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Config_1 = require("../shared/Config");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    //    private serverUrl = "https://httpbin.org/post";
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        console.dir(data);
        return this.http.post(Config_1.Config.apiUrl, { data: data }, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        // headers.append("Content-Type", "application/json");
        headers.append("Content-Type", "application/x-www-form-urlenc‌​oded");
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJDQUEwQztBQUMxQyxzQ0FBd0U7QUFFeEUsaUNBQStCO0FBRy9CO0lBRUEscURBQXFEO0lBQ25ELHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFDbEMsOEJBQVEsR0FBUixVQUFTLElBQVM7UUFFYixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRSxPQUFPLENBQUM7YUFDbEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUSwwQ0FBb0IsR0FBNUI7UUFDSyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLHNEQUFzRDtRQUN0RCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3JFLHNGQUFzRjtRQUN0RixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFyQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUllLFdBQUk7T0FIbkIsV0FBVyxDQXNCdkI7SUFBRCxrQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9zaGFyZWQvQ29uZmlnXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbi8vICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcbiAgcG9zdERhdGEoZGF0YTogYW55KSBcclxuICB7XHJcbiAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuYXBpVXJsLCB7IGRhdGEgfSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gIHJlcy5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmPigIzigItvZGVkXCIpO1xyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59Il19