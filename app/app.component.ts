import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><profile></profile>',
    directives: [ProfileComponent],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
