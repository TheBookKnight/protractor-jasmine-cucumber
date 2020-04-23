# Notes on Angular JS Development

## How to generate feature components

Keeping all features in one component as the application grows will not be maintainable.

You'll want to split up large components into smaller sub-components, each focused on a specific task or workflow.

> ng generate component <componentName>

## How to generate services

Services focus on presenting data and delegate data access to a service.

From this [tutorial](https://angular.io/tutorial/toh-pt4) it will mock data.

> ng generate service <serviceName>

## How to generate AppRoutingModule

> ng generate module app-routing --flat --module=app
