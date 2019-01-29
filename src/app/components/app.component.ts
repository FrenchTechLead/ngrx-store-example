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
  species: string;
  animals$: Observable<AnimalModel[]>;
  humans$: Observable<HumanModel[]>;

  constructor(private readonly store: Store<GlobalState>) {
    this.animals$ = this.store.pipe(select(s => s.animals));
    this.humans$ = this.store.pipe(select(s => s.humans));
  }

  onSubmit(): void {
    if (this.species === "HUMAN") {
      const human: HumanModel = new HumanModel(this.name);
      this.addHuman(human);
    } else if (this.species === "ANIMAL") {
      const animal: AnimalModel = new AnimalModel(this.name);
      this.addAnimal(animal);
    }
  }

  addHuman(human: HumanModel): void {
    this.store.dispatch(new AddHuman(human));
  }

  addAnimal(animal: AnimalModel): void {
    this.store.dispatch(new AddAnimal(animal));
  }

  deleteHuman(human: HumanModel): void {
    this.store.dispatch(new DeleteHuman(human));
  }

  deleteAnimal(animal: AnimalModel): void {
    this.store.dispatch(new DeleteAnimal(animal));
  }
}
