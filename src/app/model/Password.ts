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
      possibleCaracters += "0123456789";
    }
    if (Password.hasOptions(CaractersIds.UPPERCASE, caracterOptions)) {
      possibleCaracters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (Password.hasOptions(CaractersIds.LOWERCASE, caracterOptions)) {
      possibleCaracters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (Password.hasOptions(CaractersIds.SPECIAL, caracterOptions)) {
      possibleCaracters += "!@#$%^&*-+=";
    }

    for (let index = 0; index < size; index++) {
      const random = Math.floor(Math.random() * possibleCaracters.length);
      password += possibleCaracters.charAt(random);
    }

    return password;
  }

  static calculatePasswordStrenght(password: string): number {
    const groups = [
      { regex: /[a-z]/, size: 26 },
      { regex: /[A-Z]/, size: 26 },
      { regex: /[0-9]/, size: 10 },
      { regex: /[!@#$%^&*-+=]/, size: 11 },
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
