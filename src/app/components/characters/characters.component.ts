import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList: Characters[] = [];
  numPages = 0;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharactersPage(1);
  }

  getCharactersPage(page: number){
    this.charactersService.getCharacters(page).subscribe(resp => {
      this.charactersList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    })
  }

  counter(){
    return new Array(this.numPages);
  }

  getPhotoUrl(characters : Characters){
    let id = characters.image.split("/").reverse()[1];
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

}
