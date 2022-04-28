// // Component keys are mapped to the component.id from:
// // https://www.figma.com/file/mnqsEtNPGyNALUoPnYNuzS/project_template?node-id=4%3A37
// // Using the 'inspector plugin' we can retreive these keys.

// export type PAGE_DATA_TYPE = {
//     pageName: string
//     componentKey: string
// }

// export type PAGES_TYPE = Record<string, PAGE_DATA_TYPE>

// export const PAGES: PAGES_TYPE = {
//     sandbox: {
//         pageName: '🏖 Sandbox',
//         componentKey: null,
//     }
//     about: {
//         pageName: 'About',
//         componentKey: null,
//     }
//     Research: {
//         pageName: 'Research',
//         componentKey: null,
//     }
//     divider: {
//         pageName: '---',
//         componentKey: null,
//     }
//     handoff: {
//         pageName: '👋 Handoff',
//         componentKey: null,
//     }
//     components: {
//         pageName: '👾 Components',
//         componentKey: null,
//     }
//     divider: {
//         pageName: '---',
//         componentKey: null,
//     }
//     archive: {
//         pageName: 'Archive',
//         componentKey: null,
//     }
//     cover: {
//         pageName: 'Cover',
//         componentKey: null,
//     }
// }

// export const TABS = ['pages']

// export const getPages = (newTab: string) => newTab === 'pages'