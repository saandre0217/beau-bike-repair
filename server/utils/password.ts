import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt)
    return hash;
}

export const compareHash = (password: string, hashed: string) => {
    return bcrypt.compare(password, hashed)
}