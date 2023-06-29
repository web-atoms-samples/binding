import Command, { Commands } from "@web-atoms/core/dist/core/Command";



export default class AppCommands extends Commands {

    public static home = Command.create({
        route: "/",
        routeOrder: 1000,
        openPage: () => import("../pages/home/Home")
    });

    public static oneWay = Command.create({
        route: "/binding/one-way",
        openPage: () => import("../pages/one-way/OneWayPage")
    });

    public static twoWay = Command.create({
        route: "/binding/two-way",
        openPage: () => import("../pages/two-way/TwoWayPage")
    });

    public static oneWayAsync = Command.create({
        route: "/binding/one-way-async",
        openPage: () => import("../pages/one-way-async/OneWayAsyncPage")
    });

    public static event = Command.create({
        route: "/binding/event-way",
        openPage: () => import("../pages/event/EventPage")
    });

    public static style = Command.create({
        route: "/binding/style",
        openPage: () => import("../pages/style/StylePage")
    });

}
