import CaracterOption from "./CaracterOption";
import CaractersIds from "./CaractersIds";

export default class Password {
  static hasOptions(id: string, caracterOptions: CaracterOption[]) {
    const caracterOption = caracterOptions.find((option) => option.id === id);
    return caracterOption?.value;
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
      possibleCaracters += "!@#$%^&*-";
    }

    for (let index = 0; index < size; index++) {
      const random = Math.floor(Math.random() * possibleCaracters.length);
      password += possibleCaracters.charAt(random);
    }

    return password;
  }
}
