import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import env from './env';

export class App {
  constructor() { }

  activate() {
    let client = new HttpClient();

    client.fetch('package.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    }
  //   let client = new HttpClient();

  //   client.fetch(`https://${env.company}.teamwork.com/tasks/projects/${env.projectId}/tasklists.json?status=all`, {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': "BASIC " + window.btoa(env.key + ':xxx')
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //     });
  // }
}
