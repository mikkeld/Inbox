export class Person {
  authId: string;
  firstName: string;
  lastName: string;
  profilePicturePath: string;
  happiness: string;

  constructor(authId: string, firstName: string, lastName: string, profilePicturePath: string, happiness?: string) {
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
