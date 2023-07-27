import {ILogin} from "../interfaces/ILogin";

export class LoginModel {
  email!: string;
  password!: string;

  static create(data: ILogin): LoginModel {
    debugger;
    const login = new LoginModel();
    login.email = data.email.value || '';
    login.password = data.password.value || '';
    return login;
  }
}
