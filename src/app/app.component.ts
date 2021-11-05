import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from './services/book.service';

import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Q4 - Angular Material';

  grdlistData: MatTableDataSource<any>;
  displayedColumns: string[] = ['bookid', 'bookname', 'author', 'bookstatus', 'category'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey: string;

  constructor(private _http: HttpClient, private _bookService: BookService) { }

  ngOnInit() {
    this.fillGrid();
  }

  fillGrid() {
    this._bookService.GetBooks()
      .subscribe(
        data => {
          this.grdlistData = new MatTableDataSource(data);
          this.grdlistData.sort = this.sort;
          this.grdlistData.paginator = this.paginator;
        }
      );
  }

  applyFilter() {
    this.grdlistData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

}
