export class User {
  id: number;
  userName: string;
  fullName: string;
  email: string;

  constructor(
    id: number,
    userName: string,
    fullName: string,
    email: string
    ) {
        this.id = id;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
    }
}
