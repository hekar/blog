---
title: "ScalaTest Eclipse"
author: Hekar Khani
date: 2013-10-25
template: article.jade
---

I tried the ScalaTest plugin Eclipse, but I couldn't get them working with my version of ScalaTest. Fortunately, there's an alternative: JUnit runners.
<span class="more"></span>
Found the [perfect tutorial](http://www.valleyprogramming.com/blog/running-scalatest-unit-tests-eclipse-junit-scala) to get JUnit runners with ScalaTest working well in Eclipse.

Here's an example:
```
import org.junit.runner._
import org.scalatest._
import org.scalatest.junit._

@RunWith(classOf[JUnitRunner])
  class OneEqualOneSpec extends FunSuite {

    test("testing 1 = 1") {
      assert(1 == 1)
    }

  }
```

This example can run under standard Java JUnit configurations in Gradle, Maven and Ant. Making it easier to integrate with existing projects.

