---
sidebar_position: 1
---

# Creating a List

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->
**Lists** are used to store **multiple items** in a single variable.

#

**Lists** are **one of 4 built-in data types** in Python used to store collections of data, the other 3 are **Tuple**, **Set**, and **Dictionary**, all with different qualities and usage.

#

Lists are created using square brackets:

#

```python title="List.py"
myList = []  # This is an empty list
print(myList)
```

#

## The Basic Method
```python title="List_Basics.py"
myList = ["apple", "banana", "cherry"]
print(myList)
```

## The list() Constructor

Create a file `List_Constructor.py`
#
It is also possible to use the list() constructor when creating a new list.
#
```python title="List_Constructor.py"
myList = list(("apple", "banana", "cherry")) # Note the double round-brackets
print(myList)
```
#
**NOTE:** The list() constructor only works on iterable objects.
#
```python title="Example.py"
myList = list("Shashank")
print(myList)
```
#
```output title="Output"
['S', 'h', 'a', 's', 'h', 'a', 'n', 'k']
```


## Creating an Empty List

Create a file `EmptyList.py`
#
An **Empty List** can be created in two ways:
#
1) Using Empty Square Braces
#
```python title="EmptyList1.py"
myList = []
```
#
2) By List Constructor
#
```python title="EmptyList1.py"
myList = list()
```
#

## Creating a Nested List

Create a file `NestedList.py`
#
A nested list is made up of a series of sublists separated by commas.
#
```python title="NestedList.py"
myList = [1,2,3,[4,5,6],[7,8,9,0]]
print(myList)
```
#