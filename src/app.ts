import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import env from './env';
import Tasklist from './tasklist';


interface ITasklistsResponse extends Response {
  tasklists: Tasklist[];
}

export class App {
  boards: Tasklist[];

  constructor() { }

  activate() {
    const client = new HttpClient();
    const url = `https://${env.company}.teamwork.com/projects/${env.projectId}/tasklists.json?status=all`;

    client.fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Authorization': "BASIC " + window.btoa(env.key + ':xxx')
        }
      })
      .then(response => response.json())
      .then((response: ITasklistsResponse) => {
        const boards = [];

        response.tasklists.map(tasklist => {
          boards.push(
            new Tasklist(tasklist.id, tasklist.name)
          );
        });

        this.boards = boards;

        console.log(this.boards);
      });
  }
}
