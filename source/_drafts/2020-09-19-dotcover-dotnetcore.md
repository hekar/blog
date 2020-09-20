---
layout: post
date: 2020-09-19
title: Dotcover in Dotnet core
author: hkhani
---

Code coverage can be a useful heuristic for determining whether code is adequately executed by a given set of unit tests.

Tooling that produces code coverage will never be able to inform you how well your assertions are executed or if the given execution is necessary, but they will you an about whether a portion of code is covered by tests at all.

For [dotnet/core] applications I have been using a tool by [Jetbrains] called [Dotcover].

[Dotcover] integrates with [MSTest], [NUnit], [xUnit], and [MSpec]. It can be executed through the [command-line] or [vs].


For an example of a project using dotcover, checkout [hekar/joke-generator].

[hekar/joke-generator]: https://github.com/hekar/joke-generator
[dotnet/core]: https://dotnet.microsoft.com/download/dotnet-core
[Dotcover]: https://www.jetbrains.com/dotcover/
[Jetbrains]: https://www.jetbrains.com/
[MSTest]: https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest
[NUnit]: https://nunit.org/
[xUnit]: https://xunit.net/
[MSpec]: https://github.com/machine/machine.specifications
[vs]: https://visualstudio.microsoft.com/
[command-line]: https://www.jetbrains.com/help/dotcover/Running_Coverage_Analysis_from_the_Command_LIne.html
