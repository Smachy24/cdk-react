interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth : Date;
  language: string;
  notificationFrequency: number;
  createdAt : Date
}

export default User;