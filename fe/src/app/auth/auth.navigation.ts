import {createNav} from "../_core/utils/navigation";
import {IAuthPaths} from "./interfaces/IAuthPaths";


export const authRoot = 'auth';

export const login = 'login';
export const register = 'register';

export const paths: IAuthPaths = {
  login,
  register,
}

export const authNav = createNav<IAuthPaths>(authRoot, paths);



