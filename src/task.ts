import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-fetch-client';
import {GlobalAlert} from './events';
import env from './env';
import {Container} from 'aurelia-dependency-injection';
import Api from './api';

export default class Task {
  public id: number;
  public description: string;
  public completed: boolean;

  private ea: EventAggregator;
  private client: HttpClient;
  private globalAlertSubscription;
  private api: Api;

  constructor(id: number, description: string, completed: boolean = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;

    this.ea = Container.instance.get(EventAggregator); // get or create the singleton instance managed by the container.
    this.client = Container.instance.get(HttpClient);
    this.api = Container.instance.get(Api);

    this.globalAlertSubscription = this.ea.subscribe(GlobalAlert, event => console.log('event received in task.ts'));
  }

  detached() {
    this.globalAlertSubscription.dispose();
  }

  toggleCompleted() {
    this.completed = !this.completed;

    this.api.toggleCompleted(this.id, this.completed)
      .then(response => {
        throw new Error('testing');
      })
      .catch(error => {
        this.completed = !this.completed;
        this.ea.publish(new GlobalAlert(GlobalAlert.types.Error, `Failed to toggle task: "${this.description}"`));
      });
  }
}