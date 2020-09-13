import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-travel-menu',
  templateUrl: './travel-menu.component.html',
  styleUrls: ['./travel-menu.component.less']
})
export class TravelMenuComponent implements OnInit {
	@Input()
	location: string;

	public availableLocations = ["Minerva", "Vulcan"];
	public travelForm;

  constructor() { }

  ngOnInit(): void {

	this.travelForm = new FormGroup({
		location: new FormControl("")
	});
  }

  takeOff() {
	  console.log("goooooo to", this.travelForm.get("location").value);
  }

}
