
import {Component} from 'angular2/core';
import {InfiniteScroll} from '../directives/angular2-infinitescroll';

@Component({
    selector : 'my-app',
    directives: [InfiniteScroll],
    template:  `
        <div class="row">
          <div class="col-xs-6">
            <div class="search-results" (OnScrollMethod) = "nextPage()" ScrollDistance="3" InfiniteScroll style="height: 170px !important;overflow: scroll">
              <div *ngFor ="#data of testData">
                 <p> {{data.text}} </p>
              </div>
              </div>
            </div>`
})
export class AppComponent {
    public testData:Object[] = [
        {
           text:'test1'
        },
        {
            text: 'test2',
        },
        {
            text: 'test3',
        },
        {
            text: 'test4',
        },
        {
            text: 'test5',
        },
        {
            text: 'test6',
        },
        {
            text: 'test7',
        },
        {
            text: 'test8',
        },
      ];

    nextPage() {
        console.log('Reached Bottom!!');
    }
}
