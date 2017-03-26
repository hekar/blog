---
title: "Python's Yield Keyword"
author: Hekar Khani
date: 2012-1-12
template: article.jade
tag: python.io
---

One of my most missed features in Java is the yield keyword found in Python.

Basically, instead of creating a collection and returning it. The yield keyword, will automatically create a lazily loaded iterable out of a function. This removes a ton of boilerplate that one would otherwise need to create an iterable.

The stack is saved and all the local state is the same, but the function does not need to process everything before it allows the for loop to continue. Instead, only the next value needs to be calculated.
<span class="more"></span>

Example:
```
def fun():
  for i in range(0, 50000):
    print(i)
    yield i

for number in fun():
  print(number)
```

This would print:
```
1
1
2
2
3
3
...etc
```

That is because we're basically calculating the value as we move on to process the next value.

Without using yield, one would do something like:

```
def not_fun();
  results = []
  for i in range(0, 50000):
    print(i)
    results.append(i)
  return results

for number in not_fun():
  print(number)
```

This would print:
```
1
2
3
4
5
6
...etc.
```

Yield can be invaluable when processing I/O intensive tasks that you want to perform sequentially. Instead of processing everything at once, you can process each item on as needed basis.
