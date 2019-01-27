import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { GlobalState } from "../reducers/_index";
import { AnimalModel } from "../models/animal.model";
import { HumanModel } from "../models/human.model";
import { AddHuman, DeleteHuman } from "../actions/human.action";
import { AddAnimal, DeleteAnimal } from "../actions/animal.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string;
  type: string;
  animals$: Observable<AnimalModel[]>;
  humans$: Observable<HumanModel[]>;

  constructor(private readonly store: Store<GlobalState>) {
    this.animals$ = this.store.pipe(select(s => s.animals));
    this.humans$ = this.store.pipe(select(s => s.humans));
  }

  onSubmit(): void {
    if (this.type === "HUMAN") {
      const human: HumanModel = new HumanModel(this.name);
      this.store.dispatch(new AddHuman(human));
    } else if (this.type === "ANIMAL") {
      const animal: AnimalModel = new AnimalModel(this.name);
      this.store.dispatch(new AddAnimal(animal));
    }
  }

  deleteAnimal(animal: AnimalModel): void {
    this.store.dispatch(new DeleteAnimal(animal));
  }

  deleteHuman(human: HumanModel): void {
    this.store.dispatch(new DeleteHuman(human));
  }
}
