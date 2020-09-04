import { Component, OnInit, Input } from '@angular/core';



export class Person {
	public name: string;
	public skills: Array<Skill> = [];
	public happiness: number;
	private randomName(): string {
		return "Jane Doe";
	}
	/**
	 * change so that values tend to be more specialized
	 */
	private generateRandomSkills(): Array<Skill> {
		return Object.values(SkillName).filter(value => typeof value === 'string').map(element => {
			
			const skill: Skill = {
				name: element as SkillName,
				level: Math.floor(Math.random() * 5)
			};
			return skill;
		});

	}
	constructor() {
		this.name = this.randomName();
		this.skills = this.generateRandomSkills();
	}
}

export class CrewMember extends Person {

	public salary: number;

	private calculateSalary(): number {
		return Math.ceil(this.skills.reduce(
			(acc: number, curr: Skill) => acc + curr.level * curr.level * curr.level,
		0) / 2)
	};

	constructor() {
		super();
		this.salary = this.calculateSalary()
	}
}

@Component({
	selector: 'app-crew-member',
	templateUrl: './crew-member.component.html',
	styleUrls: ['./crew-member.component.less']
  })
export class CrewMemberComponent implements OnInit {
	@Input()
	person: CrewMember;

	constructor() {

	}

  ngOnInit(): void {
	  
  }

}


export type Skill = {
	name: SkillName;
	level: number;
}

export enum SkillName {
	"Navigator",
	"Cook",
	"Engineer",
	"Pilot"
}