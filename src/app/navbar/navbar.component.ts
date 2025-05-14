import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuPontok =[
    {text:"Termékek", route:"productslist"},
    {text:"Akciók", route:"akcio"},
    {text:"Kedvenceim", route:"kedvenceim"},
    {text:"Kijelentkezés", route:"logout"},
  ]

}
