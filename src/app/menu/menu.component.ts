import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems;
  showSubmenuModes: any;
  showFirstSubmenuModes: any;

  constructor(private router: Router) {
    this.menuItems = this.setMenuItems();
    this.showSubmenuModes = [{
      name: 'onHover',
      delay: { show: 0, hide: 500 }
  }, {
      name: 'onClick',
      delay: { show: 0, hide: 300 }
  }];
    this.showFirstSubmenuModes = this.showSubmenuModes[1];
  }

  ngOnInit() { }

  itemClick(event) {
    if (event.itemData.route === undefined) {
      return;
    }
    this.router.navigate(['/' + event.itemData.route]);
  }

  private setMenuItems() {
    return [
      { name: 'HOME',
        route: 'home' },
      { name: 'RESOURCES',
        items: [{
          name: 'CAMERA',
          route: 'camera'
        }, {
          name: 'POSITION',
          route: 'position'
        }] },
      { name: 'INFO' },
    ];
  }
}
