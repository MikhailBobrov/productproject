import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

// объвляем список роутов ктр есть в нашем приложении (если захотим хранить данные в redux)
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

// объект, в котором для каждого маршрута из енама AppRoutes укажем путь до соотвествующего компонента
// в качетсве ключа будет лежать перечисление
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// объявляем сами роуты, маршрут для них,компонент который мы должны отрисовывать

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: RoutePath[AppRoutes.MAIN],
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath[AppRoutes.ABOUT],
  },
};
