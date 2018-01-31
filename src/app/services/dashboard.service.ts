import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { HEROKU_DASHBOARD_URL } from '../constants/endpoints.constant';
import { DashboardDetails } from '../model/dashboard.model';
import { dashboardData } from '../test-data/dashboard.test-data';

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }

    getMutualFundList(): Observable<DashboardDetails[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestop = new RequestOptions({ headers });

        // return dashboardData as DashboardDetails[];

        return this.http.get(HEROKU_DASHBOARD_URL + '/mutualfund/getAllMutualFund').map((response: Response) => {
            return response.json() as DashboardDetails[];
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
