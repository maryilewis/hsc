import { Component, OnInit } from '@angular/core';
import { CrewMember } from '../model/person.model';


@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.less']
})
export class PortComponent implements OnInit {

	public crewBoard: Array<CrewMember> = [];

  constructor() {

  }

  ngOnInit(): void {
	for(let i=0; i < 4; i++) {
		this.crewBoard.push(new CrewMember());
	}
	console.log("crew:", this.crewBoard);

  }

}
