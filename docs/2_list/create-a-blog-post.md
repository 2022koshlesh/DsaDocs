---
sidebar_position: 3
---

# List Methods
#
Something to write...
#
## The append() method
#
The **append()** method adds a **single element** to the end of the list.
#
```python title="MyList.py"
my_list = [1, 2, 3]
my_list.append(4)
print(my_list) 

```

#

```Output title="Output"
[1, 2, 3, 4]
```

#
## The extend() method
#
The **extend()** method adds all the elements of an **iterable** (such as a list) to the **end** of the list.
#
```python title="MyList.py"
my_list = [1, 2, 3]
my_list.extend([4, 5, 6])
print(my_list)

```

#

```Output title="Output"
[1, 2, 3, 4, 5, 6]
```
#
## The insert() method
#
The insert() method **inserts** an element at the **specified index**.
#
```python title="MyList.py"
my_list = [1, 2, 3]
my_list.insert(1, 1.5)
print(my_list) 

```

#

```Output title="Output"
[1, 1.5, 2, 3]
```
#
## The remove() method
#
The remove() method removes the **first occurrence** of a **specified value**.
#
```python title="MyList.py"
my_list = [1, 2, 3, 4, 3]
my_list.remove(3)
print(my_list) 

```

#

```Output title="Output"
[1, 2, 4, 3]
```
#
## The pop() method
#
The pop() method **removes** the element at the **specified index** (or the **last element** if no index is specified) and **returns** it.
#
```python title="MyList.py"
my_list = [1, 2, 3]
popped_element = my_list.pop(1)
print(popped_element)  
print(my_list)          

```

#

```Output title="Output"
2
[1, 3]
```
#
## The clear() method
#
The clear() method **removes all elements** from the list.
#
```python title="MyList.py"
my_list = [1, 2, 3]
my_list.clear()
print(my_list)  

```

#

```Output title="Output"
[]
```
#
## The index() method
#
The index() method returns the **index of the first occurrence** of a specified value
#
```python title="MyList.py"
my_list = [1, 2, 3, 4, 3]
index = my_list.index(3)
print(index) 

```

#

```Output title="Output"
2
```
#
## The count() method
#
The count() method **returns the number of occurrences** of a specified value.
#
```python title="MyList.py"
my_list = [1, 2, 3, 4, 3]
count = my_list.count(3)
print(count) 

```

#

```Output title="Output"
2
```
#
## The sort() method
#
The sort() method sorts the list in **ascending order**.
#
```python title="MyList.py"
my_list = [3, 1, 2]
my_list.sort()
print(my_list) 

```

#

```Output title="Output"
[1, 2, 3]
```
#
## The reverse() method
#
The reverse() method reverses the **order** of the elements in the list.
#
```python title="MyList.py"
my_list = [1, 2, 3]
my_list.reverse()
print(my_list)  

```

#

```Output title="Output"
[3, 2, 1]
```
#