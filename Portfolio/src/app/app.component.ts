import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
updatechild() {
  this.data=Math.random()
  this.data2=Math.random();
} greeting: string = 'Hello, Angular!';
count: number = 42;





getDynamicValue(): string {
  return this.greeting;
}

title = 'sending data child to parent'; 
helloWorld = 'Hello World'; 
fontSize = '33';

data=10;
data2=12;

username: string = 'saurabhp';

isCondition: boolean = true;

toggleCondition() {
  this.isCondition = !this.isCondition;
}
forParent:string = "for parent";
GetData(name:string){
  this.forParent = name;
}

}
