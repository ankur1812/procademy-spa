# Procademy: SPA Assignment

Project Details [here](https://procademy.atlassian.net/wiki/external/MjVjOWI2MjI0NTg2NDI5NzlhMjYzOWFjMTA0OGFjNGU).

Figma Design [here](https://www.figma.com/design/lpRrJLliPaGiQeKZy50LYI/Assignment)

Sandbox URL: [https://vgqlfc.csb.app/](https://vgqlfc.csb.app/)

## 1. Project setup

#### Install

```
yarn install
```

#### Compiles and hot-reloads for development

```
yarn serve
```

#### Compiles and minifies for production

```
yarn build
```

#### Lints and fixes files

```
yarn lint
```

## 2. Project details

### Basic Setup

- Vue3 setup (options API) with routing
- JavaScript & Tailwind + CSS
- Syncfusion Grid for showing the profiles data-table
- Modular components

### Funcational Requirements:

#### 2.1. Homepage / Overview page

- App's homepage is set to the Profiles overview page.
- Responsive UI
- Displays the grid with training profiles
- Components used: <b>Syncfusion grid</b> & <b>RadioButton component</b>
- <b>RadioButton component</b> to filter profiles w.r.t achieved (Yes / No / Clear)
- [Syncfusion grid](https://ej2.syncfusion.com/vue/documentation/grid/vue-3-getting-started) with [ODataAdaptor](https://ej2.syncfusion.com/vue/documentation/grid/data-binding/remote-data#odata-adaptor---binding-odata-service) is used with Service URI: [https://proc-front-dev-task.wiremockapi.cloud/training_profiles](https://proc-front-dev-task.wiremockapi.cloud/training_profiles) to display the grid.
- 4 columns added for ID / Title / Achived (status) / Action
- The grid also sends the `verticalView = true` prop to RadioButton, which renders the options vertically for mobile screens.

#### 2.2. Profile details page

- Profiles data fetched from [https://proc-front-dev-task.wiremockapi.cloud/training_profile/{id}
  ](https://proc-front-dev-task.wiremockapi.cloud/training_profile/{id})
- Response UI
- Components used: CompetenceList, CompetenceItem, RadioButton, ProgressBar
  -- <b>Back navigation</b>: Router link to go back to the overview page
  -- <b>CompetenceList</b>: contains the <b>CompetenceItem</b> and <b>RadioButton</b> to toggle between list/grid views
  -- <b>CompetenceItem</b>: Shows the competence: Skill/Course name + achived/required info and a <b>ProgressBar</b>. Aso shows the <b>BadgeIcon</b> for badge corresponding to the competence.

#### 2.3. Layout components:

- <b> DefaultLayout</b> Renders the Header and BreadCrumbs component, then the <b>Router view</b> for the current page contents is shown below them

<!-- ## 3. Dev motes, blockers, design choices

- <b>Issue with icon-sets not loading.</b> Ideally adding the icon fonts + the corresponding style in the `/assets` folder should have worked. In the codesandbox environment only the CSS for the icons was getting picked up but the support for the font-files (woff, woff2, ttf, otp) seems to be missing in Codesandbox. For this reason the `/fonts`
  folder is added to the root `/public` folder as well.

- <b>Header logo image</b>. Again in the codesandbox environment, directly using the svg file for the header image isn't supported. For a quickest fix, the SVG file is also converted as PNG and then loaded to the header.

- <b>Tailwind: latest features not supporting through unpkg import. </b> The tailwind package added through <b>unpkg</b> CDN in the `App.vue` file does not support the latest functionalities like green/slate colors and responsive sm/lg/md screen breakpoints. For this reason the CDN import is moved to the root `index.html` file where the [https://cdn.tailwindcss.com](https://cdn.tailwindcss.com) script is loaded directly.

- <b>Routing and layout</b>. I have used the more modern approach (used in Nuxt3 / Next.js) of using layouts for route-viewing (`/layouts/DefaultLayout.vue`). Because of this the root `"/"` route in `/route/index.js` is set to `DefaultLayout` and not `Overview` page. <b>Breadcrumbs</b> component had to be updated with a few extra checks to make sure the routing crumbs work and are as per the figma design. -->

## 4. Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
