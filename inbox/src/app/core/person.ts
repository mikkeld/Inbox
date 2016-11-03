export interface IPerson {
  $key?: string;
  authId: string;
  firstName: string;
  lastName: string;
  profilePicturePath: string;
}

export class Person implements IPerson {
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

}
