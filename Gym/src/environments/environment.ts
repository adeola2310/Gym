// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://v2.api.webchoice.ng/api',
  // API_URL: 'https://api.webchoice.ng/api',
  // API_URL: 'http://localhost:9000/api',
  API_VERSION: 'v2',
  APP_DOMAIN: 'https://webchoice.ng/#'
  // API_VERSION: 'v1'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
