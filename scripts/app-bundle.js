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

define('kanban',["require", "exports", "aurelia-fetch-client", "./env", "./board"], function (require, exports, aurelia_fetch_client_1, env_1, board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Kanban = (function () {
        function Kanban() {
            var _this = this;
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
                console.log(_this.boards);
            });
        }
        return Kanban;
    }());
    exports.Kanban = Kanban;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFTQTtRQUdFO1lBQUEsaUJBd0JDO1lBdkJDLElBQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLGFBQVcsYUFBRyxDQUFDLE9BQU8sK0JBQTBCLGFBQUcsQ0FBQyxTQUFTLCtCQUE0QixDQUFDO1lBRXRHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7aUJBQzFEO2FBQ0YsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQyxRQUE0QjtnQkFDakMsSUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO2dCQUUzQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQ3RDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILGFBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBNUJZLHdCQUFNIiwiZmlsZSI6ImthbmJhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cblxuaW50ZXJmYWNlIElUYXNrbGlzdHNSZXNwb25zZSBleHRlbmRzIFJlc3BvbnNlIHtcbiAgdGFza2xpc3RzOiBCb2FyZFtdO1xufVxuXG5leHBvcnQgY2xhc3MgS2FuYmFuIHtcbiAgYm9hcmRzOiBCb2FyZFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vJHtlbnYuY29tcGFueX0udGVhbXdvcmsuY29tL3Byb2plY3RzLyR7ZW52LnByb2plY3RJZH0vdGFza2xpc3RzLmpzb24/c3RhdHVzPWFsbGA7XG5cbiAgICBjbGllbnQuZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCQVNJQyBcIiArIHdpbmRvdy5idG9hKGVudi5rZXkgKyAnOnh4eCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2U6IElUYXNrbGlzdHNSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZHM6IEJvYXJkW10gPSBbXTtcblxuICAgICAgICByZXNwb25zZS50YXNrbGlzdHMubWFwKHRhc2tsaXN0ID0+IHtcbiAgICAgICAgICBib2FyZHMucHVzaChcbiAgICAgICAgICAgIG5ldyBCb2FyZCh0YXNrbGlzdC5pZCwgdGFza2xpc3QubmFtZSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJvYXJkcyA9IGJvYXJkcztcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkcyk7XG4gICAgICB9KTtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('task',["require", "exports", "aurelia-fetch-client", "./env"], function (require, exports, aurelia_fetch_client_1, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = new aurelia_fetch_client_1.HttpClient();
    var Task = (function () {
        function Task(id, description, completed) {
            if (completed === void 0) { completed = false; }
            this.id = id;
            this.description = description;
            this.completed = completed;
        }
        Task.prototype.toggleCompleted = function () {
            var _this = this;
            this.completed = !this.completed;
            var action = this.completed ? 'complete' : 'uncomplete';
            var url = "https://" + env_1.default.company + ".teamwork.com/tasks/" + this.id + "/" + action + ".json";
            client.fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': "BASIC " + window.btoa(env_1.default.key + ':xxx')
                }
            })
                .catch(function (error) {
                _this.completed = !_this.completed;
            });
        };
        return Task;
    }());
    exports.default = Task;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7SUFFOUI7UUFLRSxjQUFZLEVBQVUsRUFBRSxXQUFtQixFQUFFLFNBQTBCO1lBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1lBQ3JFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsQ0FBQztRQUVELDhCQUFlLEdBQWY7WUFBQSxpQkFpQkM7WUFoQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzFELElBQU0sR0FBRyxHQUFHLGFBQVcsYUFBRyxDQUFDLE9BQU8sNEJBQXVCLElBQUksQ0FBQyxFQUFFLFNBQUksTUFBTSxVQUFPLENBQUE7WUFFakYsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztpQkFDMUQ7YUFDRixDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1YsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFFbkMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0gsV0FBQztJQUFELENBN0JBLEFBNkJDLElBQUEiLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5cbmxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgaWQ7XG4gIGRlc2NyaXB0aW9uO1xuICBjb21wbGV0ZWQ7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgZGVzY3JpcHRpb246IHN0cmluZywgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5jb21wbGV0ZWQgPyAnY29tcGxldGUnIDogJ3VuY29tcGxldGUnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovLyR7ZW52LmNvbXBhbnl9LnRlYW13b3JrLmNvbS90YXNrcy8ke3RoaXMuaWR9LyR7YWN0aW9ufS5qc29uYFxuXG4gICAgY2xpZW50LmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQkFTSUMgXCIgKyB3aW5kb3cuYnRvYShlbnYua2V5ICsgJzp4eHgnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gICAgICAgIC8vIGRpc3BsYXkgZXJyb3Igb3Igc29tZXRoaW5nXG4gICAgICB9KVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!style.css', ['module'], function(module) { module.exports = "body {\n    background: #B9BABC;\n    font-family: 'Roboto', sans-serif;\n    overflow-x: scroll;\n    margin: 0;\n}\n\n.kanban {\n    white-space: nowrap;\n    padding-top: 30px;\n}\n\n.board {\n    background: #F1F1F1;\n    width: 300px;\n    margin-left: 15px;\n    display: inline-block;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    border-radius: 4px;\n    white-space: normal;\n    vertical-align:top;\n}\n\n.board h2 {\n    padding: 20px 15px;\n    text-align: center;\n    margin: 0;\n    border-bottom: 1px solid #aaa;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #3b5574;\n    color: white;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.board:last-child {\n    margin-right: 15px;\n}\n\n.task-list {\n    padding: 10px;\n    list-style-type: none;\n    margin: 0;\n}\n\n.task {\n    background: white;\n    padding: 15px;\n    margin-top: 10px;\n    border-left: 4px solid #3b5574;\n    border-radius: 2px;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .3);\n    cursor: pointer;\n}\n\n.task-title {\n    margin-left: 8px;\n}\n\n.board-footer {\n    background: white;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    padding: 15px;\n    font-weight: bold;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.page-message {\n    background: white;\n    width: 62%;\n    margin: 30px auto;\n    border-radius: 4px;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    text-align: center;\n    font-size: 1.2em;\n    font-weight: 700;\n    padding: 30px;\n}\n\n.hidden {\n    display: none;\n}\n\n.error {\n    color: red;\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./style.css\"></require><require from=\"./kanban\"></require><kanban></kanban></template>"; });
define('text!kanban.html', ['module'], function(module) { module.exports = "<template><div class=\"kanban\"><div repeat.for=\"board of boards\" class=\"board\"><h2>${board.name}</h2><ul class=\"task-list\"><li class=\"task\" repeat.for=\"task of board.tasks\" click.delegate=\"task.toggleCompleted()\"><input type=\"checkbox\" onchange=\"this.onChange\" checked.bind=\"task.completed\"> ${task.description}</li></ul><div class=\"board-footer loading\" if.bind=\"board.loading\">Loading...</div><div class=\"board-footer\" if.bind=\"!board.loading\">${board.tasks.length} ${board.tasks.length === 1 ? 'task' : 'tasks'}</div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map