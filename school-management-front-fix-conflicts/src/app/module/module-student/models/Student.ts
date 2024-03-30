export interface Student {
  id: number;
  name: String;
  firstName: string;
  identifier: string;
  address: string;
  parent : Parent;
  level: String ;
  isActive: boolean;
  educationalPath: String ;
  healthCondition: String ;
  // Add other properties as needed
}

export class Parent {
  id: number;
  name: string;
  firstName: string;
  address: string;
  phoneNumber: string;
  occupation: string;
  emailAddress: string;
}
