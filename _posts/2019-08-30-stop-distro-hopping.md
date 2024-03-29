---
date: "2019-08-30"
title: Stop Distro Hopping
---

From 2005 to 2017, I hadn't been able to stick to a single installation of any Linux Desktop Distribution. Whether it was Mandrake, Debian, Slackware, Ubuntu, Fedora, SUSE, Mepis or any of the many Linux distributions I switched between. Even Windows would periodically be installed onto one of many computers.

It took until 2017 for me to settle. On OpenSUSE Tumbleweed. Why did it take so long? I would argue that it was not entirely my fault. That most Linux distributions were not stable enough. Until recently there'd been the promise of an easy to use, yet stable and up to date distribution that'd never came to fruition.

---

### How it started

I still remember getting my first computer at age nine and finding _TurboLinux Workstation 6.0 Lite_ in a stack of games discarded in the drawer. Most of the discs were from cereal boxes, demo discs or game packs from the 1990s. The TurboLinux CD was different. [Only black, yellow and white](https://twitter.com/thunderdabest1/status/1048572202965196800). The large font and lightning bolt stamped on the disc was strikely corporate. Its branding did nothing to stand out. Yet looked mysterious. Completely different from the vibrant imagery of PC game discs I had become accustomed to.

TurboLinux stayed in that drawer for years until one day I'd decided to take it out. Looking for images of Windows 3.11 through Google proved fruitless. Bored. Unable to find older versions of Windows, I went to the drawer and pulled out TurboLinux. After 3 days I could log into an installed system.

Although I successfully installed TurboLinux, loaded KDE and Gnome, I never did get the WinModem in my 450MHz Compaq Pentium 2 to work. Installation of the driver required building the kernel. This proved too much for a 10 year old.

Eventually Turbolinux caused me to purchase Mandrake 9.2 and I began frequenting [Distrowatch](https://distrowatch.com), [OSNews](https://www.osnews.com) and [Slashdot](http://slashdot.org/).

### Where do I find the Perfect Linux Distribution?

Even without broadband internet distributions could be ordered online with a credit card. They would come in the mail on DVD or CD. At the time I had ordered Mandrake 9.2, Mandrake 10, Debian, Slackware, Fedora Core, SUSE 9.1 Personal, Knoppix and many other distributions I've since forgotten.

For the following years, I would spend _hours_ switching between Windows and various distros. Backing up data to floppies, CDs, DVDs. Often dual booting, but sometimes triple or quad booting on the same computer. Later on I purchased multiple computers to install even more operating systems.

What started in 2001 as an interest in alternatives to Windows 98. Became formatting computers on a weekly basis. Insisting that this year would. Finally. Be the year of the Linux desktop.

### Disenchantment

Overtime there was an increasing disenchantment with the idea of the Linux desktop. I was convinced the main issue with the Linux desktop was the inability to install multiple versions of the same application. The inability to install multiple library versions on the same distribution led to compatiblity issues. Distributions were not future and backward compatible. Worse they were not compatible with each other. Packaging software became a difficult task, offloaded from the developer to a package maintainer. The user was in stuck in limbo.

Docker solved this issue by allowing dependencies to be bundled with applications. Processes in docker can be started using the full user space binaries of other Linux distributions. Since the Linux kernel maintains backwards compatibility. Docker effectively solved the issue known as "dependency hell". Allowing developers to easily distribute working installations that would run on any Linux distribution.

Before Docker existed. I switched between distributions with alternating release cycles. Such as Fedora and Ubuntu. Switching between the two, sometimes meant getting newer packages, because their release cadences were off by roughly three months. Three months after Ubuntu was released, Fedora would come out with newer packages. The constant desire to be running the latest packages and applications kept me formatting and installing new Linux distributions on a regular cadence.

### Rolling Release

There are multiple reasons for distribution hopping, but I would propose one of the main reasons being that users prefer to be running the latest packages available. Particularly since many userspace libraries have remained backwards compatible.

One day while watching Linux kernel development videos by Greg Kroah-Hartman, I came across OpenSUSE Tumbleweed. Similar to Arch, OpenSUSE Tumbleweed is a rolling release distribution, but is upgraded less aggressively. Tumbleweed uses automated test suites to ensure breaking updates are less common, even with frequent updates. Since switching to Tumbleweed, there has been no reason to nstall different distributions. Having formatted in December 2017 to move from Btrfs to Ext4, I have never needed to reinstall since.

### Distributions are not special

Most Linux distributions are roughly the same. Most use Systemd. They have a package manager that pulls compressed packages with files and scripts to copy and execute on the local machine. The packages are signed and normally from a trusted source. They provide the same desktop environments. Their installers are roughly the same from a user facing level. There's little reason to switch distributions for a simple workstation.

Linus Torvalds [pointed out why he](https://fossbytes.com/linus-torvalds-doesnt-use-ubuntu-linux-debian/) used Fedora. Because it was easy to install and use. He didn't pay much attention to the Linux distribution. The distribution is not relevant. Applications are relevant. Linus wanted to use applications and develop the Linux kernel. Not play around with Linux distributions.

Now I abide by the following:

1. Use a rolling release distribution
   - Use Docker when you must run applications created for other distributions.
2. Stop customizing the desktop environment
   - Operating systems are meant for running applications. Installing themes or customizations is okay, but not valuable.
3. Use your computer for performing tasks; as a means to an end
   - Treat your computer as a "Workstation". Computers are meant to do work. Fiddling with operating systems outside of systems programming is not a valuable use of time.

Unfortunately I no longer have that TurboLinux disc anymore, but it holds an important part in my memory as not only the introduction to Linux, but as the precursor to what would become an interest in software development.

That being said. My preferred distro is Tumbleweed on workstations. Rolling release Linux distributions have become incredibly stable. And distributions too similar to warrant change. Maybe other workstation users will notice and begin shifting towards rolling release distributions.
