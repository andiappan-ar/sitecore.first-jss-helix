
# Sitecore JSS with helix: sitecore-first-approach | helix principle

Consult the primary JSS documentation at https://jss.sitecore.net for the latest documentation on JSS. 

## What is this sample?

This consisits of sample websites with jss sitecore first approach with helix. Currently this sample contains react components.


## What changes this sample made from the jss official base solution?

This sample contains below changes from the official jss samples

1. All component folder structure changes. Here this will wrap inside feature/foundation folders under src.

2. Components registration related component factory file(**generate-component-factory.js**) get changed based on new helix structures.

3. Based on location of changed files ,import statements also changed in multiple js files.

## Installation

>Before installation make sure you are setup JSS in your sitecore server. Please follow the official jss documentation for that.

**Step1:** Create root folder like D:\jss-sc-first. Install jss cli cmd(**" D:\jss-sc-first>npm install -g @angular/cli"**) in the root folder.

**Step2:** Clone this repository samples in root folder. Install root nodemodules using (**" D:\jss-sc-first>npm install"**), This will install gulp.

**Step3:** Run npm install cmd(**D:\jss-sc-first\Samples\JssWebReact\project\safarizoo>npm install**) in respective project folder. 

**Step4:** Run jss setup cmd(**D:\jss-sc-first\Samples\JssWebReact\project\safarizoo>jss setup**) or change the scjssconfig js files with ur local sitecore setup folders. create your local bindings then mentioned those bindings in scjssconfig.
```
{
  "sitecore": {
    "instancePath": "C:\\inetpub\\wwwroot\\{CMS.Hostname.com}",
    "apiKey": "{58255D15-2CC4-4FD6-A27D-BC3167F63A5D}",
    "deploySecret": "guimtkb9vddf3r1j9q777d23mndkiyzzzzzzzzzz",
    "deployUrl": "http://SafariZoo.local/sitecore/api/jss/import",
    "layoutServiceHost": "http://SafariZoo.local"
  }
}
```

**Step4:** Run gulp cmd in respective project folder (**D:\jss-sc-first\Samples\JssWebReact\project\safarizoo>gulp copy-packages**). This will merge feature|foundation components to your src folder.

![feature to foundation gulp cmd](https://user-images.githubusercontent.com/11770345/54266026-92b41180-459c-11e9-85d2-74558cbe75c2.PNG)

**Step5:** Run deploy config cmd (**D:\jss-sc-first\Samples\JssWebReact\project\safarizoo>jss deploy config**). This will copy the sitedefinition files to your hosted environment.

**Step6:** Unicorn setup project (JSS.Serialization.csproj) is under Serialization folder(**D:\jss-sc-first\Serialization**). Change your physical serialization location in **JSS.Serialization.config** and publish the project to your sitecore instance and sync all the modules.

**Step7:** Start the site using the cmd(**D:\jss-sc-first\Samples\JssWebReact\project\safarizoo>jss start:connected**)

## Architecture 

Consult the primary helix documentation from here https://helix.sitecore.net/. Below explanation for js code setup only , in sitecore side you can follow the helix implementations.

![total structure](https://user-images.githubusercontent.com/11770345/54266137-d0b13580-459c-11e9-910d-9a22522d314c.PNG)

### Feature
  Feature layer will fall under **Samples\JssWebReact\Feature**.Using project specific gulp file(**gulp copy-packages**) will transfer all feature components under **Project\{}\Src** folder.

### Foundation
  In this sample foundation(**Samples\JssWebReact\Foundation**) contains SitecoreContextFactory.js.Using project specific gulp file(**gulp copy-packages**) will transfer all feature components under **Project\{your-project-name}\Src** folder.

### Project
  Project layer(**Samples\JssWebReact\Project\{your-Project-Name}**) contains all project realted files , In this sample SafariZoo site and it contains all the site related files.
  
### Narrow down more compinents specific.
  If you want further narrow down your components structure. Introduce your own componet layer like i mentioned in below image then try to install dependecies in your respective projects.
  
  ![Capture](https://user-images.githubusercontent.com/11770345/54267311-fe977980-459e-11e9-82f1-64073d0d8384.PNG)
 ``` 
 File: Project\{your-project-name}\package.json
 
  "devDependencies": {   
    "feature": "file:../../feature",
    "feature-xyz-components": "file:../../feature-xyz-components",
    "foundation": "file:../../foundation",    
  }
  ```

## Unicorn
All sitecore sample site template,media,layout,place holder,rendering and content items are configured in serialization project. Refer installation step6 for setup.

