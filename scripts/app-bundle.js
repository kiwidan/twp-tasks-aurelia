define('app',["require", "exports", "aurelia-fetch-client", "./env"], function (require, exports, aurelia_fetch_client_1, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.activate = function () {
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
                    boards.push({
                        id: tasklist.id,
                        name: tasklist.name
                    });
                });
                _this.boards = boards;
                console.log(_this.boards);
            });
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFpQkE7UUFHRTtRQUFnQixDQUFDO1FBRWpCLHNCQUFRLEdBQVI7WUFBQSxpQkF5QkM7WUF4QkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFDaEMsSUFBTSxHQUFHLEdBQUcsYUFBVyxhQUFHLENBQUMsT0FBTywrQkFBMEIsYUFBRyxDQUFDLFNBQVMsK0JBQTRCLENBQUM7WUFFdEcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztpQkFDMUQ7YUFDRixDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxVQUFDLFFBQTRCO2dCQUNqQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBRWxCLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDVixFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7d0JBQ2YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO3FCQUNwQixDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILFVBQUM7SUFBRCxDQS9CQSxBQStCQyxJQUFBO0lBL0JZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCBlbnYgZnJvbSAnLi9lbnYnO1xuXG5pbnRlcmZhY2UgSVRhc2tsaXN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRhc2tsaXN0c1Jlc3BvbnNlIGV4dGVuZHMgUmVzcG9uc2Uge1xuICB0YXNrbGlzdHM6IElUYXNrbGlzdFtdO1xufVxuXG5pbnRlcmZhY2UgSUthbmJhbiB7XG4gIGJvYXJkczogSVRhc2tsaXN0W107XG59XG5cbmV4cG9ydCBjbGFzcyBBcHAgaW1wbGVtZW50cyBJS2FuYmFuIHtcbiAgYm9hcmRzO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2Vudi5jb21wYW55fS50ZWFtd29yay5jb20vcHJvamVjdHMvJHtlbnYucHJvamVjdElkfS90YXNrbGlzdHMuanNvbj9zdGF0dXM9YWxsYDtcblxuICAgIGNsaWVudC5mZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJBU0lDIFwiICsgd2luZG93LmJ0b2EoZW52LmtleSArICc6eHh4JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogSVRhc2tsaXN0c1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkcyA9IFtdO1xuXG4gICAgICAgIHJlc3BvbnNlLnRhc2tsaXN0cy5tYXAodGFza2xpc3QgPT4ge1xuICAgICAgICAgIGJvYXJkcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0YXNrbGlzdC5pZCxcbiAgICAgICAgICAgIG5hbWU6IHRhc2tsaXN0Lm5hbWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJvYXJkcyA9IGJvYXJkcztcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkcyk7XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./style.css\"></require><h1>${message}</h1></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\n    background: #B9BABC;\n    font-family: 'Roboto', sans-serif;\n    overflow-x: scroll;\n    margin: 0;\n}\n\n.kanban {\n    white-space: nowrap;\n    padding-top: 30px;\n}\n\n.board {\n    background: #F1F1F1;\n    width: 300px;\n    margin-left: 15px;\n    display: inline-block;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    border-radius: 4px;\n    white-space: normal;\n    vertical-align:top;\n}\n\n.board h2 {\n    padding: 20px 15px;\n    text-align: center;\n    margin: 0;\n    border-bottom: 1px solid #aaa;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #3b5574;\n    color: white;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.board:last-child {\n    margin-right: 15px;\n}\n\n.task-list {\n    padding: 10px;\n    list-style-type: none;\n    margin: 0;\n}\n\n.task {\n    background: white;\n    padding: 15px;\n    margin-top: 10px;\n    border-left: 4px solid #3b5574;\n    border-radius: 2px;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .3);\n    cursor: pointer;\n}\n\n.task-title {\n    margin-left: 8px;\n}\n\n.board-footer {\n    background: white;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    padding: 15px;\n    font-weight: bold;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.page-message {\n    background: white;\n    width: 62%;\n    margin: 30px auto;\n    border-radius: 4px;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    text-align: center;\n    font-size: 1.2em;\n    font-weight: 700;\n    padding: 30px;\n}\n\n.hidden {\n    display: none;\n}\n\n.error {\n    color: red;\n}"; });
//# sourceMappingURL=app-bundle.js.map