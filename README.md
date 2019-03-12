# **** Work in Progress for the new structured *****

# Sitecore JSS with helix: sitecore-first-approach | helix principle

Consult the primary JSS documentation at https://jss.sitecore.net for the latest documentation on JSS.

## What is this sample?

This is sample sitecore jss code setup built on top of helix principle based on jss-official samples.

## Why this sample?

Using this samples we can create our own sites. This examples contains the set of helix components we can utilize it and this will guide a new component creations.

## What changes this sample made from the jss official base solution?

This sample contains below changes from the official jss samples

1. All component folder structure changes. Here this will wrap inside feature folders.

2. This contains Seperate project folder.It contains route handlers, approot.js,layout.js and datafetch.js.
   This are all particular project specific files , so these files wrap under specific project folders. 
   
3. All sublayout components will under *src/project/{Project-Name}/Component folder*. Because sublayouts will refer feature components. So  as per helix principle this wrap under project layer.

![component folder](https://user-images.githubusercontent.com/11770345/53410106-d9283e80-39e8-11e9-80ca-590c5eb49646.PNG)

4. Components registration related component factory file(**generate-component-factory.js**) get changed based on new helix structures.

5. New component creations like Logo,Navigation etc.. these are in feature layer.

6. Based on location of changed files ,import statements also changed in multiple js files.

## Installation

>Before installation make sure you are setup JSS in your sitecore server. Please follow the official jss documentation for that.

**Step1:** Create root folder like D:\Git. Install jss cli cmd(**" D:\Git>npm install -g @angular/cli"**) in the root folder.

**Step2:** Clone this repostory samples in root folder.

**Step3:** Run npm install cmd(**D:\Git\JssReactWeb>npm install**) in respective samples folder. 

**Step4:** Run jss setup cmd(**D:\Git\JssReactWeb>jss setup**) or change the scjssconfig js files with ur local sitecore setup folders.

![scconfig](https://user-images.githubusercontent.com/11770345/53410105-d88fa800-39e8-11e9-9c3d-43070ca66e98.PNG)

**Step6:** Unicorn setup project (JSS.Serialization.csproj) is under Serialization folder publish the project to your sitecore instance and sync all the modules.

**Step7:** Start the site using the cmd(**D:\Git\JssReactWeb>jss start:connected**)

## Architecture 

Consult the primary helix documentation from here https://helix.sitecore.net/. Below explanation for js code setup only , in sitecore side you can follow the helix implementations.

### Feature
  Feature layer will fall under **Src/Feature**, This contains all componets code like below
  
![feature layer](https://user-images.githubusercontent.com/11770345/53410108-d9c0d500-39e8-11e9-8dd9-23abf619269e.PNG)

### Foundation
  In this sample foundation(**Src/Foundation**) contains AppRoot.js,dataFetcher.js,Layout.js and RouteHandler.js. 
  
![foundation layer](https://user-images.githubusercontent.com/11770345/53410100-d88fa800-39e8-11e9-89e2-028ff73d1bd6.PNG)

### Project
  Project layer(**Src/Project**) contains all project realted files , In this sample SafariZoo site and it contains all the site related files.

![project layer](https://user-images.githubusercontent.com/11770345/53410103-d88fa800-39e8-11e9-996d-9ef9d8ee3e87.PNG)

All sublayout components will under **src/project/{Project-Name}/Component folder**. Because sublayouts will refer feature components. So as per helix principle this wrap under project layer.

## Unicorn
All sitecore sample site template,media,layout,place holder,rendering and content items are configured in serialization project.

