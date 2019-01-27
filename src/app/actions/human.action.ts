import { Action } from "@ngrx/store";
import { HumanModel } from "../models/human.model";

export enum HumanActionType {
  ADD_HUMAN = "ADD_HUMAN",
  DELETE_HUMAN = "DELETE_HUMAN"
}

export class HumanAction implements Action {
  type: HumanActionType;
  payload: HumanModel;
  constructor(type: HumanActionType, payload: HumanModel) {
    this.type = type;
    this.payload = payload;
  }
}

export class AddHuman extends HumanAction {
  constructor(human: HumanModel) {
    super(HumanActionType.ADD_HUMAN, human);
  }
}

export class DeleteHuman extends HumanAction {
  constructor(human: HumanModel) {
    super(HumanActionType.DELETE_HUMAN, human);
  }
}
