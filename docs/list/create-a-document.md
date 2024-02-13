---
sidebar_position: 2
---

# Multi-Dimensional Lists
#
## Basics
Multi-dimensional lists are the **lists within lists**.
#
There can be more than one additional dimension to lists in Python. Keeping in mind that a list can hold other lists, that basic principle can be applied over and over. 
#

We have already seen **1-D List**.

```python
MyList = [1,2,3,4,5]
```
#

**2-D List**

```python
MyList = [["Shashank","Muskan"],["Shivam","Akshat"]]
```
#

**3-D List**

```python
MyList = [[[1,2],[3,4]]]
```

#

## Creating a 1-D List
#
Create a file `1_D.py`
#
```python title="2_D.py"
# Python program to create a 1-D list 
# with all 0s 
n=5
My_List_1D = [0 for i in range(n)] 
print(My_List_1D) 
```
#
```output title="Output"
[0, 0, 0, 0, 0]
```
#



## Creating a 2-D List
#
Create a file `2_D.py`
#
```python title="2_D.py"
# Python program to create a m x n matrix 
# with all 0s 
m = 4
n = 5
My_List_2D = [[0 for i in range(n)] for i in range(m)] 
print(My_List_2D) 
```
#
```output title="Output"
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
```

#

## Creating a 3-D List
#
Create a file `3_D.py`
#
```python title="3_D.py"
# Python program to create a m x n x o matrix 
# with all 0s 
m = 2
n = 2
o = 2
My_List_3D = [[[for i in range(o)] for i in range(n)] for i in range(m)] 
print(My_List_3D) 
```
#
```output title="Output"
[[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
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
