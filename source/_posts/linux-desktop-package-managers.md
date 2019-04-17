---
title: "The Linux Desktop and Package Managers"
date: 2012-06-13
category: linux
tags: linux
---

Server based Linux distributions are simply extraordinary. They're performant, reliable, fault tolerant and support a large variety of applications. Features of the operating systems are engineered to make sense for large scale deployments. Everything from the setup of the file system to the way services are handled makes sense for a server. Organizations rarely see limitations with their Linux distributions, instead they see a powerful and malleable operating system that suites the needs of modern networks and service architectures.


Distributions like Red Hat, Suse Enterprise (and in some cases Debian) make it very easy for organizations to have confidence in the software they run and to be sure that security updates will come in on time. They're not too worried about having to compile software they do not find in the package manager from scratch. They're probably also not worried that many of the packages in the manager are a few months or years out of date. It doesn't matter. They simply require tried and tested software that they know will  host their services.

The server environment has had a ton of investment over the years and is thoroughly engineered to meet the demands of the enterprise. The success of the Linux server is no mishap. It is properly engineered, purely deliberate and fully functional.

What about the Linux desktop? Well one could argue that with the advent of Windows 7 that Linux desktop distributions have been less and less relevant. On the other hand one could also argue that with Windows 8 they will be more relevant than before.

Why has the Linux desktop failed while the server has been so successful? The reasons are very numerous and very complicated.&nbsp;There is no single issue that amounts to the trouble that is the Linux desktop. There are only minor issues that all add up to be a sum greater than their individual parts.

That is except for the installation of software. In no other area do Linux desktop distributions have more trouble (gaming is another post in its own right).&nbsp;For example. Imagine a wireless driver that has a regression from kernel release 2.6.32 to 3.0.0 and stops functioning (this problem was faced by my most recent laptop.) That means that the average user that does not want to compile a kernel can only install a distribution that is old enough to support 2.6.31.

Why can't a Linux distribution with kernel 3.0.0, also be able to support the kernel from a previous release? And pull it from an older repository? Why can't packages know which kernel they support? Well, the reason is that package maintainers usually do not know what the oldest kernel version is that a package supports (unless it's a high profile package such as glibc, gcc, xorg,  drivers, etc.)

Actually most applications rarely rely on kernel versions. Debian's dpkg is an example of a program that actually does rely on being compiled against specific kernel versions to access superior functionality. This is done for performance, but very few user land applications actually do this. On a given system, only a handful of packages require a kernel more recent than x.x.5 releases behind.

Why can't users just have the best of both worlds and install two different versions of dpkg, so they use each kernel? You can argue about a distribution supporting multiple versions of a kernel and its merits, along with the technical difficulty of such a proposition. It's a very difficult matter and distributions are usually not in the business of spending time doing this. They're usually too busy simply packaging and integrating software for the next release to have any time or resources for small gains.

But what about multiple versions of Mozilla Firefox? Multiple versions of GCC? Why is this a problem? What if a user needs both GCC 4.2 and 4.7? Why does a package maintainer have to split them apart for the user? What if the distribution doesn't have both versions? What if the user does not want to compile GCC from scratch. Doesn't the process of having to compile an application  defeat the point of having an operating system? Does a user have an operating system to simply spend the majority of their time understanding compiler errors and waiting for infamously long C++ compile times?

What about when a user goes to a website and they want to install an application, but they find that their distribution does not support the versions of dependencies required. They have to upgrade their distribution. Why can the distribution not have both the new versions of the libraries and the previous versions? Windows does this fine.

It's absolutely jarring to go from a website where I can see all the information on an application, switch to the package manager and find that the application is not available. Forcing the user into a jailed sandbox, where they rely on the distribution for software is the same as having an app store for your operating system. There is little to no difference. Users  have little control over the versions of software and have a hard time installing software from sources that are external to their standard repositories.

It's simply a system that cannot scale. Developers cannot package their software for multiple distributions and package maintainers simply cannot package all the world's Linux applications. Users are locked into the tiny world that is their Linux distribution. Even Ubuntu is not perfect and versions differ and developers stop supporting software and package maintainers stop packaging software. There's too much human effort being thrown at a problem that shouldn't exist. It's simply wasted time and effort.

Linux on the desktop is simply a muscle car that's burning and shredding its wheels, but it is going no where. It hasn't solved the core problem of a desktop operating system. People do not simply select operating systems for their desktop environments or because they look good on tablets. They select them for the applications they run.

An operating system's only purpose is to run applications. This should be the primary focus of the Linux desktop.
