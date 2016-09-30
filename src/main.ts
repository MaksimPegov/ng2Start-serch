import './polyfills.ts';
import { environment } from './environments/environment';
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FindingBox} from "./finding-box.component";

var configObject = {
    selector: 'app',
    template: `<finding-box placeholder='ti cusok govna'></finding-box>`
}
@Component(configObject)
export class App {

}

@NgModule({
    declarations:[App,FindingBox],
    imports:[BrowserModule],
    bootstrap: [App]
})
export class MyModule{

}

platformBrowserDynamic().bootstrapModule(MyModule);