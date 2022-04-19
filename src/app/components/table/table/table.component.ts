import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Users } from '../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

/*   user: Users = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  }; */
  users: Users[] = [];
  isEven = false;

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


}
 /*  sortDataId() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.userId < b.userId) {
        return -1   /* this.sortDataId(); */
    /* this.isEven
    this.isOdd 
      }
      if (a.userId > b.userId) {
        return 1;
      }
      return 0;
    });
    sortedData;
  } */




/*   isEven(n: any) { //par
    return n % 2 == 0;
 }
 
  isOdd(n: any) { //impar
    return Math.abs(n % 2) == 1;
 } */

/*   sortDataId() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.userId < b.userId) {
        return -1;
      }
      if (a.userId > b.userId) {
        return 1;
      }
      return 0;
    });
    sortedData;
  } 

/*   get even(): boolean {
    const sortedData = [...this.users]
    return this.users % 2 === 0;
  }
  get odd(): boolean {
    return !this.even;
  } */

/*   sortDataUserId() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.userId % 2 < b.userId) {
        return 1;
      }
      if (a.userId % 2 > b.userId) {
        return -1;
      }
      return 0;
    });
    sortedData;
  }
 */
/*   sortDataId() {
    const sortedData = [...this.users].sort((a, b) => {
      if (a.userId < b.userId) {
        return -1;
      }
      if (a.userId > b.userId) {
        return 1;
      }
      return 0;
    });
    sortedData;
  } */

