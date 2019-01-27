import { Action } from "@ngrx/store";
import { AnimalModel } from "../models/animal.model";

export enum AnimalActionType {
  ADD_ANIMAL = "ADD_ANIMAL",
  DELETE_ANIMAL = "DELETE_ANIMAL"
}

export class AnimalAction implements Action {
  type: AnimalActionType;
  payload: AnimalModel;
  constructor(type: AnimalActionType, payload: AnimalModel) {
    this.type = type;
    this.payload = payload;
  }
}

export class AddAnimal extends AnimalAction {
  constructor(animal: AnimalModel) {
    super(AnimalActionType.ADD_ANIMAL, animal);
  }
}

export class DeleteAnimal extends AnimalAction {
  constructor(animal: AnimalModel) {
    super(AnimalActionType.DELETE_ANIMAL, animal);
  }
}
