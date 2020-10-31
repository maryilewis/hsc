import { Component, OnInit, Input } from '@angular/core';
import { CrewMember, Skill } from '../model/person.model';




@Component({
	selector: 'app-crew-member',
	templateUrl: './crew-member.component.html',
	styleUrls: ['./crew-member.component.less']
  })
export class CrewMemberComponent implements OnInit {
	@Input()
	person: CrewMember;

	get tagline(): string {
		const highestSkill: Skill = this.person.skills.sort((a, b) => {
			return b.level - a.level;
		})[0];

		return `Level ${highestSkill.level} ${highestSkill.name}`
	}

	constructor() {

	}

  ngOnInit(): void {
	  
  }

}