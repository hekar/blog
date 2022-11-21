---
title: "What does this code do?"
date: "2013-08-12"
category: java
tags: java
---

Since learning Scala and Kotlin, I've been wondering why much of the code written in Kotlin and Scala has been easier to read than its respective Java equivalent.

---

Even with [implicits](http://blog.joa-ebert.com/2010/12/26/understanding-scala-implicits/), Scala code seems to flow in a much more fluid manner. More like a novel rather than a technical specification.

Kotlin and Scala (particularly Scala) usually have more complicated constructs and intricacies than the Java equivalent. There's no denying some features in either language can be strainous to understand. Scala and Kotlin are complex languages and harder to learn than Java. More complex code can be written with them. Languages within languages can be written. There are multiple ways to accomplish the exact same task.

But don't we have the same expressiveness with English. One of the most complicated languages in the world. The magnitudes of expressiveness that English contains are mind boggling. Yet I haven't seen many native speakers complaining about the actual language. They only seem to complain about the speakers/writers of the language.

What does this Java code do? The answer is _nothing_. And it doesn't even fit on a page.

```java
package com.example.bean;

import java.util.Date;
import java.util.List;
import java.util.Set;

public class Bean {

  public class InnerBean {
    private Long id;
    private Date modified;
    private String name;
    private String description;

    public InnerBean(Long id, Date modified, String name, String description ) {
      this.id = id;
      this.modified = modified;
      this.name = name;
      this.description = description;
    }

    public Long getId() {
      return  id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public Date getModified() {
      return  modified;
    }

    public void setModified(Date modified) {
      this.modified = modified;
    }

    public String getName() {
      return  name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public String getDescription() {
      return  description;
    }

    public void setDescription(String description) {
      this.description = description;
    }
  }

  private Long id;
  private String firstName;
  private String lastName;
  private Long age;
  private Date dateOfBirth;
  private List&lt;InnerBean&gt; innerBeans;
  private Set&lt;Date&gt; findDates;

  public Bean(Long id, String firstName, String lastName, Long age,
      Date dateOfBirth, List&lt;innerbean&gt; histories) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.innerBeans = histories;
  }

  public Long getId() {
    return  id;
  }

  public void setId(Long id ) {
    this.id = id;
  }

  public String getFirstName() {
    return  firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return  lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Long getAge() {
    return  age;
  }

  public void setAge(Long age) {
    this.age = age;
  }

  public Date getDateOfBirth() {
    return  dateOfBirth;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public List&lt;InnerBean&gt; getInnerBeans() {
    return  innerBeans;
  }

  public void setInnerBeans(List&lt;InnerBean&gt; innerBeans) {
    this.innerBeans = innerBeans;
  }

  public Set&lt;Date&gt; getFindDates() {
    return  findDates;
  }

  public void setFindDates(Set&lt;Date&gt; findDates) {
    this.findDates = findDates;
  }

}
```
