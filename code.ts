// Created by @lukeylias
// This plugin generates our design handoff template to new / exisiting Figma files.

// import { COMPONENTS } from "./constants";

// Pages that will be generated.
let pages = [
  "🏖 Sandbox",
  "About",
  "Research",
  "---",
  "👋 Handoff",
  "👾 Components",
  "---",
  "Archive",
  "Cover"
]

let run = async () => {
  let currentPage = figma.currentPage;
  currentPage.name = pages[0]

  // Create section_title components
  // let sectionTitle = await figma.importComponentByKeyAsync()

  for (let page of pages.slice(1)) {
    let newPage = figma.createPage();
    newPage.name = page
  }
  //Closes plugin and notifies of success.
  figma.closePlugin("Pages created 🤘");
}

run();

