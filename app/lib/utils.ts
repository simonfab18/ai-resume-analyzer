import {twMerge} from "tailwind-merge";
import clsx, {type ClassValue} from "clsx";

export const generateUUID = () => crypto.randomUUID();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

