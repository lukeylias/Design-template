// Created by @lukeylias
// This plugin generates our design handoff template to new / exisiting Figma files.

let PAGES = [
  {
    pageName: "☀︎ Sandbox",
    componentKey: null,
  },
  {
    pageName: "About",
    componentKey: "1d0f78cad9989bd0e3318e8397d31f02cb29d5cb",
  },
  {
    pageName: "Research",
    componentKey: null,
  },
  {
    pageName: "–––––",
    componentKey: null,
  },
  {
    pageName: "↪️ Handoff page (duplicate me)",
    componentKey: "07c76dbfb1d4c259f757fae81ebe43c1ac6a8f1e",
  },
  {
    pageName: "◉ Prototype",
    componentKey: null,
  },
  {
    pageName: "❖ Components",
    componentKey: "3c6a06413cb26c37032bd26503e055da754064c1",
  },
  {
    pageName: "–––––",
    componentKey: null,
  },
  {
    pageName: "Archive",
    componentKey: null,
  },
  {
    pageName: "Cover",
    componentKey: "a7af6c9e43525debd81b1ae57fe07dccdab39bb5",
  },
];
let run = async () => {
  let currentPage = figma.currentPage;
  currentPage.name = PAGES[0].pageName;

  for (let pageData of PAGES.slice(1)) {
    let newPage = figma.createPage();
    newPage.name = pageData.pageName;
    if (pageData.componentKey) {
      const template = await figma.importComponentByKeyAsync(
        pageData.componentKey
      );
      const templateInstance = template.createInstance();

      // Add the template to the page
      newPage.insertChild(0, templateInstance);

      // Detach instance, keep the tree clean
      templateInstance.detachInstance();

      // Zoom to fit the template in view
      figma.viewport.scrollAndZoomIntoView([templateInstance]);

      // Re-get the templateInstance
      const frameRef = newPage.children[0];
      // it should be the first and only node
      frameRef.children.forEach((child) => frameRef.parent.appendChild(child));

      // Remove the tmp frameRef
      frameRef.remove();
    }
  }

  //Closes plugin and notifies of success
  figma.closePlugin("Pages created 🤘");
};

run();
