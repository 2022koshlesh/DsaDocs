---
sidebar_position: 1
---

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->

#
## Introduction to Linked List
#
Linked List is basically chains of nodes where each node contains information such as data and a pointer to the next node in the chain. It is a popular data structure with a wide range of real-world applications. Unlike Arrays, Linked List elements **are not stored at a contiguous location**. In the linked list there is a head pointer, which points to the first element of the linked list, and if the list is empty then it simply points to **null** or nothing.

## Basic Terminologies of Linked List

- **Head:** The Head of a linked list is a pointer to the first node or reference of the first node of linked list. This pointer marks the beginning of the linked list.
- **Node:** Linked List consists of a series of nodes where each node has two parts: data and next pointer.
- **Data:** Data is the part of node which stores the information in the linked list.
- **Next pointer:** Next pointer is the part of the node which points to the next node of the linked list.


![Data Structures](https://media.geeksforgeeks.org/wp-content/uploads/20231130131446/Linked-List-Data-Structure-768.png)

## Importance of Linked List

 
- **Dynamic Data structure:** The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion.
- **Ease of Insertion/Deletion:** The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated.
- **Efficient Memory Utilization:** As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory. 
- **Implementation:** Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.

## Creating a Linked List

```cpp title="linkedList.cpp"
class Node{
    Public: // access modifier
    int data; // the data value
    Node* next; // the pointer to the next value
    Public:
    // constructor
    Node (int data1, Node* next1){
        data=data1;  // Initialize data with the provided value
        next=next1;  // Initialize next with the provided
    }
    Node (int data1){
        data=data1;  // Initialize data with the provided value
        next=nullptr;  // Initialize next as null since it's the end of the list

    }
};
int main(){
    vector<int> arr={2,5,8,7};
    Node* y= new Node(arr[0]);
    cout<<y<<'\n'; // returns the memory value
    cout<<y->data<<'\n'; // returns the data stored at that memory point
}
```
```output title="output"
0x11b7f90  // refering to address
2   // value at particular address
```