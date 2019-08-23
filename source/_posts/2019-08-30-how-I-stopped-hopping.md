---
layout: false
date: 2019-08-30
title: How I Stopped Distro Hopping
author: hkhani
---

Since 2005 I had been attempting to stick to a single installation of any Linux Desktop Distribution. Whether it was Mandrake, Debian, Slackware, Ubuntu, Fedora, SUSE, Mepis or any one of the countless Linux distributions I was constantly switching between. Even Windows would periodically be installed onto one of many computers.

It took until 2017 to _finally_ stop the process of formatting and installing new distributions. Why did it take so long? Partially, I would argue that most Linux distribution releases weren't stable enough until recently. And there'd always been the promise of an easy to use, yet stable and up to date distribution. But most of the blame could be placed on my usage, rather than the operating systems themselves. The issue was how I approached computing in general.

### How it started

I still remember getting my first computer at age 9 and finding TurboLinux Workstation 6.0 Lite lost in my brother's stack of games discarded in the drawer. Most of the games were part of the Sims collection, from cereal boxes or demo discs. The TurboLinux CD was different. Only black, yellow and white were used to print the large font and lightning bolt on the stamped compact disc. The branding did nothing to stand out and looked mysterious to my younger self that'd never seen anything but the vibrant imagery of PC game discs.

It took a long time to find, but [someone else on twitter still has the disc.](https://twitter.com/thunderdabest1/status/1048572202965196800)

TurboLinux stayed in that drawer for years until one day I decided to take it out. One day, while looking for images of Windows 3.11 through Google which proved fruitless. I decided to try a new operating system. Being unable to find older versions of Windows, I went to the drawer and to see what was this TurboLinux disc. It took 3 days to install and log into the system. I hadn't understood that upon first boot one had to login as `root` and that the `root` password (which I randomly entered characters for) was the password entered during one of over 50 installation prompts. Fortunately another user had the same issue on [linuxquestions.org](https://www.linuxquestions.org) and I figured out how to login.

Although I successfully installed TurboLinux and used KDE, I never did get the WinModem in my 450MHz Compaq Pentium 2 to work with the kernel. Installation of the driver required recompilation of the kernel and that was too much for an 11 year old to figure out.

Getting TurboLinux installed peeked my interest as the alternative had been the unreliable Windows 98. Since using the PlayStation more than the PC for gaming, support for video games wasn't a concern. [Distrowatch](https://distrowatch.com), [OSNews](https://www.osnews.com) and even [Slashdot](http://slashdot.org/) has become my most frequented sites at the time.

### Where do I find the Perfect Linux Distribution?

Even without broadband internet, distribution hopping was still within reach. Soon I was taking all the money I had saved and ordering discs of Mandrake 9.2, Mandrake 10, collections with Debian, Slackware, Fedora Core, SUSE 9.1 Personal, Knoppix, ... Some of the distributions were over 12 CDs...

Over the years, nearly every 2 weeks, I would spend _hours_ switching between Windows and various distros. Backing up data to floppies, then CDs, then DVDs. Often dual booting, but sometimes triple or quad booting on the same computer. Later on I purchased multiple computers to install even more operating systems.

What started in 2005 as an interest in alternatives to Windows 98. Became formatting multiple computers on a weekly basis and annoying everyone about how Linux was going to change the world and everyone needed to try it out. Because it was the year of the Linux desktop (_remember when that was a thing people talked about?_)

### Disenchantment

Overtime I became increasing disenchanted with the idea of the Linux desktop. I was convinced the main issue with the Linux desktop was the inability to install multiple versions of the same package through package managers. Being unable to have multiple versions of the same package lead to installed distributions becoming no longer compatible with newer applications, but it also meant that distributions were not fully backwards compatible. The user was in some kind of limbo.

Oddly enough, Docker solved this issue by allowing processes to be started in a pseudo environment using the full user space binaries of other Linux distributions. Since the Linux kernel maintains backwards compatibility, all that needed to be replicated was the user space. Docker effectively solved the issue known as "dependency hell".

Before Docker existed, I would switch between distributions with alternating release cycles. Such as Fedora and Ubuntu. Switching between the two, sometimes meant getting newer packages, because their release cadences were off by roughly 3 months. Therefore 3 months after Ubuntu was released, Fedora would come out with newer packages. The constant desire to be running the latest packages and applications kept me formatting and installing new Linux distributions on a regular cadence.

### Rolling Release

There are multiple reasons for distribution hopping, but I say that one of the main reasons is that users want to be running the latest packages available. This may not say this directly, but it becomes apparent when you notice that they're switching between entirely different distributions.

Never the less, one day while watching YouTube videos on Linux kernel development, I came across OpenSUSE Tumbleweed. Similar to Arch, OpenSUSE Tumbleweed is a rolling release distribution, but is upgraded less aggressively. Tumbleweed uses automated test suites to ensure breaking updates are less common than other rolling release distributions. Since switching, I have had no inclination towards installing different distributions. Having formatted in December 2017 to move from Btrfs to Ext4, I have not needed to reinstall since.

### Distributions are not special

Most Linux distributions are roughly the same. Most use Systemd. They have a package manager that uses HTTP to pull compressed packages with files and scripts to copy and execute on the local machine. The packages are signed and normally from a trusted source. They use the same desktop environments and rendering systems. Their installers are roughly the same from a user facing level. etc... I could go on...

There is little point in moving between Linux distributions, especially if they are merely derivatives of existing operating systems supported by major communities with funding. The point of an operating system is not to use the operating system, but to use the applications supported by the system. Operating systems do not do functional tasks. They provide support for doing functional tasks to applications. Applications do the functional tasks. This is why Ubuntu became so popular. Ubuntu got out of the way of users and made it easier to install applications.

Linus Torvalds said the same as he pointed out why he used Fedora. Because it was easy to install and use. He didn't pay much attention to the Linux distribution. The distribution is not relevant. Applications are relevant. Linus wanted to use applications and develop the Linux kernel. Not play around with Linux distributions.

### Tips to stop

Hopefully you realise switching Linux distributions is usually pointless.

If you are still distro hopping, I would recommend the following:

1. Use a rolling release distribution
    - Use Docker when you must run applications created for other distributions.
2. Stop customizing your environment
    - Operating systems are meant for running applications. Installing themes or customizations is not a use case. It's a form of procrastination.
3. Use your computer for performing tasks; as a means to an end
    - Treat your computer as a "Workstation". Computers are meant to do work. Avoid using them as a mechanism for entertainment or time wasting.

Unfortunately I no longer have that TurboLinux disc anymore, but it holds an important part in my memory of not only the introduction to Linux, but as the precursor to what would become an interest in software development.

Open Source really opened up the idea of software development in a greater community and provided a much needed sense of purpose that sparked the beginning of a passion for building software.
