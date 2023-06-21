import {
    renderWidgetForecast,
    renderWidgeToday,
    renderWidgetOther
} from "./render.js";

export { startWidget };

const startWidget = () => {
    const widget = document.createElement('div');
    widget.classList.add("widget"); 
    renderWidgeToday(widget);
    renderWidgetOther(widget);
    renderWidgetForecast(widget);

    return widget

};