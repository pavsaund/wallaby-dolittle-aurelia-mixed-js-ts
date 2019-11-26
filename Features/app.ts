/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: any;
    constructor() {}

    configureRouter(config: RouterConfiguration, router: Router) {
        config.options.pushState = true;
        config.map([{ route: '', name: 'Home', moduleId: PLATFORM.moduleName('Home') }]);

        this.router = router;
    }
}
