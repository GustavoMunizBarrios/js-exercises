/* ¿Qué es un stack? Un stack, también conocido como pila es LIFO (Last-In First-Out), es decir, 
el último en entrar es el primero en salir.

En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:

push(value) : añadir el elemento, value, al stack.
pop() : sacar un elemento del stack.
min() : obtener el elemento con el valor mínimo.
peek(): obtener el elemento que está el en top del Stack
Importante
TODOS los métodos mencionados anteriormente deben ser de O(1).
Para la resolución del ejercicio no se puede utilizar ningún Array method */

//Representa cada nodo del stack
class Node {
  constructor(value, min) {
    this.value = value;
    this.min = min;
    this.next = null;
  }
}

class MinStack {
  constructor() {
    this.top = null;
    this.minValue = null;
  }
  // crea un nuevo nodo y lo coloca en la parte superior del stack.
  //Se actualiza el valor mínimo si corresponde.
  push(value) {
    if (this.top === null) {
      this.top = new Node(value, value);
      this.minValue = value;
    } else {
      const newNode = new Node(value, Math.min(value, this.minValue));
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  // Elimina el nodo superior del stack y actualiza el valor mínimo si 
  //el nodo eliminado contenía el valor mínimo actual.
  pop() {
    if (this.top === null) {
      return null;
    }

    const value = this.top.value;
    this.top = this.top.next;

    if (value === this.minValue) {
      this.minValue = this.top !== null ? this.top.min : null;
    }

    return value;
  }
  //devuelve el valor mínimo actual almacenado en la variable minValue
  min() {
    return this.minValue;
  }
  //devuelve el valor del nodo superior del stack, si existe
  peek() {
    return this.top !== null ? this.top.value : null;
  }
}


module.exports = {
  Node,
  MinStack
}
