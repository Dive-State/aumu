import {IRegister} from "../interfaces/IRegister";

export class RegisterModel{
  username!: string;
  email!: string;
  password!: string;
  repeat_password!: string;

  static create(data: IRegister): RegisterModel {
    const model = new RegisterModel();
    model.username = data.username.value || '';
    model.email = data.email.value || '';
    model.password = data.password.value || '';
    model.repeat_password = data.repeat_password.value || '';
    return model;
  }
}
