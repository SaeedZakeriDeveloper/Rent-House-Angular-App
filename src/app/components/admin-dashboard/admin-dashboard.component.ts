import { Component } from '@angular/core';
import {House} from "../../models/house";
import {Bedroom} from "../../models/bedroom";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  dataSource: Array<House>=[];
  allBedrooms:Array<Bedroom>=[];

}
