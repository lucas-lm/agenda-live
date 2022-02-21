import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/models/Live.model';
import { LiveService } from 'src/app/shared/services/live.service';

@Component({
  selector: 'app-list-live',
  templateUrl: './list-live.component.html',
  styleUrls: ['./list-live.component.css']
})
export class ListLiveComponent implements OnInit {

  livesPrevious!: Live[];
  livesNext!: Live[];

  constructor(
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives()
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious)
    })

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesNext)
    })
  }

}
