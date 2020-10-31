import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from '../ship/ship.service';
import { CrewMember } from '../model/person.model';

@Component({
  selector: 'app-crew-board',
  templateUrl: './crew-board.component.html',
  styleUrls: ['./crew-board.component.less']
})
export class CrewBoardComponent implements OnInit {

@Input()
crewBoard: Array<CrewMember>;

  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
  }

  public hire(person: CrewMember) {
	this.crewBoard.splice(this.crewBoard.indexOf(person), 1);
	this.shipService.hire(person);
  }

}
