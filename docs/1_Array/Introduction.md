---
sidebar_position: 1
---

#
## Getting Started with Array Data Structure

`Array Data Structure`

#
**Array** is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming.
#

#
## Basic terminologies of Array
#
**• Array Index:** In an array, elements are identified by their indexes. Array index starts from 0.  
**• Array Element:** Elements are items stored in an array and can be accessed by their index.  
**• Array Length:** The length of an array is determined by the number of elements it can contain.

##  Memory representation of Array
In an array, all the elements are stored in contiguous memory locations. So, if we initialize an array, the elements will be allocated sequentially in memory. This allows for efficient access and manipulation of elements.
#
![Data Structures](https://iies.in/wp-content/uploads/2024/11/dssss.png)

## Declaration of Array

#
```cpp title="array.cpp"
// This array will store integer type element
int arr[5];      
// This array will store char type element
char arr[10];   
// This array will store float type element
float arr[20];
```
#
## Initialization of Array
**Arrays** can be initialized in different ways in different languages. Below are some language-specific array initializations:
#
```cpp title="arrayIntial.cpp"
int arr[] = { 1, 2, 3, 4, 5 };
char arr[5] = { 'a', 'b', 'c', 'd', 'e' };
float arr[10] = { 1.4, 2.0, 24, 5.0, 0.0 };
```
#
## Program to Loop Over an Array

#
```cpp title="loopOverArr.cpp"
int arr[] = { 1, 2, 3, 4, 5 };

// calculate the size of an array
int n = sizeof(arr) / sizeof(arr[0]);
cout << "Elements in an Array: ";

// Loop over an array and print each element
for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}
```

``` output title="output"
Elements in an Array: 1 2 3 4 5 

```

