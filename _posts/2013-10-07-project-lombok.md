---
title: "Project Lombok"
date: '2013-10-07'
category: java
tags: java
---

I happened to come across http://projectlombok.org/, which is a library that adds many C#, among other features to Java. Included are "properties", the "using" statement, "structs", immutable structures, checked to uncheck exceptions, delegation, basic type inference, etc. These features are utilized via annotations and implemented as modifications to javac.

---

Setup is extremely simple. Simply include the Lombok jar file on the classpath and everything will simply be taken care of

## Features

The features list can be found at the [Lombok official website](http://projectlombok.org/features/index.html).

## Introduction to Project Lombok

The developers have also provided an introductory video that displays some of the features and the setup of Lombok.

<iframe width="420" height="315" src="//www.youtube.com/embed/y6zMyM-YTgg" frameborder="0" allowfullscreen=""></iframe>

## Good idea?

The compiler is one of the most important tools in a developer's toolchain. Javac does not expose many of the necessary options for modifying the AST (Abstract Syntax Tree). Project Lombok is accessing APIs that javac developers have never intended to be used externally and do not support. Many of these APIs were broken when javac was upgraded to support Java 7 (from Java 6). The mailing lists already have discussions about how they are going to deal with the breaking changes that are being made in the Java 7 to Java 8 transistion.

A proposition as risky as this may be acceptable for non-critical applications. However, if Lombok is acceptable for a non-critical application, why could one not consider Scala or Kotlin instead?

Lombok is an interesting project and it's great to see individuals go out of their way to improve a language in ways that were never intended. This is a testament to the pragmatism of the Java community, but is it really superior to the alternatives?
