---
sidebar_position: 2
---

# Vector Method
`vector()`
A vector in C++ is a **dynamic array** provided by the Standard Template Library (STL).
#
##  #Syntax
# 
```
vector<datatype> arr;
arr={'k','o','s','h','l','e','s','h'}
```
#
## The push_back() method 
#
The **push_back()** method adds a **single element** to the end of the list.
#
```cpp title="vector_methods.cpp"
vector<int> my_vec = {1, 2, 3};
my_vec.push_back(4);
```

#

```Output title="Output"
[1, 2, 3, 4]
```

#
## The insert() method
#
The **insert()** method with iterators can add multiple elements to the **end**.
#
```CPP title="insert_method.cpp"
vector<int> my_vec = {1, 2, 3};
vector<int> new_elements = {4, 5, 6};
my_vec.insert(my_vec.end(), new_elements.begin(), new_elements.end());
```

#

```Output title="Output"
[1, 2, 3, 4, 5, 6]
```
#
## The insert() at index method
#
The insert() method **inserts** an element at the **specified index**.
#
```CPP title="insertAtIndex.cpp"
vector<int> my_vec = {1, 2, 3};
my_vec.insert(my_vec.begin() + 1, 99);
```

#

```Output title="Output"
[1, 99, 2, 3]
```
#
## The erase() method
#
Removes the **first occurrence** of a value (requires finding it first).
#
```CPP title="eraseEle.cpp"
vector<int> my_vec = {1, 2, 3, 2, 4};
auto it = find(my_vec.begin(), my_vec.end(), 2);
if (it != my_vec.end()) {
    my_vec.erase(it);
}

```

#

```Output title="Output"
[1, 3, 2, 4]
```
#
## The pop_back() method
#
Removes the **last element**
#
```CPP title="popBack.cpp"
vector<int> my_vec = {1, 2, 3};
my_vec.pop_back();        

```

#

```Output title="Output"
[1, 2]
```
#
## The clear() method
#
The clear() method **removes all elements** from the vector.
#
```CPP title="clearVec.cpp"
vector<int> my_vec = {1, 2, 3};
my_vec.clear();

```

#

```
[]
```
#
## The find() method
#
Using **find()** from **< algorithm >** to locate elements.
#
```CPP title="findEle.cpp"
vector<int> my_vec = {1, 2, 3, 4, 5};
auto it = find(my_vec.begin(), my_vec.end(), 3);
if (it != my_vec.end()) {
    int index = distance(my_vec.begin(), it);
}

```

#

```Output title="Output"
2
```
#
## The sort() method
#
sort method arrange all the element in **ascending order** by default
#
```CPP title="SortVec.cpp"
vector<int> my_vec = {3, 1, 4, 2};
sort(my_vec.begin(), my_vec.end());

```

#

```Output title="Output"
[1, 2, 3, 4]
```
#
## The reverse() method
#
Reverse all the element 
#
```CPP title="rev.cpp"
vector<int> my_vec = {1, 2, 3};
reverse(my_vec.begin(), my_vec.end());

```

#

```Output title="Output"
[3, 2, 1]
```
#
## The front() method
#
The front() function returns a reference to the **first element** of the vector.
#
```CPP title="frontFun.cpp"
vector<int> v = {10, 20, 30};
cout << v.front();  

v.front() = 100;    
cout << v[0];      


```

#

```Output title="Output"
[10]
[100]
```
#

#
## The back() method
#
The back() function returns a reference to the **last element** of the vector.
#
```CPP title="backFun.cpp"
vector<int> v = {10, 20, 30};
cout << v.back();  

```

#

```Output title="Output"
[30]
 
 ```

#
## The swap() method
#
The swap() function **exchanges the contents of two vectors** efficiently.

#
```CPP title="swapFun.cpp"
vector<int> v1 = {1, 2, 3};
vector<int> v2 = {10, 20, 30}; 
v1.swap(v2);
```

#

```Output title="Output"
v1: 10 20 30 
v2: 1 2 3 
```
#
## The resize() method
#
The resize() function is used to **change the size** of a vector.
#
```CPP title="resizeFun.cpp"
vector<int> nums = {1, 2, 3, 4, 5};
// Increase size (new elements initialized to 0)
nums.resize(8);
// Increase size with specific value
nums.resize(10, 9);
// Decrease size
nums.resize(4);
cout << "Size: " << nums.size() << endl; 
cout << "Capacity: " << nums.capacity() << endl; 
```

#

```Output title="Output"
nums: [1, 2, 3, 4, 5, 0, 0, 0]
nums: [1, 2, 3, 4, 5, 0, 0, 0, 9, 9]
nums: [1, 2, 3, 4]
Size: 4
Capacity: 10
```

#
## The size() method
#
Returns **how many elements** are currently stored in the vector.
#
``` CPP title="sizeVec.cpp"
vector<int> v = {1, 2, 3};
cout << v.size(); 
```
#

``` output title="output"
3
```
#

## The auto() method (for Iteration)

**auto** keyword allows simpler and cleaner iteration over a vector. It is especially useful in range-based for loops or when using iterators to traverse the entire vector in **one pass**.
#
``` CPP title="autoVec.cpp"
vector<int> v = {10, 20, 30};
for (auto x : v) {
    cout << x << " ";
}
```
``` output title="output"
10 20 30
```
#




