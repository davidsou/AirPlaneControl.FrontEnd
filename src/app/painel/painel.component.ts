import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

 @Input() titulo ;
 @Input() col ;
 @Input() tipo = "info" ;

  constructor() { }

  ngOnInit() {
  }

}
