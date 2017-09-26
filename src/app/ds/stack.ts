export class Stack<T> {

    myArray = [];

     push(data) {
        this.myArray.push(data);
    }

     pop() {
        if (this.isEmpty())
            return "stack is empty";
        return this.myArray.pop();
    }
     isEmpty() {
        return this.myArray.length == 0;
    }
     peek() {
        return this.myArray[this.myArray.length - 1];
    }
     printStack() {
        var str = "";
        for (var i = 0; i < this.myArray.length; i++)
            str += this.myArray[i] + " ";
        return str;
    }
}