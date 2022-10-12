import { Component, OnInit } from '@angular/core';
import { StarShip } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipsList: StarShip[] = [];
  numPages = 0;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.getStarShipsPage(1)
  }

  getStarShipsPage(page: number) {
    this.starshipsService.getStarShips(page).subscribe(resp =>  {
      this.starshipsList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  getPhotoUrl(starship : StarShip){
    let id = starship.url.split("/").reverse()[1];
    console.log(id);
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

}
