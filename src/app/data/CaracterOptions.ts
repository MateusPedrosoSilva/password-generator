import CaracterOption from "../model/CaracterOption";
import CaractersIds from "../model/CaractersIds";

const caracterOptions: CaracterOption[] = [
  { id: CaractersIds.NUMBERS, name: "Numbers", value: true },
  { id: CaractersIds.UPPERCASE, name: "Uppercase Letters", value: false },
  { id: CaractersIds.LOWERCASE, name: "Lowercase Letters", value: false },
  { id: CaractersIds.SPECIAL, name: "Special Caracters", value: false },
];

export default caracterOptions;
