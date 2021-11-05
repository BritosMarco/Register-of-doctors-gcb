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
                    <a href="index.html" data-type="index-link">cad-med documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' : 'data-target="#xs-controllers-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' :
                                            'id="xs-controllers-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' : 'data-target="#xs-injectables-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' :
                                        'id="xs-injectables-links-module-AppModule-bedf13cd62bd9fc2b6bff8d4d30c6d64"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DoctorsModule.html" data-type="entity-link" >DoctorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' : 'data-target="#xs-controllers-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' :
                                            'id="xs-controllers-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' }>
                                            <li class="link">
                                                <a href="controllers/DoctorsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoctorsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' : 'data-target="#xs-injectables-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' :
                                        'id="xs-injectables-links-module-DoctorsModule-2f2feeacd8dc2b0c565e646057cc8a87"' }>
                                        <li class="link">
                                            <a href="injectables/DoctorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoctorsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpecialtyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecialtyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialtyModule.html" data-type="entity-link" >SpecialtyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' : 'data-target="#xs-controllers-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' :
                                            'id="xs-controllers-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' }>
                                            <li class="link">
                                                <a href="controllers/SpecialtyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecialtyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' : 'data-target="#xs-injectables-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' :
                                        'id="xs-injectables-links-module-SpecialtyModule-ab97d9df3c9da25520e2c2ccf4ef4532"' }>
                                        <li class="link">
                                            <a href="injectables/SpecialtyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpecialtyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DoctorsController.html" data-type="entity-link" >DoctorsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SpecialtyController.html" data-type="entity-link" >SpecialtyController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseQueryParametersDto.html" data-type="entity-link" >BaseQueryParametersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDoctorDto.html" data-type="entity-link" >CreateDoctorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSpecialtyDto.html" data-type="entity-link" >CreateSpecialtyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doctors.html" data-type="entity-link" >Doctors</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorsRepository.html" data-type="entity-link" >DoctorsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindDoctorsDto.html" data-type="entity-link" >FindDoctorsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindSpecialtyQueryDto.html" data-type="entity-link" >FindSpecialtyQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReturnDoctorsDto.html" data-type="entity-link" >ReturnDoctorsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReturnSpecialtyDto.html" data-type="entity-link" >ReturnSpecialtyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Specialty.html" data-type="entity-link" >Specialty</a>
                            </li>
                            <li class="link">
                                <a href="classes/SpecialtyRepository.html" data-type="entity-link" >SpecialtyRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoctorsService.html" data-type="entity-link" >DoctorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpecialtyService.html" data-type="entity-link" >SpecialtyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});