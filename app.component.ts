import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/primeng';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  loading=false;
  cols=[
   { field:'year',header:'YEAR'},
   {field:'brand',header:'RAND'}
  ];
  cars=[
    {
year:'2012',
brand:"avc"
    },
    {
year:'2013',
brand:'xyz'
    }
  ];
eheader=[
  {field:'name',header:'Name'},
  {field:'skill',header:'Skill'}
];
label="V"
  employee=[
    {name:'manohar',skill:'dev'},
  {name:'golla',skill:'fullstack'}
  ];
cache=[];
search(id)
{
return this.cache.indexOf(id);
}
  handleClick(index,x)
  { 
    if(x=="hide")
    console.log("Don't send reques");
    else
    {
      if(this.search(index)!=-1)
      {
console.log("Present in cache");
      }else
      {
console.log("Not present in cache");
this.cache.push(index);
      }
    }
    
    // this.loading=true;
    console.log(x);
    //console.log(this.cars[index].year);
    // setTimeout(()=>{
    //   console.log("getting values from server");
    //   this.loading=false;
    // },2000);
    
  }

}
