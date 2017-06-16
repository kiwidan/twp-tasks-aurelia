import {inject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import env from './env';

const defaultHeaders = {
  'Accept': 'application/json',
  'Authorization': "BASIC " + window.btoa(env.key + ':xxx')
}

@inject(HttpClient)
export default class Api {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  public toggleCompleted(id, completed) {
    const action = completed ? 'complete' : 'uncomplete';
    const url = `https://${env.company}.teamwork.com/tasks/${id}/${action}.json`;

    return this.client.fetch(url, {method: 'PUT', headers: defaultHeaders});
  }
}