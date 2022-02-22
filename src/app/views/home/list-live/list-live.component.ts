import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    public liveService: LiveService,
    public sanitazer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLives()
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitazer
          .bypassSecurityTrustResourceUrl(live.liveLink.replace('watch?v=', 'embed\/'));
      });
      console.log(this.livesPrevious)
    })

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      this.livesNext.forEach(live => {
        live.urlSafe = this.sanitazer
          .bypassSecurityTrustResourceUrl(live.liveLink.replace('watch?v=', 'embed\/'))
      })
      console.log(this.livesNext)
    })
  }

}
