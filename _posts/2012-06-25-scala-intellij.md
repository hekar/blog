---
title: "Play 2.0 with Intellij"
date: "2012-06-25"
category: scala
tags: scala
---

After upgrading to Windows 8, I noticed some stability issues with Eclipse Juno. Many of the problems made Juno completely unusable on my installation.

---


While downloading the older version of [Eclipse (Indigo)](http://www.eclipse.org/indigo/), I decided to also give [Idea Intelij](http://www.jetbrains.com/idea/download/)&nbsp;community edition a try.

## Setup the project

Setting up the project is really easy with the "play" command.

Simply add the play framework to your $PATH or %PATH% (as you probably already have) and type: `play idea`
in your project folder. This should create an Intelij project that you can later import.

### Download Intelij

Download the community edition of Intelij from here:&nbsp;[http://www.jetbrains.com/idea/download/](http://www.jetbrains.com/idea/download/)

## Setup Scala Support

### Scala Plugin

The Scala plugin can be installed by clicking&nbsp;_File-&gt;Settings-&gt;Plugins-&gt;"Browse Repositories..."._&nbsp;After the installation of this plugin, everything should be ready for developing your Play 2.0 Scala application.

### Play 2.0 Plugin (Not recommended)

There is a Play 2.0 plugin for Intelij that has nightly builds here:

[http://confluence.jetbrains.net/display/SCA/Play+2.0+plugin+Nightly+Builds+for+Leda](http://confluence.jetbrains.net/display/SCA/Play+2.0+plugin+Nightly+Builds+for+Leda)

It is still in the early stages of development.

## What I noticed

I noticed the Scala support is very stable and auto complete works more often than not. The IDE seems a lot more cohesive and easier to use than Eclipse. The UI is well thought out.

Performance on my desktop machine is where Intelij is not the best. I changed some of the theming options and disabled unneeded plugins. Fortunately that fixed many of the performance issues, but it's not as fast as Eclipse Juno. This is not a big deal though, because the rest of the IDE makes up for it.

Overall, I'm happy with Intelij and will begin to consider using it more often in other projects.
