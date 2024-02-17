---
sidebar_position: 1
---

# Creating a Dictionary

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->
**Dictionaries** are used to store data values in **key:value** pairs.

#

**Dictionaries** are **one of 4 built-in data types** in Python used to store data values in **key:value** pairs, the other 3 are **Tuple**, **Set**, and **List**, all with different qualities and usage.

#
**Dictionaries** are written with **Curly Brackets**, and have keys and values:
#

```python title="Dict.py"
myDict = {}  # This is an empty dictionary
print(myDict)
```
#
:::note[Note]
As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.
:::
#

## The Basic Method
```python title="Dict_Basics.py"
Dict = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
print(Dict)
```

## The dict() Constructor

Create a file `Dict_Constructor.py`
#
It is also possible to use the dict() constructor when creating a new dictionary.
#
```python title="Dict_Constructor.py"
# Using key-value pairs as arguments
MyDict = dict(name='Shashank', Roll=12217166, Age=21)
print(MyDict)

# Using iterable of key-value pairs
MyList=[('key1', 'value1'), ('key2', 'value2'), ('key3', 'value3')]
MyDict1 = dict(MyList)
print(MyDict1)

```

## Creating an Empty Dictionary

Create a file `EmptyDict.py`
#
An **Empty Dictionary** can be created in two ways:
#
1) Using Empty Curly Braces
#
```python title="EmptyDict.py"
myDict = {}
```
#
2) By Dictionary Constructor
#
```python title="EmptyDict1.py"
myDict = dict()
```
#

## Creating a Nested Dictionary

Create a file `NestedDict.py`
#
A nested list is made up of a series of sublists separated by commas.
#
```python title="NestedDict.py"
nested_dict = {
    'person1': {
        'name': 'Alice',
        'age': 30,
        'city': 'New York'
    },
    'person2': {
        'name': 'Bob',
        'age': 25,
        'city': 'Los Angeles'
    }
}

print(nested_dict['person1']['name']) 
print(nested_dict['person2']['age'])   
```
#
```OUTPUT title="Output"
Alice
25
```