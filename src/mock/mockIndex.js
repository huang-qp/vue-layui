import Mock from 'mockjs' //引入mockjs

Mock.setup({
// timeout: 400  //延时400s请求到数据
    timeout: 200 - 400 //延时200-400s请求到数据
})
Mock.mock('backstage/homePageIndex/sideNavigationData', {
// /**
//  * 权限管理在后台，前端接收到的是已经过滤完的菜单树
//  * @menuId 菜单唯一识别
//  * @menuName 名称
//  * @icon 图标
//  * @parentId 父菜单，前端不用，后端用来嵌套树
//  * @route 只有叶子结点有路由
//  * @type 是菜单级别，只有一级菜单和二级菜单
//  * @orderNum 是菜单排序，后台需要用来排序，前端不用
//  * @children 叶子结点没有该属性或者为空数组
//  */
    menuTreeData: [
        {
            "menuId": 0,
            "menuName": "首页",
            "parentId": 0,
            "route": "/homePageIndex",
            "type": 1,
            "icon": "el-icon-service",
            "orderNum": 0,
            "children": []
        },
        {
            "menuId": 1,
            "menuName": "文件",
            "parentId": 0,
            "route": "/documentationIndex",
            "type": 1,
            "icon": "el-icon-service",
            "orderNum": 0,
            "children": []
        },
        {
            "menuId": 2,
            "menuName": "指南",
            "parentId": 0,
            "route": "/guideIndex",
            "type": 1,
            "icon": "el-icon-service",
            "orderNum": 0,
            "children": []
        },
        {
            "menuId": 3,
            "menuName": "权限",
            "parentId": 0,
            "route": null,
            "type": 1,
            "icon": "el-icon-setting",
            "orderNum": 0,
            "children": [{
                "menuId": 4,
                "menuName": "页面权限",
                "parentId": 3,
                "parentName": "权限",
                "route": "/pagePermissionIndex",
                "type": 1,
                "icon": "el-icon-service",
                "orderNum": 1,
                "children": []
            },
                {
                    "menuId": 5,
                    "menuName": "指令权限",
                    "parentId": 3,
                    "parentName": "权限",
                    "route": "/directivePermissionIndex",
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 2,
                    "children": []
                },
                {
                    "menuId": 6,
                    "menuName": "角色权限",
                    "parentId": 3,
                    "parentName": "权限",
                    "route": "/rolePermissionIndex",
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 2,
                    "children": []
                }
            ]
        },
        {
            "menuId": 7,
            "menuName": "图标",
            "parentId": 0,
            "route": "/iconsIndex",
            "type": 1,
            "icon": "el-icon-news",
            "orderNum": 0,
            "children": []
        },
        {
            "menuId": 8,
            "menuName": "组件",
            "parentId": 0,
            "route": null,
            "type": 1,
            "icon": "el-icon-news",
            "orderNum": 0,
            "children": [
                {
                    "menuId": 9,
                    "menuName": "文本编辑器",
                    "parentId": 8,
                    "parentName": "组件",
                    "route": "/tinymceIndex",
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 1,
                    "children": []
                },
                {
                    "menuId": 10,
                    "menuName": "编辑器",
                    "parentId": 5,
                    "parentName": "组件",
                    "route": "/markdownIndex",
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 1,
                    "children": []
                },
                {
                    "menuId": 11,
                    "menuName": "JSON编辑器",
                    "parentId": 5,
                    "parentName": "组件",
                    "route": "/jsonEditorIndex",
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 1,
                    "children": []
                }
            ]
        }]
})
Mock.mock('backstage/loginIndex/loginData?account=vue-layui&password=123456',{
    result:{
        code:'000000'
    }
})