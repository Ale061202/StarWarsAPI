import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicles[] = [];
  numPages = 0;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclesPage(1);
  }

  getVehiclesPage(page: number) {
    this.vehiclesService.getVehicles(page).subscribe(resp =>  {
      this.vehiclesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  getPhotoUrl(vehicles : Vehicles){
    let id = vehicles.url.split("/").reverse()[1];
    console.log(id);
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

}
