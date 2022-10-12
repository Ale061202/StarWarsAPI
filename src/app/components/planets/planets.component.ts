import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetsList: Planets[] = [];
  numPages = 0;

  constructor(private planetsService : PlanetsService) { }

  ngOnInit(): void {
  }

  getPlanetsPage(page: number){
    this.planetsService.getPlanets(page).subscribe(resp => {
      this.planetsList = resp.results;
      this.numPages = Math.ceil(resp.count / 10)
    })
  }

  counter() {
    return new Array(this.numPages);
  }

  getPhotoUrl(planets : Planets){
    let id = planets.url.split("/").reverse()[1];
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

}
