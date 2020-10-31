
/**
 * Person data
 */
export class Person {


	public name: string;
	public skills: Array<Skill> = [];
	public happiness: number;
	/**
	 * modified from https://j11y.io/javascript/random-word-generator/
	 */
	private generateRandomName(): string {
		let length: number = 4;
		let consonants: string = 'bbbbcdfghjkllllmnnnnpqrrrrsttttvwxyz';
		let vowels: string = 'aeiou';
		let rand = function(limit: number): number {
			return Math.floor(Math.random() * limit);
		};
		let word: string = '';

		for (let i = 0; i < length; i++) {
			let randConsonant = consonants[rand(consonants.length)];
			let randVowel = vowels[rand(vowels.length)];
			word += randConsonant;
			word += randVowel;
		}
		// randomly chop off beginning and end
		let random1 = Math.floor(Math.random() * 5);
		let random2 = Math.floor(Math.random() * 2);
		word = word.slice(random1, word.length - random2);
		// capitalize
		word = word.charAt(0).toUpperCase() + word.slice(1);

		return word;
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
		this.name = this.generateRandomName();
		this.skills = this.generateRandomSkills();
	}
}

/**
 * A crewmember is a person who gets paid
 */
export class CrewMember extends Person {

	public salary: number;

	private calculateSalary(): number {
		return Math.ceil(this.skills.reduce(
			(acc: number, curr: Skill) => acc + curr.level * curr.level,
		0) / 4)
	};

	constructor() {
		super();
		this.salary = this.calculateSalary()
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