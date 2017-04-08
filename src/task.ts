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
}