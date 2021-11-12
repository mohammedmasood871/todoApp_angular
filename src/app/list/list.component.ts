import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
export interface DialogData{
   Description:string
}
interface IData {
  task : string;
  done: boolean
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isModalOpen: boolean = false;
  constructor(public dialog: MatDialog) { }
  // Task array 
   taskarray: IData[]  = []

   description: string | undefined;  
    
  ngOnInit(): void {
  }

  //open modal and close modal 
  open(){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: {description: this.description},   
     });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result != undefined){
        this.taskarray.push({task:result, done: false})
      }
   
    });
    
  }

    //open modal and close modal 

  // used for delete the task
  handleDelete(index: number) {
    this.taskarray.splice(index,1)
  }

  // used for delete the task

  //used for completeing the task 
  handleCheck( event: any, index: number) {
    this.taskarray[index].done = !this.taskarray[index].done
  }
    //used for completeing the task 

}
