ng2-infinite-scroll
=========

This module supports for Angular2 rc version.

The sources for this package are in (https://github.com/sharmilemurugaraj/ng2-infinite-scroll) repo. Please file issues and pull requests against that repo.

##Usage

Include the following lines in typescript file.
```typescript

import {Component} from '@angular/core';
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
```
### style.css

Custom css must be added to set the height for the particular div. Height can be changed according to the screen.

```typescript

.search-results{
	height: 180px !important;
	overflow: scroll;
}
```




