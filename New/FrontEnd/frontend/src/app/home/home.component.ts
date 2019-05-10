import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private route:Router) { }
  
  ngOnInit() {
    this.verif_token();
  }
  verif_token(){
    const token =localStorage.getItem('mean-token');
    console.log(token);
    if(!token){
      this.route.navigateByUrl('/');
    }
  }
}
