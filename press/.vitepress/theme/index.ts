import DefaultTheme from "vitepress/theme";
import "./styles/custom.scss";
import { App } from "vue";
import MyLayout from "./layouts/MyLayout.vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // extend default theme custom behaviour.
        DefaultTheme.enhanceApp(ctx)

        // register your custom global components
        //ctx.app.component('MyGlobalComponent')
    },
    /*enhanceApp({ app }: { app: App }) {
        app.component('list', List)
    }*/
    Layout: MyLayout
}
