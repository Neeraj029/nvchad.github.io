import{M as s}from"./index-ccb7c80e.js";import{b as n,q as a}from"./entry-client-022945ec.js";function l(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},s(),r.components);return[n(e.h1,{children:"# NvChad API"}),`
`,n(e.p,{children:"These are list of some functions which are provided by nvchad plugins that aren't included in the config. You can make commands & mappings out of them."}),`
`,n(e.h2,{children:"Tbufpick"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used for picking buffers by entering the numbers previewed on them after running this module."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).tbufpick()
`]}})}}),`
`,n(e.h2,{children:"Arrange buffer"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used for arranging buffers left/right in the tabufline."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- move buffer right"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"1"}),`)

`,n(e.span,{className:"hljs-comment",children:"-- move buffer left"}),`
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),").move_buf(",n(e.span,{className:"hljs-number",children:"-1"}),`)
`]}})}}),`
`,n(e.h2,{children:"Toggle transparency"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used to toggle transparency, make sure that you have transparency option set in your chadrc."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
`]}})}}),`
`,n(e.h2,{children:"Toggle themes"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Used to toggle between 2 themes, make sure that you have ",n(e.code,{children:"theme_toggle"})," option set in your chadrc."]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"base46"'}),`).toggle_themes()
`]}})}}),`
`,n(e.h2,{children:"Close all buffers"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Used to close all the buffers in current tab. ( the close icon in tabufline handles this )."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad_ui.tabufline"'}),`).closeAllbufs()
`]}})}})]}function c(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n(e,a(r,{get children(){return n(l,r)}})):l(r)}export{c as default};
