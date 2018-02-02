import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../index-services';
import { DashboardDetails } from '../model/dashboard.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    mutualFundList: DashboardDetails[] = [];
    totalSize = 0;
    dateUpdated = Date.now();
    isLoaded = false;

    constructor(private dashboardService: DashboardService) {
        console.log('isLoaded', this.isLoaded);
     }

    ngOnInit(): void {
        this.dashboardService.getMutualFundList().subscribe((resp) => {
            this.isLoaded = true;
            this.mutualFundList = resp;
            this.totalSize = this.mutualFundList.length;

        });
    }

}
