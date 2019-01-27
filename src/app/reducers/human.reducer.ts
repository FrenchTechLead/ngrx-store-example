import { HumanModel } from "../models/human.model";
import { HumanAction, HumanActionType } from "../actions/human.action";

const initialState: HumanModel[] = [];

export function humanReducer(
  previousState = initialState,
  action: HumanAction
): HumanModel[] {
  switch (action.type) {
    case HumanActionType.ADD_HUMAN:
      previousState.push(action.payload);
      return previousState;
    case HumanActionType.DELETE_HUMAN:
      previousState = previousState.filter(
        human => human.name !== action.payload.name
      );
      return previousState;
    default:
      return previousState;
  }
}
