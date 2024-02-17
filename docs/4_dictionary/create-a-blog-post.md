---
sidebar_position: 4
---

# Dictionary Comprehension
#
## Basics
#
**Dictionary Comprehension** is a concise way to create dictionaries in Python.
#
It allows you to generate dictionaries using a **single line of code**, often making your code more **readable** and **efficient**.
#
```python title="Dict_Comprehension.py"
# Dictionary comprehension to create a dictionary of squares
squares = {x: x*x for x in range(6)} 
```
#
``` Output title="Output"
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```
#
In the above example, `{x: x*x for x in range(6)}` is a dictionary comprehension. It iterates over each value `x` in the range from 0 to 5, squaring x and using it as both the key and the value in the resulting dictionary.
#
## Conditional Dictionary Comprehension
#
You can also include conditions in dictionary comprehension to filter items based on certain criteria:
#
```python title="Conditional_Dict_Comprehension.py"
# Dictionary comprehension with conditional
even_squares = {x: x*x for x in range(10) if x % 2 == 0}
print(even_squares)
```
#
``` Output title="Output"
{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
#
In this example, only even numbers are included in the resulting dictionary. The condition if `x % 2 == 0` filters out odd numbers.
#
## Dictionary Comprehension with Other Iterables
#
You can use dictionary comprehension with any iterable, not just with ranges:
#
```python title="Conditional_Dict_Comprehension.py"
# Using dictionary comprehension with a list
names = ['Alice', 'Bob', 'Charlie']
name_lengths = {name: len(name) for name in names}
print(name_lengths)

```
#
``` Output title="Output"
{'Alice': 5, 'Bob': 3, 'Charlie': 7}
```
#
In this example, a dictionary is created where each name from the list names is a key, and the length of the name is the corresponding value.
#
## Nested Dictionary Comprehension
#
You can also nest dictionary comprehensions to create nested dictionaries:
#
```python title="Conditional_Dict_Comprehension.py"
# Using dictionary comprehension with a list
names = ['Alice', 'Bob', 'Charlie']
name_lengths = {name: len(name) for name in names}
print(name_lengths)

```
#
``` Output title="Output"
{'Alice': 5, 'Bob': 3, 'Charlie': 7}
```
#
This example demonstrates how to **flatten** a matrix into a dictionary. Each element in the flattened matrix is assigned a **unique** key.

**Dictionary comprehension** is a powerful tool in Python for creating dictionaries in a **compact** and **expressive** manner.