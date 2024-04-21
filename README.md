# MyAppNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

créer un composant Liste produits
créer un modèle données Product
créer dans Liste produits la propriété listProducts et un tableau de produits
créer un Produit component
afficher un produit

afficher la liste des produits
@input permet de récupérer les données

transmettre un like au composant parent
@output
ajouter un bouton like devant chaque produit (fils)
créer un evenement entre le clic sur le btn et l'execution de la méthode increment du like

sendNotif()
@output envoyer un output vers le parent
EventEmitter permet d'emettre des valeurs

Création de form
ajouter une propriété appelé product
ajouter bootstrap

dans le form, on ajoute un controle de validation
id est obligatoire et ne contient que des chiffres