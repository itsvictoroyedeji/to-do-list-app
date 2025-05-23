export default function ProjectsHomeList() {
  //<main id="content" aria-label="Main Content" tabindex="-1">
  const mainContent = document.querySelector("#content");
  
  //<div class="WwLx9J2 EsfK5SD my-projects-container">
  const myProjectsContainer = document.createElement("div");
  myProjectsContainer.classList.add("WwLx9J2", "EsfK5SD", "my-projects-container");
  mainContent.appendChild(myProjectsContainer);

  //<div class="fb8d74bb _14423c92 _5f8879d9 _45a8f27f _8c75067a _75ca308a">
  const myProjectsContainer2 = document.createElement("div");
  myProjectsContainer.classList.add("fb8d74bb", "_14423c92", "_5f8879d9", "_45a8f27f", "_8c75067a", "_75ca308a");
  myProjectsContainer.appendChild(myProjectsContainer2);

  //<div class="ftK0KhN main-view-layout l5H4jIN main-view-layout--narrow fb8d74bb _14423c92 _2d7320f2 _794c8ab8 c3b69d70">
  const mainViewLayout = document.createElement("div");
  mainViewLayout.classList.add("ftK0KhN", "main-view-layout", "l5H4jIN", "main-view-layout--narrow", "fb8d74bb", "_14423c92", "_2d7320f2", "_794c8ab8", "c3b69d70");
  myProjectsContainer2.appendChild(mainViewLayout);

  //<header class="IQkC6u4" aria-label="Header: contains title related to the current view">
  const header = document.createElement("header");
  header.classList.add("IQkC6u4");
  const headerLabel = "Header: contains title related to the current view";
  header.setAttribute("aria-label", headerLabel);
  mainViewLayout.appendChild(header);

  //<div style="height: 56px"></div>
  const headerHeight = document.createElement("div");
  headerHeight.setAttribute("style", "height: 56px");
  header.appendChild(headerHeight);

  //<div aria-hidden="false" data-testid="large-header" class="z9PJyaa cZu8y64 c0PV7ab fb8d74bb _14423c92 _5f8879d9 b76144ce b4e05554">
  const largeHeader = document.createElement("div");
  largeHeader.classList.add("z9PJyaa", "cZu8y64", "c0PV7ab", "fb8d74bb", "_14423c92", "_5f8879d9", "b76144ce", "b4e05554");
  largeHeader.dataset.testid = "large-header";
  largeHeader.setAttribute("aria-hidden", "false");
  header.appendChild(largeHeader);

  //<div class="fb8d74bb _14423c92 _2d7320f2 c3b69d70 c68f8bf6 _8c75067a">
  const largeHeader2 = document.createElement("div");
  largeHeader2.classList.add("fb8d74bb", "_14423c92", "_2d7320f2", "c3b69d70", "c68f8bf6", "_8c75067a");
  largeHeader.appendChild(largeHeader2);

  //<div class="CDUIn7V fb8d74bb _14423c92 b0e6eab4 _5f8879d9 b76144ce c68f8bf6 _8c75067a">
  const largeHeader3 = document.createElement("div");
  largeHeader3.classList.add("CDUIn7V", "fb8d74bb", "b0e6eab4", "_5f8879d9", "b76144ce", "c68f8bf6", "_8c75067a");
  largeHeader2.appendChild(largeHeader3);

  //<div class="aObLL0M fb8d74bb _14423c92 _5f8879d9 c3b69d70">
  const largeHeader4 = document.createElement("div");
  largeHeader4.classList.add("aObLL0M", "fb8d74bb", "_14423c92", "_5f8879d9", "c3b69d70");
  largeHeader3.appendChild(largeHeader4);

  //<h1 class="bff24867 b3e14969 _71391f13 _6d357d76 fb8d74bb _211eebc7">
  const projectHeaderText = document.createElement("h1");
  projectHeaderText.classList.add("bff24867", "b3e14969", "_71391f13", "_6d357d76", "fb8d74bb", "_211eebc7");
  projectHeaderText.appendChild(document.createTextNode("My Projects"));
  largeHeader3.appendChild(projectHeaderText);

  //<div data-testid="large-subtitle" aria-hidden="false" class="fQcyOsJ fb8d74bb _958da546">
  const largeSubtitle = document.createElement("div");
  largeSubtitle.classList.add("fQcyOsJ", "fb8d74bb", "_958da546");
  largeSubtitle.dataset.testid = "large-subtitle";
  largeSubtitle.setAttribute("aria-hidden", "false");
  largeHeader2.appendChild(largeSubtitle);

  //<div class="a83bd4e0 _6a3e5ade _969f18f7 d3e04245 fb8d74bb _211eebc7 subtitle-plan-type">
  const subtitlePlanType = document.createElement("div");
  subtitlePlanType.classList.add("a83bd4e0", "_6a3e5ade", "_969f18f7", "d3e04245", "fb8d74bb", "_211eebc7", "subtitle-plan-type");
  const planType = "Free Plan";
  subtitlePlanType.appendChild(document.createTextNode(planType));
  largeSubtitle.appendChild(subtitlePlanType);

  //<div class="b_zgYVi fb8d74bb _14423c92 _66895b64 _2d7320f2 b76144ce b4e05554 _8c75067a a9ca9830">
  const headerLastLineSpacer = document.createElement("div");
  headerLastLineSpacer.classList.add("b_zgYVi", "fb8d74bb", "_14423c92", "_66895b64", "_2d7320f2", "b76144ce", "b4e05554", "_8c75067a", "a9ca9830");
  headerLastLineSpacer.setAttribute("style", "top: 56px");
  header.appendChild(headerLastLineSpacer);

  // -------

  // <div class="imKBXQv fb8d74bb _4e9ab24b search-projects-container">

  // <div class="fb8d74bb _14423c92 _2d7320f2 c68f8bf6 _8c75067a">

  // <div class="fb8d74bb _14423c92 _2d7320f2 _2580a74b _8c75067a project-search-box-container">

  // <div class="d5ff04da fb8d74bb _14423c92 _5f8879d9 b76144ce">

  // <div class="fb8d74bb c3b69d70">

  // <div class="c8f65b3b fb8d74bb _14423c92 _5f8879d9 b76144ce search-input-border">

  // <div class="b79b851f fb8d74bb _14423c92 _8e9bf2ee f9be90b4 _5f8879d9">

  // <svg>...
  

}