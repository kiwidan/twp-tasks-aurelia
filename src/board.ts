import {HttpClient} from 'aurelia-fetch-client';
import Task from './task';
import env from './env';

export default class Board {
  id: number;
  name: string;
  tasks: Task[];
  loading: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.loading = true;

    // Go get tasks
    const client = new HttpClient();

    client.fetch(`https://${env.company}.teamwork.com/tasklists/${this.id}/tasks.json?includeCompletedTasks=true`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': "BASIC " + window.btoa(env.key + ':xxx')
        }
      })
      .then(response => response.json())
      .then((response) => {
        const tasks: Task[] = [];

        response['todo-items'].map(task => {
          tasks.push(new Task(task.id, task.content, task.completed));
        });

        this.tasks = tasks;
        this.loading = false;
      });
  }
}