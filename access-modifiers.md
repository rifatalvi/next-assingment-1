# How Do Access Modifiers Work in TypeScript OOP?

## Introduction

Object-Oriented Programming (OOP) is an important part of TypeScript. It helps developers organize code using classes and objects. Access modifiers control how properties and methods can be accessed from different parts of a program. TypeScript provides four important modifiers: public, private, protected, and readonly.

## Detailed Explanation

The public modifier allows a property or method to be accessed from anywhere. It is the default access modifier in TypeScript, so we do not always need to write it explicitly.

The private modifier restricts access to the class where the property or method is declared. It cannot be directly accessed from outside that class or from its child classes.

The protected modifier allows access inside the class and its subclasses. It is useful when working with inheritance because child classes can use protected properties from their parent classes.

The readonly modifier prevents a property from being reassigned after its initialization. A readonly property can be assigned during declaration or inside the constructor.

Here is a practical example:

```ts
class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  readonly employeeId: number;

  constructor(
    name: string,
    salary: number,
    department: string,
    employeeId: number
  ) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.employeeId = employeeId;
  }

  public getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  getDepartment(): string {
    return this.department;
  }
}
```

In this example, the Manager class can access the protected department property through inheritance, but it cannot directly access the private salary property. The salary can only be accessed through the public getSalary method.

## Conclusion

Access modifiers help developers control data access and protect important properties inside classes. They support encapsulation, improve code organization, and make applications easier to maintain. Using the correct access modifier is especially useful when developing large applications with multiple classes and inheritance.