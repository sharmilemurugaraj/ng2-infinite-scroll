angular2-infinite-scroll
=========

The sources for this package are in (https://github.com/sharmilemurugaraj/angular2-infinitescroll.git) repo. Please file issues and pull requests against that repo.

##Usage

1.Include the following lines in typescript file.
```typescript

import {Component} from 'angular2/core';
import {InfiniteScroll} from '../directives/angular2-infinitescroll';

@Component({
    selector : 'my-app',
    directives: [InfiniteScroll],
    template:  `
        <div (OnScrollMethod)="nextPage()" ScrollDistance="3" InfiniteScroll="InfiniteScroll"></div>
        `
    styleUrls: ['style.css']
})
export class AppComponent {
    nextPage() {
        console.log('Reached Bottom!!');
    }
}
```typescript

2. Custom css must be added to set the height for the particular div. Height can be changed according to the screen.

#### Style.css
.search-results{
	height: 180px !important;
	overflow: scroll;
}




