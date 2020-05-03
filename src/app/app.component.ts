import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemo';

  data =[  
    {name:'Hanuman Chalisa',img:'/assets/photo1.jpg',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {name:'Durga Chalisa',img:'/assets/photo2.jpg',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {name:'Shiv Chalisa',img:'/assets/photo3.jpg',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {name:'Ganesh Chalisa',img:'/assets/photo4.jpg',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
    {name:'Vishnu Chalisa',img:'/assets/photo5.jpg',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'}
]  
;


  
}
