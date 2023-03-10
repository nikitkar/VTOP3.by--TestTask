import { deleteAsync } from "del";

import path from "../config/path.js";

//удаление директории
export const clear = () => deleteAsync(path.root);