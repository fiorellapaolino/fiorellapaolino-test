import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Users } from '../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private Table: TableService,
  ) { }

  ngOnInit(): void {
    this.createUsers();
  }

  createUsers() {
    this.Table.createUser().subscribe(
      (res) => {
        this.users = res;
        console.log(res)
      });
  }

  sortEven() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.userId % 2 === 0) {
        return 1;
      }
      if (b.userId % 2 === 0) {
        return -1;
      }
      return 0
    });
    this.users = sortedData;
  }

  sortOdd() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.id % 2 === 1) {
        return 1;
      }
      if (b.id % 2 === 1) {
        return -1;
      }
      return 0
    });
    this.users = sortedData;
  }
}