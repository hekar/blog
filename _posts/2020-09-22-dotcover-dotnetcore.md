---
layout: post
date: "2020-09-22"
title: Dotcover in Dotnet Core
---

Code coverage can be a useful heuristic for determining whether code is adequately executed by a given set of unit tests.

Tooling that produces code coverage will never be able to inform you how well your assertions are executed or if the given execution is necessary, but they will you an about whether a portion of code is covered by tests at all.

---

For [Dotnet Core][dotnet/core] applications I have been using a tool by [Jetbrains] called [Dotcover].

[Dotcover] integrates with [MSTest], [NUnit], [xUnit], and [MSpec]. It can be executed through the [command-line] or [Visual Studio][vs].

## Create Project

If you do not have an existing project, you can create one use the templates provided for dotnet.

These commands below will create a project, test project and solution file. The test project will reference the project and the solution file will contain both the projects.

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

To reference Dotcover in the unit test project, open `./ConsoleApp.Tests/ConsoleApp.Tests.csproj` in a text editor. Add the following:

```xml
  <ItemGroup>
    <DotNetCliToolReference Include="JetBrains.dotCover.DotNetCliTool" Version="2020.2.3" />
  </ItemGroup>
```

run

```sh
dotnet restore
```

## Run dotcover

The default dotcover configuration outputs a `.dcvr` file.

```sh
dotnet dotcover test
```

## Additional configuration

This step is entirely optional, but you can create a file for dotcover configuration.

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

open `ConsoleApp.Tests/dotcover.html` to see the final coverage report

![example-coverage-report](https://i.imgur.com/v8l1RKb.png)

## Conclusion

Dotcover is easy to setup and configure with Dotnet Core projects. The project works well after basic configuration. The only issue is the license is not a standard

For an example of a project using dotcover, checkout [hekar/joke-generator].

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
