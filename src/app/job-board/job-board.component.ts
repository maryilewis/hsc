import { Component, OnInit } from '@angular/core';
import { Port } from '../model/everything-else.model';
import { Good } from '../model/shop.model';


@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.less']
})
export class JobBoardComponent implements OnInit {

	public jobs: Array<Job> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export class Job {
	location: Port;
	deliverables: Array<{good: Good, count: number}>;
	reward: number;
}