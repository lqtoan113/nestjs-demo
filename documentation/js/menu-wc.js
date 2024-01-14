'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' : 'data-bs-target="#xs-controllers-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' :
                                            'id="xs-controllers-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' : 'data-bs-target="#xs-injectables-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' :
                                        'id="xs-injectables-links-module-AppModule-6af1df9abd1f29c62f9e8fe93265a5e987d19223ea66989913e54a62b24c6a908aa940d86041a87c0707123e7065549c0ab3083a31ec123c4fea8e14ed2c7e43"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatModule.html" data-type="entity-link" >CatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' : 'data-bs-target="#xs-controllers-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' :
                                            'id="xs-controllers-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' }>
                                            <li class="link">
                                                <a href="controllers/CatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' : 'data-bs-target="#xs-injectables-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' :
                                        'id="xs-injectables-links-module-CatModule-fd497c6835a5fbc3614ef8426aae328ae40d72bb672819db21b27b1f9589a071d9f31fdee774a8ea35cf60f739c4ee8c534588c1831a6559ea7e3d660c2b9d7c"' }>
                                        <li class="link">
                                            <a href="injectables/CatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' : 'data-bs-target="#xs-controllers-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' :
                                            'id="xs-controllers-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' : 'data-bs-target="#xs-injectables-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' :
                                        'id="xs-injectables-links-module-UserModule-a10eea2cff65599bd25c913487bd0ef37ee0d6d8a50045de3d6af95ba361aab4a600096a43cbcee034b39c97ed5de147f426652b948553a742ec4bd33f8aa21a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CatController.html" data-type="entity-link" >CatController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Cat.html" data-type="entity-link" >Cat</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCatDTO.html" data-type="entity-link" >CreateCatDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDTO.html" data-type="entity-link" >LoginUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDTO.html" data-type="entity-link" >RegisterUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCatDTO.html" data-type="entity-link" >UpdateCatDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatService.html" data-type="entity-link" >CatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});