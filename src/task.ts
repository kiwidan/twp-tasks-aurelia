import {HttpClient} from 'aurelia-fetch-client';
import env from './env';

let client = new HttpClient();

export default class Task {
  id;
  description;
  completed;

  constructor(id: number, description: string, completed: boolean = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;

    const action = this.completed ? 'complete' : 'uncomplete';
    const url = `https://${env.company}.teamwork.com/tasks/${this.id}/${action}.json`

    client.fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': "BASIC " + window.btoa(env.key + ':xxx')
        }
      })
      .catch(error => {
        this.completed = !this.completed;
        // display error or something
      })
  }
}