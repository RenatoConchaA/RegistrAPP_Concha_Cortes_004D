import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-select-registro',
  templateUrl: './select-registro.page.html',
  styleUrls: ['./select-registro.page.scss'],
})
export class SelectRegistroPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
