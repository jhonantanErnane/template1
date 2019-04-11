import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: string;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(d => {
      // console.log(d);
      this.item = d.nameIcon;
    });
  }

  ngOnInit() {
  }

}
