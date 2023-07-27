import {createNav} from "../_core/utils/navigation";
import {IProfilePaths} from "./interfaces/IProfilePaths";

export const profileRoot = 'profile';

export const main = 'main';
export const yourMusic = 'yourMusic';

export const paths: IProfilePaths = {
  main,
  yourMusic,
}

export const profileNav = createNav<IProfilePaths>(profileRoot, paths)
