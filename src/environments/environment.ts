// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:9999',
  openIdConnectSettings: {
    automaticSilentRenew: true,
    response_type: 'id_token token',
    authority: 'http://localhost:9998',
    scope: 'openid profile roles portal-gateway',
    client_id: '7ceea8f0-9ef6-4a41-b0d7-d4ebe99430bb',
    post_logout_redirect_uri: 'http://localhost:4200',
    redirect_uri: 'http://localhost:4200/authentication/signin-oidc',
    silent_redirect_uri: 'http://localhost:4200/authentication/redirect-silent'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
