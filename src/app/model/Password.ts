import { CARACTER_TYPES } from "../constants/caractersConfig";
import CaracterOption from "./CaracterOption";
import CaractersIds from "./CaractersIds";

export default class Password {
  static hasOptions(id: string, caracterOptions: CaracterOption[]) {
    const caracterOption = caracterOptions.find((option) => option.id === id);
    return caracterOption!.value;
  }

  static generatePassword(size: number, caracterOptions: CaracterOption[]) {
    let possibleCaracters = "";
    let password = "";

    if (Password.hasOptions(CaractersIds.NUMBERS, caracterOptions)) {
      possibleCaracters += CARACTER_TYPES.numbers;
    }
    if (Password.hasOptions(CaractersIds.UPPERCASE, caracterOptions)) {
      possibleCaracters += CARACTER_TYPES.uppercase;
    }
    if (Password.hasOptions(CaractersIds.LOWERCASE, caracterOptions)) {
      possibleCaracters += CARACTER_TYPES.lowercase;
    }
    if (Password.hasOptions(CaractersIds.SPECIAL, caracterOptions)) {
      possibleCaracters += CARACTER_TYPES.special;
    }

    for (let index = 0; index < size; index++) {
      const random = Math.floor(Math.random() * possibleCaracters.length);
      password += possibleCaracters.charAt(random);
    }

    return password;
  }

  static calculatePasswordStrenght(password: string): number {
    const groups = [
      { regex: /[a-z]/, size: CARACTER_TYPES.numbers.length },
      { regex: /[A-Z]/, size: CARACTER_TYPES.uppercase.length },
      { regex: /[0-9]/, size: CARACTER_TYPES.lowercase.length },
      { regex: /[!@#$%^&*-+=]/, size: CARACTER_TYPES.special.length },
    ];

    let N: number = 0;
    for (const group of groups) {
      if (group.regex.test(password)) N += group.size;
    }

    const L: number = password.length;

    if (L === 0 || N === 0) return 0;

    const passwordEntropy: number = L * Math.log2(N);
    console.log("Entropia da senha é: " + passwordEntropy.toFixed(2));
    console.log("L: " + L);
    console.log("N: " + N);
    return parseFloat(passwordEntropy.toFixed(2));
  }
}
