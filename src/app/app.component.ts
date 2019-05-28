import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppData } from './pages/commons/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  appData: AppData;

  private _appDataSubscription: Subscription;

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/campaign.json').subscribe((res: AppData) => {
      this.appData = res;
    });
  }

  ngOnDestroy(): void {
    if (this._appDataSubscription) {
      this._appDataSubscription.unsubscribe();
    }
  }
}
