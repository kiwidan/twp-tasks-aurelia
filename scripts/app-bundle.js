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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBQ0EsQ0FBQztRQUFELFVBQUM7SUFBRCxDQURBLEFBQ0MsSUFBQTtJQURZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('tasklist',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tasklist = (function () {
        function Tasklist(id, name) {
            this.id = id;
            this.name = name;
        }
        return Tasklist;
    }());
    exports.default = Tasklist;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBSUksa0JBQVksRUFBVSxFQUFFLElBQVk7WUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0wsZUFBQztJQUFELENBUkEsQUFRQyxJQUFBIiwiZmlsZSI6InRhc2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza2xpc3Qge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthbmJhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFVQTtRQUdFO1lBQUEsaUJBd0JDO1lBdkJDLElBQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLGFBQVcsYUFBRyxDQUFDLE9BQU8sK0JBQTBCLGFBQUcsQ0FBQyxTQUFTLCtCQUE0QixDQUFDO1lBRXRHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7aUJBQzFEO2FBQ0YsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQyxRQUE0QjtnQkFDakMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUVsQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQ3RDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILGFBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBNUJZLHdCQUFNIiwiZmlsZSI6ImthbmJhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCBlbnYgZnJvbSAnLi9lbnYnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuXG5cbmludGVyZmFjZSBJVGFza2xpc3RzUmVzcG9uc2UgZXh0ZW5kcyBSZXNwb25zZSB7XG4gIHRhc2tsaXN0czogQm9hcmRbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEthbmJhbiB7XG4gIGJvYXJkczogQm9hcmRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovLyR7ZW52LmNvbXBhbnl9LnRlYW13b3JrLmNvbS9wcm9qZWN0cy8ke2Vudi5wcm9qZWN0SWR9L3Rhc2tsaXN0cy5qc29uP3N0YXR1cz1hbGxgO1xuXG4gICAgY2xpZW50LmZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQkFTSUMgXCIgKyB3aW5kb3cuYnRvYShlbnYua2V5ICsgJzp4eHgnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBJVGFza2xpc3RzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gW107XG5cbiAgICAgICAgcmVzcG9uc2UudGFza2xpc3RzLm1hcCh0YXNrbGlzdCA9PiB7XG4gICAgICAgICAgYm9hcmRzLnB1c2goXG4gICAgICAgICAgICBuZXcgQm9hcmQodGFza2xpc3QuaWQsIHRhc2tsaXN0Lm5hbWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZHMgPSBib2FyZHM7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZHMpO1xuICAgICAgfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('board',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Board = (function () {
        function Board(id, name) {
            this.id = id;
            this.name = name;
        }
        return Board;
    }());
    exports.default = Board;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBSUksZUFBWSxFQUFVLEVBQUUsSUFBWTtZQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUEiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./style.css\"></require><require from=\"./kanban\"></require><kanban></kanban></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\n    background: #B9BABC;\n    font-family: 'Roboto', sans-serif;\n    overflow-x: scroll;\n    margin: 0;\n}\n\n.kanban {\n    white-space: nowrap;\n    padding-top: 30px;\n}\n\n.board {\n    background: #F1F1F1;\n    width: 300px;\n    margin-left: 15px;\n    display: inline-block;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    border-radius: 4px;\n    white-space: normal;\n    vertical-align:top;\n}\n\n.board h2 {\n    padding: 20px 15px;\n    text-align: center;\n    margin: 0;\n    border-bottom: 1px solid #aaa;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #3b5574;\n    color: white;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.board:last-child {\n    margin-right: 15px;\n}\n\n.task-list {\n    padding: 10px;\n    list-style-type: none;\n    margin: 0;\n}\n\n.task {\n    background: white;\n    padding: 15px;\n    margin-top: 10px;\n    border-left: 4px solid #3b5574;\n    border-radius: 2px;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .3);\n    cursor: pointer;\n}\n\n.task-title {\n    margin-left: 8px;\n}\n\n.board-footer {\n    background: white;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    padding: 15px;\n    font-weight: bold;\n    box-shadow: 0 0 5px 1px rgba(200, 200, 200, .5);\n}\n\n.page-message {\n    background: white;\n    width: 62%;\n    margin: 30px auto;\n    border-radius: 4px;\n    box-shadow: 2px 2px 5px 1px #aaa;\n    text-align: center;\n    font-size: 1.2em;\n    font-weight: 700;\n    padding: 30px;\n}\n\n.hidden {\n    display: none;\n}\n\n.error {\n    color: red;\n}"; });
define('text!kanban.html', ['module'], function(module) { module.exports = "<template><div class=\"kanban\"><div repeat.for=\"board of boards\" class=\"board\"><h2>${board.name}</h2><ul class=\"task-list\"></ul></div></div></template>"; });
define('text!board.html', ['module'], function(module) { module.exports = "<template><div class=\"board\"><h2>${tasklist.name}</h2><ul class=\"task-list\"></ul></div></template>"; });
//# sourceMappingURL=app-bundle.js.map