---
title: "Python's Yield Keyword"
date: "2012-01-12"
category: python
tags: python
---

One of my most missed features in Java is the yield keyword found in Python.

Instead of processing an entire a collection and returning it. The yield keyword, will automatically create a lazily loaded iterable out of a function. This removes a ton of boilerplate that one would otherwise need to create an iterable.

---

The stack is saved and all the local state is the same, but the function does not need to process everything before it allows the for loop to continue. Instead, only the next value needs to be calculated.

<h2>hello</h2>
<table>
<tr>
<th> Good </th>
<th> Bad </th>
</tr>
<tr>
<td>

```c++
int foo() {
    int result = 4;
    return result;
}
```

</td>
<td>

```c++
int foo() { 
    int x = 4;
    return x;
}
```

</td>
</tr>
</table>

Example:

```python
def fun():
  for i in range(0, 50000):
    print(i)
    yield i

for number in fun():
  print(number)
```

This would print:

```python
1
1
2
2
3
3
# ...etc
```

That is because we're basically calculating the value as we move on to process the next value.

Without using yield, one would do something like:

```python
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

```python
1
2
3
4
5
6
...etc.
```

Yield can be invaluable when processing I/O intensive tasks that you want to perform sequentially. Instead of processing everything at once, you can process each item on as needed basis.
