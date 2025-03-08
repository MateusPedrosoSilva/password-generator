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
      possibleCaracters += "!@#$%^&*-";
    }

    for (let index = 0; index < size; index++) {
      const random = Math.floor(Math.random() * possibleCaracters.length);
      password += possibleCaracters.charAt(random);
    }

    return password;
  }

  static calculatePasswordStrenght(
    size: number,
    caracterOptions: CaracterOption[]
  ) {
    const hasNumbers = +Password.hasOptions(
      CaractersIds.NUMBERS,
      caracterOptions
    );
    const hasUppercas = +Password.hasOptions(
      CaractersIds.UPPERCASE,
      caracterOptions
    );
    const hasLowercase = +Password.hasOptions(
      CaractersIds.LOWERCASE,
      caracterOptions
    );
    const hasSpecial = +Password.hasOptions(
      CaractersIds.SPECIAL,
      caracterOptions
    );
    const typeAmount = hasNumbers + hasUppercas + hasLowercase + hasSpecial;

    if (typeAmount <= 1 || size < 8) return 1;
    if (typeAmount >= 2 || size >= 10) return 2;
    if (typeAmount >= 3 && size > 11) return 3;

    return 2;
  }
}
