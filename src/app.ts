import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import env from './env';

interface ITasklist {
  id: number;
  name: string;
}

interface ITasklistsResponse extends Response {
  tasklists: ITasklist[];
}

interface IKanban {
  boards: ITasklist[];
}

export class App implements IKanban {
  boards;

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
          boards.push({
            id: tasklist.id,
            name: tasklist.name
          })
        });

        this.boards = boards;

        console.log(this.boards);
      });
  }
}
