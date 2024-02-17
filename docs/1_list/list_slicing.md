---
sidebar_position: 4
---

# List Slicing
#
List slicing allows you to **access a portion** of a list by specifying a `start index`, `end index`, and optionally a `step size`.
#
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Basic slicing" default>
    
    ```python title="myList.py"
    my_list = [1, 2, 3, 4, 5]
    print(my_list[1:4])
    ```


    ```Output title="Output"
    [2, 3, 4]
    ```
  </TabItem>
  <TabItem value="orange" label="Step Slicing">

    ```python title="myList.py"
    my_list = [1, 2, 3, 4, 5]
    print(my_list[::2])
    ```


    ```Output title="Output"
    [1, 3, 5]
    ```
  </TabItem>
  <TabItem value="banana" label="Negative indices">

    ```python title="myList.py"
    my_list = [1, 2, 3, 4, 5]
    print(my_list[-3:-1])
    ```


    ```Output title="Output"
    [3, 4]
    ```
  </TabItem>
</Tabs>

