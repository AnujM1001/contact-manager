import { DataCallsService } from './../services/data-calls.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: DataCallsService) { }

  @ViewChild('searchText') searchText: ElementRef<any>;

  searchTrigger;

  ngOnInit() {
    this.searchTrigger = fromEvent(this.searchText.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      debounceTime(1000)
    );
    this.searchTrigger.subscribe((res) => {
      this.search(res);
    });
  }

  search(res) {
    console.log(res);
    this.http.emitsearchTriggerEvent(res);
  }

}
