import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { mergeMap } from "rxjs/operators";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ListService {
  urlRandom = "https://www.thecocktaildb.com/api/json/v1/";
  urlLookup = "https://www.thecocktaildb.com/api/json/v1/";
  apiKey = "1";

  constructor(private http: HttpClient) {}

  getRandomData(count: Number) {
    let requestArray = [];
    let request = this.http
      .get(`${this.urlRandom}${this.apiKey}/random.php`)
      .pipe(mergeMap(results => results["drinks"]));

    for (let i = 0; i < count; i++) {
      requestArray.push(request);
    }

    return forkJoin(requestArray);
  }

  getDetails(id) {
    return this.http.get(`${this.urlLookup}${this.apiKey}/lookup.php?i=${id}`);
  }
}
