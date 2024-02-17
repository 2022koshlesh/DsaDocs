---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keys and Values in Dictionaries
#
In Python dictionaries, each element consists of a key and a corresponding value. These keys and values together form what is known as a **key-value pair**. 

Understanding the roles and characteristics of keys and values is essential for effective use of dictionaries in Python programming.
#

<Tabs>
  <TabItem value="apple" label="Keys" default>
        `Uniqueness`: Keys in a dictionary must be **unique**. No two keys can have the same name.

        `Immutability`: Keys must be **immutable** objects such as strings, numbers, or tuples. This ensures that keys remain constant and can be reliably used for **indexing**.

        `Hashability`: Since dictionaries use a **hash table** implementation for **efficient** lookups, keys must be hashable. Immutable types like strings and numbers are **hashable**, while mutable types like lists and dictionaries are not.
  </TabItem>
  <TabItem value="orange" label="Values">
        `Associated Data`: Values in a dictionary represent the **associated data** corresponding to each key. They can be of any data type, including strings, numbers, lists, tuples, dictionaries, or even custom objects.

        `Can be Mutable`: Unlike keys, values in a dictionary can be **mutable** objects. This means you can modify, add, or remove values associated with keys **dynamically** during the program's execution.

        `Duplicates`: Unlike keys, dictionary values are not required to be **unique**. The same value can be associated with **multiple keys** within a dictionary.
  </TabItem>
</Tabs>


#

## Keys and Values
#
`Create a file sampleDict.py`
#
```python title="sampleDict.py"
# Define a sample dictionary
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}
```
#


<Tabs>
  <TabItem value="apple" label="Get keys" default>
    ``` python title="MyDict.py"
    keys = my_dict.keys()
    print("Keys:", keys)
    ```

    ``` Output title="Output"
    Keys: dict_keys(['name', 'age', 'city'])
    ```
  </TabItem>
  <TabItem value="orange" label="Get values">
    ``` python title="MyDict.py"
    values = my_dict.values()
    print("Values:", values)
    ```

    ``` Output title="Output"
    Values: dict_values(['John', 30, 'New York'])
    ```    
  </TabItem>
  <TabItem value="banana" label="Get key-value pairs">
    ``` python title="MyDict.py"
    items = my_dict.items()
    print("Key-Value Pairs:", items)
    ```

    ``` Output title="Output"
    Key-Value Pairs: dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])
    ```    
  </TabItem>
  
</Tabs>

#
## Iterating over keys and values
#
Iterating over keys and values in a dictionary allows you to **access** both the keys and their corresponding values **one by one**. This is often necessary when you need to perform operations on each **key-value** pair or **extract** specific information from the dictionary.
#
```python title="MyDict.py"
# Iterate over keys and values
print("Iterating over keys and values:")
for key in keys:
    print("Key:", key, "Value:", my_dict[key])
```

``` Output title="Output"
Iterating over keys and values:
Key: name Value: John
Key: age Value: 30
Key: city Value: New York
```

#