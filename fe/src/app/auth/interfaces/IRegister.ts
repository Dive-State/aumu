import {FormControl} from "@angular/forms";

export interface IRegister {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeat_password: FormControl<string | null>;
}
