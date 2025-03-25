# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!-- "node_modules/@ng-select/ng-select/themes/default.theme.css" -->


<!-- style.css my code for single select rather than change the deafult icon i ahve used differnt icons and placed over them  -->
/* ng-select styles for width, padding, and border */
ng-select {
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex !important;
  align-items: center !important;
  font-size: 14px;
}

/* Ng-single-select Custom dropdown panel styles */
ng-select .ng-dropdown-panel {
  position: absolute !important;
  top: 110% !important;
  left: 0 !important;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #EB4B2B;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

/* Ng-single-select Custom dropdown panel items styles */
ng-select .ng-option {
  padding: 10px;
  font-size: 16px;
  /* border: 0.2px solid #ccc; */
}

/*Hover - Ng-single-select Custom dropdown panel items styles */
ng-select .ng-option:hover {
  background-color: #FFF3DB;
  overflow: hidden;
  border-radius: 8px;
}

/* Ng-single-select custom Clear button (X) and position styles */
ng-select .ng-clear-wrapper {
  color: #777;
  margin-right: 20px; /* Increased to make room for arrow */
}

/* Ng-single-select custom Placeholder text styling */
ng-select .ng-select-container .ng-placeholder {
  color: #777;
}

/* Ng-single-select custom input styling */
.ng-select .ng-select-container .ng-value-container .ng-input > input {
  width: 80% !important;
}



<!-- multiselect dropdown code  -->
#multiselect-wrapper .multiselect-dropdown{
  width: 100%;
  border: 1px solid red;
  outline: none;
}
 
#multiselect-wrapper .multiselect-dropdown .dropdown-btn {
  border: 1px solid rgb(0, 4, 255);
  width: 100%;
  padding: 10px;
  height: 34px; /* Always add even value */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#multiselect-wrapper .multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret::before {
  /* position: relative;
  right: 0;
  top: 65%;
  color: #999;
  margin-top: 4px;
  border-style: solid;
  border-width: 8px 8px 0 8px;
  border-color: #999999 transparent;
  content: "+" !important; */
  border-color: none !important;
  border-style: none !important;
  border-width: none !important;
}
#multiselect-wrapper .multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret::after {
  content: "+";
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  /* width: 20px; */
  /* height: 20px; */
}
#multiselect-wrapper .multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret {
  /* line-height: 16px; */
  /* display: block; */
  /* position: absolute; */
  /* box-sizing: border-box; */
  /* width: 40px; */
  /* height: 38px; */
  /* right: 1px; */
  /* top: 0; */
  /* padding: 4px 8px; */
  /* margin: 0; */
  /* text-decoration: none; */
  /* text-align: center; */
  cursor: pointer;
  transition: transform .2s ease;
  top: 50%;
  transform: translateY(-31%);
}

#multiselect-wrapper .multiselect-dropdown .dropdown-btn .selected-item-container .selected-item {
  border: 1px solid #cdd5dd;
  margin-right: 4px;
  background: #306091;
  padding: 0 5px;
  color: #8d2424;
  border-radius: 2px;
  float: left;
  max-width: 100px;
}
#multiselect-wrapper .multiselect-dropdown .dropdown-btn .selected-item-container .selected-item:hover {
  border: none !important;
  border-radius: none !important;
  animation: none !important;
}
#multiselect-wrapper .multiselect-dropdown .dropdown-btn .selected-item-container .selected-item a::before {
  /* display: none !important; */
  content: '*';
  font-size: 18px;
  line-height: 1;
  pointer-events: none;
}
#multiselect-wrapper .multiselect-dropdown .dropdown-btn .selected-item-container .selected-item a {
  display: none !important;
}