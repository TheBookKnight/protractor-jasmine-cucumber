# Demo project app for Heroes

![Navigation Diagram](/navAppDiagram.png)

Based off Angular's [Tour of Heros tutorial](https://angular.io/tutorial)

## The Hero app concepts

1. "\*ngFor" lists all the heroes
2. Added Hero clickability that will display details
3. Implemented property binding with @Input decorators
4. Implemented ngOnInit lifecycle hook calls the HeroService method, not the constructor
5. Created an Observable to get HTTP Calls
6. Implemented MessageService for loosely-coupled communication between classes
7. Added a Router outlet with routerLink on dashboard to navigate different pages
8. _Optional_ Added RxJS of() to return an observable of mock heroes (Observable<Hero[]>)
9. Configured an in-memory web API to support
   - post()
   - put()
   - delete()
