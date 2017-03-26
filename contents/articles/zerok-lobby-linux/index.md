---
title: "Building Zero-K Lobby on Linux"
author: Hekar Khani
date: 2013-11-24
template: article.jade
tag: gamesonlinux.io
---

Though, I am no longer an avid video game player I happened to come across a real-time strategy game a few months ago. The game is called Zero-K, is freely avaliable and open source. While the game runs very well under Windows, I have experienced quite a few issues under Linux.  
Recently, the game had stopped working altogether and I had been unsure of why.

After spending much time troubleshooting through "strace", I had began to suspect that the problem lay in the Lobby frontend for the game, rather than the game itself.

The Lobby is written in C# and has some issues building on Mono, but there are simple workarounds.

<span class="more"></span>

## Quick Fixes

`zero-k/other/.nugut/NuGet.targets` line 54:

```
  $(NuGetCommand) install "$(PackagesConfig)" -source "$(PackageSources)"  $(NonInteractiveSwitch) $(RequireConsentSwitch) -solutionDir "$(SolutionDir) " 
```
Should instead be
```
  $(NuGetCommand) install "$(PackagesConfig)" -source "$(PackageSources)"  $(NonInteractiveSwitch) $(RequireConsentSwitch) -solutionDir "$(SolutionDir)" 
```

Thereby removing the space after `$(SolutionDir)`. This was causing packages to be downloaded to `zero-k/other/ /packages` instead of `zero-k/other/packages`.

Afterwards, it should fail due to case sensitive file resolution on Linux. The solution is to disable case sensitivity with Mono builds:

```
  export MONO_IOMAP=all
```

Volla! The ZeroK Lobby should have successfully compiled to a binary.

