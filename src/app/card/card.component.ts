import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public parentData;

  constructor(private router : Router) {
   
   }

  ngOnInit(): void {
   
  }
test(movie){
  this.router.navigate(['/home',movie.id]);
  console.log(movie.id);
}
  

}
