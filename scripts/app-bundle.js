var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api',["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client", "./env"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultHeaders = {
        'Accept': 'application/json',
        'Authorization': "BASIC " + window.btoa(env_1.default.key + ':xxx')
    };
    var Api = (function () {
        function Api(client) {
            this.client = client;
        }
        Api.prototype.toggleCompleted = function (id, completed) {
            var action = completed ? 'complete' : 'uncomplete';
            var url = "https://" + env_1.default.company + ".teamwork.com/tasks/" + id + "/" + action + ".json";
            return this.client.fetch(url, { method: 'PUT', headers: defaultHeaders });
        };
        return Api;
    }());
    Api = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], Api);
    exports.default = Api;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFNLGNBQWMsR0FBRztRQUNyQixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGVBQWUsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUMxRCxDQUFBO0lBR0QsSUFBcUIsR0FBRztRQUd0QixhQUFZLE1BQWtCO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFTSw2QkFBZSxHQUF0QixVQUF1QixFQUFFLEVBQUUsU0FBUztZQUNsQyxJQUFNLE1BQU0sR0FBRyxTQUFTLEdBQUcsVUFBVSxHQUFHLFlBQVksQ0FBQztZQUNyRCxJQUFNLEdBQUcsR0FBRyxhQUFXLGFBQUcsQ0FBQyxPQUFPLDRCQUF1QixFQUFFLFNBQUksTUFBTSxVQUFPLENBQUM7WUFFN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJvQixHQUFHO1FBRHZCLHFDQUFNLENBQUMsaUNBQVUsQ0FBQzt5Q0FJRyxpQ0FBVTtPQUhYLEdBQUcsQ0FhdkI7c0JBYm9CLEdBQUciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgZW52IGZyb20gJy4vZW52JztcblxuY29uc3QgZGVmYXVsdEhlYWRlcnMgPSB7XG4gICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICdBdXRob3JpemF0aW9uJzogXCJCQVNJQyBcIiArIHdpbmRvdy5idG9hKGVudi5rZXkgKyAnOnh4eCcpXG59XG5cbkBpbmplY3QoSHR0cENsaWVudClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNsaWVudDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUNvbXBsZXRlZChpZCwgY29tcGxldGVkKSB7XG4gICAgY29uc3QgYWN0aW9uID0gY29tcGxldGVkID8gJ2NvbXBsZXRlJyA6ICd1bmNvbXBsZXRlJztcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2Vudi5jb21wYW55fS50ZWFtd29yay5jb20vdGFza3MvJHtpZH0vJHthY3Rpb259Lmpzb25gO1xuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmZldGNoKHVybCwge21ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBRUEsQ0FBQztRQUFELFVBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xuXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('board',["require", "exports", "aurelia-fetch-client", "./task", "./env"], function (require, exports, aurelia_fetch_client_1, task_1, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Board = (function () {
        function Board(id, name) {
            var _this = this;
            this.id = id;
            this.name = name;
            this.loading = true;
            var client = new aurelia_fetch_client_1.HttpClient();
            client.fetch("https://" + env_1.default.company + ".teamwork.com/tasklists/" + this.id + "/tasks.json?includeCompletedTasks=true", {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "BASIC " + window.btoa(env_1.default.key + ':xxx')
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (response) {
                var tasks = [];
                response['todo-items'].map(function (task) {
                    tasks.push(new task_1.default(task.id, task.content, task.completed));
                });
                _this.tasks = tasks;
                _this.loading = false;
            });
        }
        return Board;
    }());
    exports.default = Board;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBO1FBTUUsZUFBWSxFQUFVLEVBQUUsSUFBWTtZQUFwQyxpQkF5QkM7WUF4QkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUdwQixJQUFNLE1BQU0sR0FBRyxJQUFJLGlDQUFVLEVBQUUsQ0FBQztZQUVoQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQVcsYUFBRyxDQUFDLE9BQU8sZ0NBQTJCLElBQUksQ0FBQyxFQUFFLDJDQUF3QyxFQUFFO2dCQUMzRyxPQUFPLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsZUFBZSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2lCQUMxRDthQUNGLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7Z0JBRXpCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO29CQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILFlBQUM7SUFBRCxDQWhDQSxBQWdDQyxJQUFBIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXNrczogVGFza1tdO1xuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBHbyBnZXQgdGFza3NcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgY2xpZW50LmZldGNoKGBodHRwczovLyR7ZW52LmNvbXBhbnl9LnRlYW13b3JrLmNvbS90YXNrbGlzdHMvJHt0aGlzLmlkfS90YXNrcy5qc29uP2luY2x1ZGVDb21wbGV0ZWRUYXNrcz10cnVlYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQkFTSUMgXCIgKyB3aW5kb3cuYnRvYShlbnYua2V5ICsgJzp4eHgnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzOiBUYXNrW10gPSBbXTtcblxuICAgICAgICByZXNwb25zZVsndG9kby1pdGVtcyddLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2suaWQsIHRhc2suY29udGVudCwgdGFzay5jb21wbGV0ZWQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('env',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var env = {
        company: 'paddymoran',
        key: 'cup420ears',
        projectId: '266471'
    };
    exports.default = env;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxJQUFNLEdBQUcsR0FBRztRQUNSLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLFNBQVMsRUFBRSxRQUFRO0tBQ3RCLENBQUM7SUFFRixrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiZW52LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW52ID0ge1xuICAgIGNvbXBhbnk6ICdwYWRkeW1vcmFuJyxcbiAgICBrZXk6ICdjdXA0MjBlYXJzJyxcbiAgICBwcm9qZWN0SWQ6ICcyNjY0NzEnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnY7XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('events',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalAlertType;
    (function (GlobalAlertType) {
        GlobalAlertType[GlobalAlertType["Error"] = 0] = "Error";
    })(GlobalAlertType || (GlobalAlertType = {}));
    var GlobalAlert = (function () {
        function GlobalAlert(type, message) {
            this.type = type;
            this.message = message;
        }
        return GlobalAlert;
    }());
    GlobalAlert.types = GlobalAlertType;
    exports.GlobalAlert = GlobalAlert;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxJQUFLLGVBRUo7SUFGRCxXQUFLLGVBQWU7UUFDaEIsdURBQUssQ0FBQTtJQUNULENBQUMsRUFGSSxlQUFlLEtBQWYsZUFBZSxRQUVuQjtJQUVEO1FBR0kscUJBQW1CLElBQXFCLEVBQVMsT0FBZTtZQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFpQjtZQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBSSxDQUFDO1FBQ3pFLGtCQUFDO0lBQUQsQ0FKQSxBQUlDO0lBSGlCLGlCQUFLLEdBQUcsZUFBZSxDQUFDO0lBRDdCLGtDQUFXIiwiZmlsZSI6ImV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gR2xvYmFsQWxlcnRUeXBlIHtcbiAgICBFcnJvclxufVxuXG5leHBvcnQgY2xhc3MgR2xvYmFsQWxlcnQge1xuICAgIHB1YmxpYyBzdGF0aWMgdHlwZXMgPSBHbG9iYWxBbGVydFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogR2xvYmFsQWxlcnRUeXBlLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('global-alert',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./events"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Error = (function () {
        function Error(ea) {
            this.ea = ea;
            this.alerts = [];
        }
        Error.prototype.attached = function () {
            this.globalAlertSubscription = this.ea.subscribe(events_1.GlobalAlert, function (event) { return console.log('event received in global alert.ts'); });
        };
        Error.prototype.detached = function () {
            this.globalAlertSubscription.dispose();
        };
        return Error;
    }());
    Error = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Error);
    exports.Error = Error;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEtBQUs7UUFJaEIsZUFBb0IsRUFBbUI7WUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7WUFIaEMsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFHUyxDQUFDO1FBRTVDLHdCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQVcsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO1FBTTNILENBQUM7UUFFRCx3QkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSxLQUFLO1FBRGpCLDBCQUFNLENBQUMsMENBQWUsQ0FBQzt5Q0FLRSwwQ0FBZTtPQUo1QixLQUFLLENBa0JqQjtJQWxCWSxzQkFBSyIsImZpbGUiOiJnbG9iYWwtYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0dsb2JhbEFsZXJ0fSBmcm9tICcuL2V2ZW50cyc7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEVycm9yIHtcbiAgcHVibGljIGFsZXJ0czogR2xvYmFsQWxlcnRbXSA9IFtdO1xuICBwcml2YXRlIGdsb2JhbEFsZXJ0U3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWE6IEV2ZW50QWdncmVnYXRvcikgeyB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5nbG9iYWxBbGVydFN1YnNjcmlwdGlvbiA9IHRoaXMuZWEuc3Vic2NyaWJlKEdsb2JhbEFsZXJ0LCBldmVudCA9PiBjb25zb2xlLmxvZygnZXZlbnQgcmVjZWl2ZWQgaW4gZ2xvYmFsIGFsZXJ0LnRzJykpO1xuICAgIFxuICAgIC8vIHRoaXMuZWEuc3Vic2NyaWJlKEdsb2JhbEFsZXJ0LCBldmVudCA9PiB7XG4gICAgLy8gICB0aGlzLmFsZXJ0cy5wdXNoKGV2ZW50KVxuICAgIC8vICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMuZ2xvYmFsQWxlcnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('kanban',["require", "exports", "aurelia-fetch-client", "./env", "./board"], function (require, exports, aurelia_fetch_client_1, env_1, board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Kanban = (function () {
        function Kanban() {
            var _this = this;
            this.loading = true;
            var client = new aurelia_fetch_client_1.HttpClient();
            var url = "https://" + env_1.default.company + ".teamwork.com/projects/" + env_1.default.projectId + "/tasklists.json?status=all";
            client.fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "BASIC " + window.btoa(env_1.default.key + ':xxx')
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (response) {
                var boards = [];
                response.tasklists.map(function (tasklist) {
                    boards.push(new board_1.default(tasklist.id, tasklist.name));
                });
                _this.boards = boards;
                _this.loading = false;
            });
        }
        return Kanban;
    }());
    exports.Kanban = Kanban;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFTQTtRQUlFO1lBQUEsaUJBd0JDO1lBdkJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLGFBQVcsYUFBRyxDQUFDLE9BQU8sK0JBQTBCLGFBQUcsQ0FBQyxTQUFTLCtCQUE0QixDQUFDO1lBRXRHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7aUJBQzFEO2FBQ0YsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQyxRQUE0QjtnQkFDakMsSUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO2dCQUUzQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQ3RDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILGFBQUM7SUFBRCxDQTdCQSxBQTZCQyxJQUFBO0lBN0JZLHdCQUFNIiwiZmlsZSI6ImthbmJhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cblxuaW50ZXJmYWNlIElUYXNrbGlzdHNSZXNwb25zZSBleHRlbmRzIFJlc3BvbnNlIHtcbiAgdGFza2xpc3RzOiBCb2FyZFtdO1xufVxuXG5leHBvcnQgY2xhc3MgS2FuYmFuIHtcbiAgYm9hcmRzOiBCb2FyZFtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2Vudi5jb21wYW55fS50ZWFtd29yay5jb20vcHJvamVjdHMvJHtlbnYucHJvamVjdElkfS90YXNrbGlzdHMuanNvbj9zdGF0dXM9YWxsYDtcblxuICAgIGNsaWVudC5mZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJBU0lDIFwiICsgd2luZG93LmJ0b2EoZW52LmtleSArICc6eHh4JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogSVRhc2tsaXN0c1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkczogQm9hcmRbXSA9IFtdO1xuXG4gICAgICAgIHJlc3BvbnNlLnRhc2tsaXN0cy5tYXAodGFza2xpc3QgPT4ge1xuICAgICAgICAgIGJvYXJkcy5wdXNoKFxuICAgICAgICAgICAgbmV3IEJvYXJkKHRhc2tsaXN0LmlkLCB0YXNrbGlzdC5uYW1lKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYm9hcmRzID0gYm9hcmRzO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('task',["require", "exports", "aurelia-event-aggregator", "aurelia-fetch-client", "./events", "aurelia-dependency-injection", "./api"], function (require, exports, aurelia_event_aggregator_1, aurelia_fetch_client_1, events_1, aurelia_dependency_injection_1, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Task = (function () {
        function Task(id, description, completed) {
            if (completed === void 0) { completed = false; }
            this.id = id;
            this.description = description;
            this.completed = completed;
            this.ea = aurelia_dependency_injection_1.Container.instance.get(aurelia_event_aggregator_1.EventAggregator);
            this.client = aurelia_dependency_injection_1.Container.instance.get(aurelia_fetch_client_1.HttpClient);
            this.api = aurelia_dependency_injection_1.Container.instance.get(api_1.default);
            this.globalAlertSubscription = this.ea.subscribe(events_1.GlobalAlert, function (event) { return console.log('event received in task.ts'); });
        }
        Task.prototype.detached = function () {
            this.globalAlertSubscription.dispose();
        };
        Task.prototype.toggleCompleted = function () {
            var _this = this;
            this.completed = !this.completed;
            this.api.toggleCompleted(this.id, this.completed)
                .then(function (response) {
                throw new Error('testing');
            })
                .catch(function (error) {
                _this.completed = !_this.completed;
                _this.ea.publish(new events_1.GlobalAlert(events_1.GlobalAlert.types.Error, "Failed to toggle task: \"" + _this.description + "\""));
            });
        };
        return Task;
    }());
    exports.default = Task;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBUUE7UUFVRSxjQUFZLEVBQVUsRUFBRSxXQUFtQixFQUFFLFNBQTBCO1lBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1lBQ3JFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyx3Q0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMENBQWUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsd0NBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlDQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLHdDQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQVcsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO1FBQ25ILENBQUM7UUFFRCx1QkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUM7UUFFRCw4QkFBZSxHQUFmO1lBQUEsaUJBV0M7WUFWQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUVqQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQzlDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDVixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBVyxDQUFDLG9CQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSw4QkFBMkIsS0FBSSxDQUFDLFdBQVcsT0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDSCxXQUFDO0lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQSIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQge0dsb2JhbEFsZXJ0fSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgZW52IGZyb20gJy4vZW52JztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCBBcGkgZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgcHVibGljIGlkOiBudW1iZXI7XG4gIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgY29tcGxldGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgZWE6IEV2ZW50QWdncmVnYXRvcjtcbiAgcHJpdmF0ZSBjbGllbnQ6IEh0dHBDbGllbnQ7XG4gIHByaXZhdGUgZ2xvYmFsQWxlcnRTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYXBpOiBBcGk7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgZGVzY3JpcHRpb246IHN0cmluZywgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuXG4gICAgdGhpcy5lYSA9IENvbnRhaW5lci5pbnN0YW5jZS5nZXQoRXZlbnRBZ2dyZWdhdG9yKTsgLy8gZ2V0IG9yIGNyZWF0ZSB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG1hbmFnZWQgYnkgdGhlIGNvbnRhaW5lci5cbiAgICB0aGlzLmNsaWVudCA9IENvbnRhaW5lci5pbnN0YW5jZS5nZXQoSHR0cENsaWVudCk7XG4gICAgdGhpcy5hcGkgPSBDb250YWluZXIuaW5zdGFuY2UuZ2V0KEFwaSk7XG5cbiAgICB0aGlzLmdsb2JhbEFsZXJ0U3Vic2NyaXB0aW9uID0gdGhpcy5lYS5zdWJzY3JpYmUoR2xvYmFsQWxlcnQsIGV2ZW50ID0+IGNvbnNvbGUubG9nKCdldmVudCByZWNlaXZlZCBpbiB0YXNrLnRzJykpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5nbG9iYWxBbGVydFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG5cbiAgICB0aGlzLmFwaS50b2dnbGVDb21wbGV0ZWQodGhpcy5pZCwgdGhpcy5jb21wbGV0ZWQpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGVzdGluZycpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB0aGlzLmVhLnB1Ymxpc2gobmV3IEdsb2JhbEFsZXJ0KEdsb2JhbEFsZXJ0LnR5cGVzLkVycm9yLCBgRmFpbGVkIHRvIHRvZ2dsZSB0YXNrOiBcIiR7dGhpcy5kZXNjcmlwdGlvbn1cImApKTtcbiAgICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./style.css\"></require><require from=\"./kanban\"></require><require from=\"./global-alert\"></require><global-alert></global-alert><kanban></kanban></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\n    background: #B9BABC;\n    font-family: 'Roboto', sans-serif;\n    overflow-x: scroll;\n    margin: 0;\n}\n\n.kanban {\n    white-space: nowrap;\n    padding-top: 30px;\n}\n\n.board {\n    background: #F1F1F1;\n    width: 300px;\n    margin-left: 15px;\n    display: inline-block;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    border-radius: 4px;\n    white-space: normal;\n    vertical-align:top;\n}\n\n.board h2 {\n    padding: 20px 15px;\n    text-align: center;\n    margin: 0;\n    border-bottom: 1px solid #aaa;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #3b5574;\n    color: white;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.board:last-child {\n    margin-right: 15px;\n}\n\n.task-list {\n    padding: 10px;\n    list-style-type: none;\n    margin: 0;\n}\n\n.task {\n    background: white;\n    padding: 15px;\n    margin-top: 10px;\n    border-left: 4px solid #3b5574;\n    border-radius: 2px;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .3);\n    cursor: pointer;\n}\n\n.task-title {\n    margin-left: 8px;\n}\n\n.board-footer {\n    background: white;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    padding: 15px;\n    font-weight: bold;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.page-message {\n    background: white;\n    width: 62%;\n    margin: 30px auto;\n    border-radius: 4px;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    text-align: center;\n    font-size: 1.2em;\n    font-weight: 700;\n    padding: 30px;\n}\n\n.hidden {\n    display: none;\n}\n\n.error {\n    color: red;\n}"; });
define('text!global-alert.html', ['module'], function(module) { module.exports = "<template>${alerts}<div repeat.for=\"alert of alerts\">${alert.description}</div></template>"; });
define('text!kanban.html', ['module'], function(module) { module.exports = "<template><div class=\"kanban\"><div class=\"page-message\" show.bind=\"loading\">Loading...</div><div repeat.for=\"board of boards\" class=\"board\"><h2>${board.name}</h2><ul class=\"task-list ${board.tasks.length ? '' : 'hidden'}\"><li class=\"task\" repeat.for=\"task of board.tasks\" click.delegate=\"task.toggleCompleted()\"><input type=\"checkbox\" onchange=\"this.onChange\" checked.bind=\"task.completed\"> ${task.description}</li></ul><div class=\"board-footer ${board.loading ? 'loading' : ''}\"><span if.bind=\"board.loading\">Loading...</span> <span if.bind=\"!board.loading\">${board.tasks.length} ${board.tasks.length === 1 ? 'task' : 'tasks'}</span></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map