import { join } from 'path';

const getDirname = (str) => join(process.cwd(), str);

export default getDirname;
