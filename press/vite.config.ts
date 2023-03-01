// @ts-ignore
import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

const options = {
    ...flexSearchIndexOptions,
    previewLength: 62,
    buttonLabel: "搜索",
    placeholder: "请输入关键词",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
})
