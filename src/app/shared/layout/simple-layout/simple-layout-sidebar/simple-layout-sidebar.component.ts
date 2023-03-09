import { Component, OnInit } from '@angular/core';
import { menuItems} from '../../../utils/constants';

@Component({
  selector: 'app-simple-layout-sidebar',
  templateUrl: './simple-layout-sidebar.component.html',
  styleUrls: ['./simple-layout-sidebar.component.scss']
})
export class SimpleLayoutSidebarComponent implements OnInit {

    showFiller = false;
    menuItems: any = menuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
