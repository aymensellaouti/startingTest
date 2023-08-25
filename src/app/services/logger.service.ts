import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  logger(message: any) {
    console.log("Local Log");
    console.log(message);
  }
}
