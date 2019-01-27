import { AnimalModel } from "../models/animal.model";
import { AnimalActionType, AnimalAction } from "../actions/animal.action";

const initialState: AnimalModel[] = [];

export function animalReducer(
  previousState = initialState,
  action: AnimalAction
): AnimalModel[] {
  switch (action.type) {
    case AnimalActionType.ADD_ANIMAL:
      previousState.push(action.payload);
      return previousState;
    case AnimalActionType.DELETE_ANIMAL:
      previousState = previousState.filter(
        animal => animal.name !== action.payload.name
      );
      return previousState;
    default:
      return previousState;
  }
}
