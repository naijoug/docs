import { SidebarItem, SidebarPageItem, SidebarGroupItem, SidebarStructureItem } from "vuepress-theme-hope";

/**
 * Sidebar 构造器
 */
class Builder {

    /**
     * 构建文件夹结构侧边栏目录条目
     * ref: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90
     * @param text 侧边栏名字
     * @param link 侧边栏链接
     * @param prefix 前缀 (默认: 与 link 相同)
     * @param icon 图标 (默认: hashtag)
     * @param collapsible 是否可折叠 (默认: true)
     * @returns 
     */
    static structure(
        text: string, 
        link: string, 
        prefix: string | undefined = undefined,
        icon: string = "hashtag", 
        collapsible: boolean = true
    ): SidebarItem {
        return {
            text: text,
            icon: icon,
            link: link,
            prefix: prefix ?? link,
            collapsible: collapsible,
            children: "structure",
        }
    }

    /**
     * 构建文件夹嵌套组侧边栏条目
     * ref: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E5%88%86%E7%BB%84%E4%B8%8E%E5%B5%8C%E5%A5%97
     * @param text 侧边栏名字
     * @param link 侧边栏链接
     * @param children 组内侧边栏条目
     * @param prefix 前缀 (默认: 与 link 相同)
     * @param icon 图标 (默认: hashtag)
     * @param collapsible 是否可折叠 (默认: true)
     * @returns 
     */
    static group(
        text: string, 
        link: string, 
        children: (SidebarPageItem | SidebarGroupItem | SidebarStructureItem | string)[], 
        prefix: string | undefined = undefined,
        icon: string = "hashtag",
        collapsible: boolean = true
    ): SidebarItem {
        return {
            text: text,
            icon: icon,
            link: link,
            prefix: prefix ?? link,
            collapsible: collapsible,
            children: children
        }
    }

    /**
     * 构建页面侧边栏条目
     * ref: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E5%AF%B9%E8%B1%A1%E6%A0%BC%E5%BC%8F
     * @param text 侧边栏名字
     * @param link 侧边栏链接
     * @param icon 图标 (默认: hashtag)
     * @returns 
     */
    static page(
        text: string, 
        link: string, 
        icon: string = "hashtag"
    ): SidebarItem {
        return {
            text: text,
            icon: icon,
            link: link,
        }
    }
}

export { Builder };