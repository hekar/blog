---
layout: post
date: 2019-08-17
title: Compiling Source SDK on Linux
author: hkhani
---

The [Source SDK](https://half-life.fandom.com/wiki/Source_SDK) is a fork of Valve's internal [Perforce](https://en.wikipedia.org/wiki/Perforce) repository containing the application code they use to build Valve's games based on the Source 1 engine. Games such as [Counter Strike: Source](https://en.wikipedia.org/wiki/Counter-Strike:_Source), [Team Fortress 2](https://en.wikipedia.org/wiki/Team_Fortress_2) and [Half-Life 2](https://en.wikipedia.org/wiki/Half-Life_2).

The SDK [available on Github](https://github.com/ValveSoftware/source-sdk-2013/) is primarily based on [Half-life 2](https://en.wikipedia.org/wiki/Half-Life_2), while other games are removed from the repository before they are exported to Github.

Link to Github: https://github.com/ValveSoftware/source-sdk-2013/

The Source SDK is comprised of multiple projects that are shared libraries which are referenced by a proprietary engine created by Valve. The Engine and some of its surrounding tools are not open source and while source code can be found on the internet, usage is not legal and is covered under both copyright and DMCA.

The [Valve Source SDK license](https://github.com/ValveSoftware/source-sdk-2013/blob/master/LICENSE) makes it clear that the shared libraries are the property of Valve and while they may be freely used, there are some limitations that make them different from typical GPL and BSD licenses that we have become accustomed to. Namely that the application created cannot be used for commercial purposes.

### Why would you want to use the Source SDK?

The Source SDK is rather interesting, because there quite a few successful commercial games based on the platform. The platform is rather rich in features, though it may not be the most intuitive platform to use. The tooling and artwork pipeline lacks in areas that make it difficult for an artist to use. The artistic pipeline is primarily centered around proprietary file formats designed specifically for the Source Engine and command-line utilities that must be used to cover files between supported non-commercial formats and Valve's proprietary Source Engine formats.

Overall, the Source SDK can be interesting, because it is based on Half-life 2 and contains a fully featured version of Half-life 2 within it. This can give a basis for building a prototype or game top of the existing Half-life 2 series without needing to create everything from scratch. Of course Source is used to create many other games and contains abstractions that make it easy to move away from the look and feel of Half-life. Adding player functionality, weapons and game entities is completely within the scope of creating a game based on the Source SDK.

### Compiling on Linux

Now, because much of the Source SDK and the engine are proprietary. There is not much of a booming open source community as one would expect with some of this caliber of quality. Namely, because of a lack of updates, communication and being partially limited due its proprietary nature.

The Source Engine and SDK support Windows, macOS and Linux, but due to its closed sourced libraries compilation can be rather tricky. In this post I will show the easiest way to get started compiling the Source SDK on Linux.

The easiest way to compile the Source SDK on Linux is to use [Docker](https://www.docker.com) and an image of [Ubuntu 14.04](http://releases.ubuntu.com/14.04/). The reasoning is because the proprietary libraries that the SDK must be linked against were built using the shared libraries and version of GCC found in Ubuntu 14.04.

```bash
cd ~
git clone git@github.com:ValveSoftware/source-sdk-2013.git

sudo docker run -t -i -v $(pwd):$(pwd) ubuntu:14.04 /bin/bash
sudo apt-get update && sudo apt-get install -y gcc-multilib g++-multilib build-essential rsync

# In docker instance

# Change to the directory of the source-sdk-2013
cd <folder>/mp/src

# Create the Makefiles required for compilation
./createallprojects

# Compile the mod by running Make
make -f everything.mak

# Copy the binary files to your mod folder
rsync --progress -v ../game/mod_hl2mp/bin/* <path-to-home>/.steam/steam/steamapps/sourcemods/my-source-mod/bin/
```

### Other Tooling on Linux

Much of the Source SDK tooling is created for Windows only and does not execute on macOS or Linux. The solution is rather typical. Use Wine which supports most Source SDK tools rather reliably.

For model editing, the native version of [Blender 2.8x](https://www.blender.org/download/) can [be used](https://developer.valvesoftware.com/wiki/Blender_Source_Tools) with the [Blender Source Tools](http://steamreview.org/BlenderSourceTools/).

For mapping the included [Hammer](https://developer.valvesoftware.com/wiki/Valve_Hammer_Editor) can be used] by installing the [Source Base 2013 Single Player](https://developer.valvesoftware.com/wiki/Source_SDK_2013) installed with the Windows compatibility layer. Launch `Hammer.exe` using wine from the bin directory.

For texture compilation, the [tga2vtf.exe]() command-line application can be used via Wine.

### Conclusion

Using the Source SDK on Linux is feasible, although rather time consuming and sometimes unintuitive. It is more difficult to extend the platform due to the closed source nature. Had the Engine and SDK been fully open source and developed as an open source project in tandem with the surrounding community there would be a remarkable improvement in productivity and community support. Hopefully future versions of the Source 2 Engine will be developed directly on Github with developers allowing for complete open usage of their game engine.

Never the less, anyone interested in game development should take a look at the Source SDK if only for a view into how commercial games were developed in past. The Source SDK is a piece of history in game engine and tool development that has many lessons to offer.
