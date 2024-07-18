import { Component } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myActivities:Activity[]=[];
  subject:string='';
  today:Date=new Date()
constructor(){
  if(localStorage.getItem("activities")!=null){
    //@ts-ignore
    this.myActivities=JSON.parse(localStorage.getItem("activities"))
  }
}

addActivity():void{
  this.myActivities.push({
  subject:this.subject ,
  date:this.today.toLocaleDateString()
  })
  localStorage.setItem("activities",JSON.stringify(this.myActivities));
  this.clearTextArea();
}
deleteActivity(deletedIndex:number):void{
this.myActivities.splice(deletedIndex,1);
localStorage.setItem("activities",JSON.stringify(this.myActivities));
}
deleteAllActivities():void{
  localStorage.removeItem("activities");
  this.myActivities=[]
}
clearTextArea():void{
  this.subject=""
}
updateActivity(updatedIndex:number):void{
  this.subject=this.myActivities[updatedIndex].subject
}
}
