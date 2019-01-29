import { ActionReducerMap } from "@ngrx/store";

import { HumanModel } from "../models/human.model";
import { AnimalModel } from "../models/animal.model";
import { humanReducer } from "./human.reducer";
import { animalReducer } from "./animal.reducer";

export interface GlobalState {
  humans: HumanModel[];
  animals: AnimalModel[];
}

export const reducers: ActionReducerMap<GlobalState> = {
  humans: humanReducer,
  animals: animalReducer
};
