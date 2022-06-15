import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemList } from './item-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskList: ItemList[] = [];
  item: string = ''

  todoFrm = new FormGroup({
    input: new FormControl('',
      Validators.required
    )
  });


  //add todo
  addTodo(){
  if(this.todoFrm.value.input !== ''){
    const newTask: ItemList = {
      id: Date.now(),
      value: this.todoFrm.value.input,
      isDone: false,
      date: new Date()
    }
    this.taskList.push(newTask);
    console.log(this.taskList);
  }
  this.todoFrm.reset();
  }


  //delete todo
  delTodo(id: number){
    this.taskList = this.taskList.filter(item => item.id !== id);
    console.log(this.taskList);
  }


}
