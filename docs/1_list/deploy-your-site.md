---
sidebar_position: 6
---

# Copying Lists

## Shallow Copy

A shallow copy creates a new list object but references the same elements.

```python title="myList.py"
original_list = [1, 2, 3]
shallow_copy = original_list.copy()
print(shallow_copy) 

```


```Output title="Output"
[1, 2, 3]
```

#

## Deep Copy

A deep copy creates a new list object and recursively copies all elements.

```python title="myList.py"
import copy
original_list = [[1, 2], [3, 4]]
deep_copy = copy.deepcopy(original_list)
print(deep_copy) 

```


```Output title="Output"
[[1, 2], [3, 4]]
```
