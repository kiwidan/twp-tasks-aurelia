import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GlobalAlert} from './events';

@inject(EventAggregator)
export class Error {
  public alerts: GlobalAlert[] = [];
  private globalAlertSubscription;

  constructor(private ea: EventAggregator) { }

  attached() {
    this.globalAlertSubscription = this.ea.subscribe(GlobalAlert, event => console.log('event received in global alert.ts'));
    
    // this.ea.subscribe(GlobalAlert, event => {
    //   this.alerts.push(event)
    //   console.log('here');
    // });
  }

  detached() {
    this.globalAlertSubscription.dispose();
  }
}