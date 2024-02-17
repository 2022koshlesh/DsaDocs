---
sidebar_position: 3
---
# Working with Python Dictionaries
#
## Accessing Dictionary Items
#
<!-- ## Basics -->
**Accessing elements** in a dictionary, either by their **keys** or by using methods like **get()**.  
#

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Accessing by keys" default>
      ``` python title="MyDict.py"
      # Accessing dictionary items
      myDict = {'name': 'John', 'age': 30, 'city': 'New York'}

      # Accessing by keys
      print(myDict['name']) 
      ```

      ```Output title="Output"
      John
      ```
  </TabItem>
  <TabItem value="orange" label="Using get() method">
      ``` python title="MyDict.py"
      # Accessing dictionary items
      myDict = {'name': 'John', 'age': 30, 'city': 'New York'}

      # Using get() method
      print(myDict.get('age'))  
      ```

      ```Output title="Output"
      30
      ```
  </TabItem>
</Tabs>

#

## Modifying Dictionary

We can **Modify** a **Dictionary** by modifying elements in a dictionary, either by **adding** new key-value pairs, **updating** existing ones, or **removing** items.

#

<Tabs>
  <TabItem value="apple" label="Adding" default>
    ```python title="MyDict1.py"
    # Modifying dictionary
    myDict = {'name': 'John', 'age': 30, 'city': 'New York'}

    # Adding new key-value pair
    myDict['occupation'] = 'Engineer'

    print(myDict)
    ```

    ``` Output title="Output"
    {'name': 'John', 'age': 30, 'city': 'New York', 'occupation': 'Engineer'}
    ```
  </TabItem>
  <TabItem value="orange" label="Updating">
    ```python title="MyDict2.py"
    # Modifying dictionary
    myDict = {'name': 'John', 'age': 30, 'city': 'New York'}

    # Updating existing value
    myDict['age'] = 31

    print(myDict)
    ```
    
    ``` Output title="Output"
    {'name': 'John', 'age': 31, 'city': 'New York'}
    ```
  </TabItem>
  <TabItem value="banana" label="Deleting">
    ```python title="MyDict.py"
    # Modifying dictionary
    myDict = {'name': 'John', 'age': 30, 'city': 'New York'}

    # Removing key-value pair
    del myDict['city']

    print(myDict)
    ```

    ``` Output title="Output"
    {'name': 'John', 'age': 30}
    ```
  </TabItem>
</Tabs>

