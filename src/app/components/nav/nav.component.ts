import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mcs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @Input() sections;

    @Output() closeMenu = new EventEmitter();

    constructor(private location: Location) { }

    ngOnInit(): void {
    }

    //active class
    isActive(location: String) {
        return this.location.path().split("?")[0].split("/").some(element => element == location);
    }

}
