import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chalisa',
  templateUrl: './chalisa.component.html',
  styleUrls: ['./chalisa.component.css']
})
export class ChalisaComponent implements OnInit {
  
  public value;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = (this.route.snapshot.paramMap.get('id'));
    this.value = id;
  }

}
