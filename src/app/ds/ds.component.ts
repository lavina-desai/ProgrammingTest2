import { Component, OnInit } from '@angular/core';
import { Stack } from './stack';
import { Queue } from './queue';
import { LinkedList } from './linked-list';
import { InfixPostfix } from '../infix/infix-postfix';
import { Prefix } from '../infix/prefix';

@Component({
  selector: 'app-ds',
  templateUrl: './ds.component.html'
})
export class DsComponent  {

  stack = new Stack;
  Queue = new Queue;
  linkedList = new LinkedList;
  infixToPostfix = new InfixPostfix;
  prefix = new Prefix;

  constructor() { 

    //Infix To prefix
    console.log("Infix To Prefix");
    let exp1 = "a+b*(c*d)-i";
    console.log(this.prefix.infixExp(exp1));
    

    //infix to postfix
    console.log("Infix To Postfix"); 
    let exp = "a+b*(c*d)-i";
    console.log(this.infixToPostfix.infixExp(exp));
    

    //linked list output
    console.log("Linked List");
    this.linkedList.insertAtStart(10);
    console.log(this.linkedList); 
    this.linkedList.insertAtEnd(20);
    console.log(this.linkedList);
    

    //stack output
    console.log("stack Output");
    this.stack.push(10);
    this.stack.push(20);
    this.stack.push(79);
    this.stack.push(51);
    console.log(this.stack.printStack());  
    this.stack.pop();
    console.log(this.stack.printStack());

    //queue output
    console.log("Queue Output");
    this.Queue.enqueue(84);
    this.Queue.enqueue(30);
    console.log(this.Queue.printQueue());
    
    
  }


}
