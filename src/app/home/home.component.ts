import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data =[  
    {id:'hanuman-chalisa',name:'Hanuman Chalisa',img:'./assets/photo1.jpg',cast:'The Hanuman Chalisa is a Hindu devotional hymn (stotra) addressed to Lord Hanuman .It has been authored by 16th-century poet Tulsidas in the Awadhi language, and is his best known text apart from the Ramcharitmanas.',releaseDate:'March 4, 2016'},  
    {id:'durga-chalisa',name:'Durga Chalisa',img:'./assets/photo2.jpg',cast:'Durga is a principal and popular form of the Hindu Goddess. She is a goddess of war, the warrior form of Parvati, whose mythology centres around combating evils forces that threaten peace.',releaseDate:'March 25, 2016'},  
    {id:'shiv-chalisa',name:'Shiv Chalisa',img:'./assets/photo3.jpg',cast:'Shiv Chalisa  is a devotional stotra dedicated to Hindu deity, Lord Shiva  Adapted from the Shiva Purana',releaseDate:'May 6, 2016'},  
    {id:'ganesh-chalisa',name:'Ganesh Chalisa',img:'./assets/photo4.jpg',cast:'Ganesh Chalisa is a devotional song based on Lord Ganesh as the model devotee of the Hindu. It is a poem written in the Awadhi language. ',releaseDate:'May 27, 2016'}
    
]  
  constructor() { }

  ngOnInit(): void {
  }

}
