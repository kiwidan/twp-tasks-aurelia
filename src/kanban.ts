import {HttpClient} from 'aurelia-fetch-client';
import env from './env';
import Board from './board';


interface ITasklistsResponse extends Response {
  tasklists: Board[];
}

export class Kanban {
  boards: Board[];

  constructor() {
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
        const boards: Board[] = [];

        response.tasklists.map(tasklist => {
          boards.push(
            new Board(tasklist.id, tasklist.name)
          );
        });

        this.boards = boards;

        console.log(this.boards);
      });
  }
}