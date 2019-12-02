/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import 'aurelia-polyfills';
import 'materialize-css';
require('materialize-css/dist/css/materialize.css');

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('App')));
}
