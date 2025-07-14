---
sidebar_position: 3
---

# Multi-Dimensional Array in C++

`Basics`

Multi-dimensional arrays in C++ are **arrays of arrays**.  
You can create them using traditional static arrays or dynamic `vector` containers from the STL.

#

We have already seen 
## Static 1-D Array.

```cpp title="1d_array.cpp"
const int n = 5;
int arr[n] = {0}; // Initialize all elements to 0

// Print the array
for(int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}
```

#

```output title="output"
0 0 0 0 0
```

#

#

## Static 2-D Array

```cpp title="2d_array.cpp"
const int row = 4;
const int col = 5;
int arr[row][col] = {0}; // Initialize all elements to 0

    // Print the array
  for(int i = 0; i < row; i++) {
    for(int j = 0; j < col; j++) {
        cout << arr[i][j] << " ";
    }
      cout << endl;
  }

```

#

```output title="output"
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
```

#

## Static 3-D Array

```cpp title="3d_array.cpp"
const int m = 2;
const int n = 2;
const int o = 2;
int arr[m][n][o] = {0}; // Initialize all elements to 0

  // Print the array
  for(int i = 0; i < m; i++) {
    for(int j = 0; j < n; j++) {
      for(int k = 0; k < o; k++) {
            cout << arr[i][j][k] << " ";
          }
          cout << endl;
      }
    cout << endl;
 }
```
#
```output title="output"
0 0 
0 0 

0 0 
0 0 

```

#

## Creating a Matrix using Vectors (STL)

#
## 1-D Array Vector
Create a file `1v_D.cpp`

```CPP title="1d_vector.cpp"
int n = 5;
vector<int> vec(n, 0); // Vector of size n with all 0s
    
// Print the vector
  for(int num : vec) {
      cout << num << " ";
  }
```
#
```output title="output"
0 0 0 0 0
```
#
## 2-D Array Vector 

```cpp title="2d_vector.cpp"
 int m = 4;
 int n = 5;
 vector<vector<int>> vec(m, vector<int>(n, 0)); // m x n matrix with all 0s
    
    // Print the vector
    for(auto& row : vec) {
      for(int num : row) {
           cout << num << " ";
      }
      cout << endl;
  }
```
#
``` output title="output"
0 0 0 0 0 
0 0 0 0 0 
0 0 0 0 0 
0 0 0 0 0 
```
#

#

## 3-D Array Vector 

```cpp title="2d_vector.cpp"
 int m = 2;
 int n = 2;
 int o = 2;
 vector<vector<vector<int>>> vec(m, vector<vector<int>>(n, vector<int>(o, 0)));
    
    // Print the vector
    for(auto& matrix : vec) {
        for(auto& row : matrix) {
            for(int num : row) {
                cout << num << " ";
            }
            cout << endl;
        }
        cout << endl;
    }
```
#
``` output title="output"
0 0 
0 0 

0 0 
0 0 
```
#

<!--
Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
``` -->
