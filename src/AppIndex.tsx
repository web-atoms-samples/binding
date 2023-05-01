import MobileDesktopApp from "@web-atoms/web-controls/dist/desktop-app/MobileDesktopApp";
import DesktopApp from "@web-atoms/web-controls/dist/desktop-app/DesktopApp";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import PopupService from "@web-atoms/core/dist/web/services/PopupService";
import AppMenu from "./menu/AppMenu";
import HomePage from "./pages/home/Home";
import WebApp from "@web-atoms/core/dist/web/WebApp";

import "./styles/GlobalStyle";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import ThisApp from "./common/ThisApp";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class AppIndex extends MobileDesktopApp {

    public async init() {

        PopupService.lastTarget =  this.element;

        (this.app as WebApp).installStyleSheet("/node_modules/@fortawesome/fontawesome-free/css/all.min.css");

        this.drawerMenu = AppMenu;

        if(this.desktopApp) {
            await this.desktopInit();
        }

        this.openDefault();

    }

    openDefault() {
        PageNavigator.openPage(HomePage);
    }

    async desktopInit() {
        this.desktopApp.statusBarRenderer = () => <div data-layout="row">
            <div text="Binding Samples"/>
            <div
                style-margin-left="auto"
                text="Version 2"/>
        </div>;
    }
}
