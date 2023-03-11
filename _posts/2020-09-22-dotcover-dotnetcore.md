---
layout: post
date: "2020-09-22"
title: Dotcover in Dotnet Core
---

Code coverage can be a useful heuristic for determining whether code is adequately executed by a given set of unit tests.

Tooling that produces code coverage will never be able to inform you how well your assertions specified, but they will give adequate information an about whether a portion of code is executed.

There are numerous code coverage tools available for C#. One of them by Jetbrains and is called Dotcover.

---

:::div{.column-2}
[Dotcover] works with [Dotnet Core][dotnet/core] applications out of the box. Configuration can be slightly difficult if using with Sonarqube, but this guide details how to change the coverage report format.

[Dotcover] integrates with [MSTest], [NUnit], [xUnit], and [MSpec]. It can be executed through the [command-line] or [Visual Studio][vs].
:::

Jetbrains unfortunately requires licensing for the applications. It is a proprietary tool requiring payment for closed-source projects. Students have free access and there are discounts in other circumstances. See the [Pricing](https://www.jetbrains.com/dotcover/buy/#discounts) page for more information. One common alternative is [coverlet](https://github.com/coverlet-coverage/coverlet) which uses the preferable open-source MIT license.


## Create Project

If you do not have an existing project you can create one using templates provided for dotnet core, such as the ConsoleApp template.

The commands below: create ConsoleApp, ConsoleApp.Tests and ConsoleApp solution. After the steps below have been run, the test project will reference the ConsoleApp project, while the solution will reference both. The solution file can be opened in Visual Studio or another C# IDE.

```sh
mkdir project
cd project
dotnet new console --name ConsoleApp
dotnet new xunit --name ConsoleApp.Tests
cd ConsoleApp.Tests
dotnet add reference ../ConsoleApp/ConsoleApp.csproj
cd ..
dotnet new sln --name ConsoleApp
dotnet sln add ConsoleApp ConsoleApp.Tests
```

## Add Dotcover

To include Dotcover in the unit test project, open `./ConsoleApp.Tests/ConsoleApp.Tests.csproj` in a text editor. Add the following:

```xml
  <ItemGroup>
    <DotNetCliToolReference Include="JetBrains.dotCover.DotNetCliTool" Version="2020.2.3" />
  </ItemGroup>
```

Afterwards run the following command to install the required dependencies:

```sh
dotnet restore
```

## Run dotcover

By default dotcover configuration outputs a `.dcvr` file.

```sh
dotnet dotcover test
```

## Additional configuration

This step is entirely optional, but you can create a file for dotcover configuration. The example below exports coverage information useful for sonarscanner. This makes it easy to run Sonarqube scans against your applications.

```sh
dotnet dotcover test --dotCoverXml=dotcover.xml
```

dotcover.xml

```xml
<AnalyzeParams>
    <Output>dotCover.html</Output>
    <ReportType>html</ReportType>
    <AttributeFilters>
        <AttributeFilterEntry>
            <ClassMask>System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverageAttribute</ClassMask>
        </AttributeFilterEntry>
    </AttributeFilters>
    <Scope>
        <ScopeEntry>../ConsoleApp/**/*.dll</ScopeEntry>
        <ScopeEntry>../ConsoleApp/**/*.exe</ScopeEntry>
    </Scope>
    <Filters>
        <ExcludeFilters>
            <FilterEntry>
                <ModuleMask>ConsoleApp.Tests</ModuleMask>
            </FilterEntry>
            <FilterEntry>
                <ModuleMask>xunit.assert</ModuleMask>
            </FilterEntry>
        </ExcludeFilters>
    </Filters>
</AnalyzeParams>
```

Open `ConsoleApp.Tests/dotcover.html` to see the final coverage report in your web browser.

![example-coverage-report](https://i.imgur.com/v8l1RKb.png)

## Conclusion

Dotcover is easy to setup and configure with Dotnet Core projects. The only issue is the license modeling does not work well for many types of projects. Particularly closed-source applications. Further when integrating Dotcover into your professional work environment there is the added overhead of license configuration and maintenance. Configuration can be difficult, but once configured it is straightforward to use in CI/CD environments with little operations overhead. Overall Dotcover is a high quality tool that can be useful in certain circumstances where open-source tooling such as coverlet cannot be used.

For an example of a project using dotcover, see [hekar/joke-generator] on Github.

[hekar/joke-generator]: https://github.com/hekar/joke-generator
[dotnet/core]: https://dotnet.microsoft.com/download/dotnet-core
[dotcover]: https://www.jetbrains.com/dotcover/
[jetbrains]: https://www.jetbrains.com/
[mstest]: https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest
[nunit]: https://nunit.org/
[xunit]: https://xunit.net/
[mspec]: https://github.com/machine/machine.specifications
[vs]: https://visualstudio.microsoft.com/
[command-line]: https://www.jetbrains.com/help/dotcover/Running_Coverage_Analysis_from_the_Command_LIne.html
