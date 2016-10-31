export class Person {
  authId: string;
  firstName: string;
  lastName: string;
  profilePicturePath: string;

  constructor(authId: string, firstName: string, lastName: string, profilePicturePath: string) {
    this.authId=  authId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicturePath = profilePicturePath;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
