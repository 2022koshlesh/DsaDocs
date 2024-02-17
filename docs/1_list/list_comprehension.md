---
sidebar_position: 5
---

# List Comprehension
#
List comprehension provides a `concise way` to create lists in Python.
#
## Basic List Comprehension
```python title="myList.py"
squares = [x**2 for x in range(5)]
print(squares)

```


```Output title="Output"
[0, 1, 4, 9, 16]
```

#
## List Comprehension with Condition
```python title="myList.py"
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  
```


```Output title="Output"
[0, 4, 16, 36, 64]
```