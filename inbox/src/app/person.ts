export class Person {
  authId: number;
  firstName: string;
  lastName: string;
  profilePicturePath: string;
  happiness: string;

  constructor(authId: number, firstName: string, lastName: string, profilePicturePath: string, happiness: string) {
    this.authId=  authId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicturePath = profilePicturePath;
    this.happiness = happiness;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
