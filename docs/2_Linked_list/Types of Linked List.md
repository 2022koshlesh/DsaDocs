---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Three types of Linked List

- **Singly Linked-List**
- **Doubly Linked-List**
- **Circular Linked-List**

<Tabs>
  <TabItem value="singly" label="Singly Linked List" default>
        `A singly linked list` is a fundamental data structure, it consists of nodes where each node contains a data field and a reference to the next node in the linked list. The next of the last node is null, indicating the end of the list. Linked Lists support efficient insertion and deletion operations.

        ![Data Structures](https://media.geeksforgeeks.org/wp-content/uploads/20240917161540/Singly-Linked-List.webp)

        ```cpp title="singlyLL.cpp"

#include <iostream>
using namespace std;

// Node structure
class Node {
public:
int data; // Data stored in the node
Node\* next; // Pointer to the next node

    // Constructor
    Node(int value) {
        data = value;
        next = nullptr;
    }

};

// Linked List class
class SinglyLinkedList {
private:
Node\* head;

public:
// Constructor
SinglyLinkedList() {
head = nullptr;
}

    // Insert at the beginning
    void insertAtBeginning(int value) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
    }

    // Insert at the end
    void insertAtEnd(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = newNode;
            return;
        }

        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }

        temp->next = newNode;
    }

    // Delete a node by value
    void deleteNode(int value) {
        if (head == nullptr) {
            cout << "List is empty!" << endl;
            return;
        }

        if (head->data == value) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        Node* prev = nullptr;
        Node* curr = head;
        while (curr != nullptr && curr->data != value) {
            prev = curr;
            curr = curr->next;
        }

        if (curr == nullptr) {
            cout << "Value not found!" << endl;
            return;
        }

        prev->next = curr->next;
        delete curr;
    }

    // Display the list
    void display() {
        Node* temp = head;
        while (temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }

    // Destructor to free memory
    ~SinglyLinkedList() {
        Node* current = head;
        while (current != nullptr) {
            Node* nextNode = current->next;
            delete current;
            current = nextNode;
        }
    }

};

// Main function to test the linked list
int main() {
SinglyLinkedList list;

    list.insertAtBeginning(10);
    list.insertAtBeginning(20);
    list.insertAtEnd(30);
    list.insertAtEnd(40);

    cout << "Linked List: ";
    list.display();

    list.deleteNode(20);
    cout << "After deleting 20: ";
    list.display();

    list.deleteNode(100); // Not in list

    return 0;

}

````
```output title="output"
Linked List: 20 -> 10 -> 30 -> 40 -> NULL
After deleting 20: 10 -> 30 -> 40 -> NULL
Value not found!
```
  </TabItem>

  <TabItem value="doubly" label="Doubly Linked List">
        `A doubly linked list` is a more complex data structure than a singly linked list, but it offers several advantages. The main advantage of a doubly linked list is that it allows for efficient traversal of the list in both directions. This is because each node in the list contains a pointer to the previous node and a pointer to the next node. This allows for quick and easy insertion and deletion of nodes from the list, as well as efficient traversal of the list in both directions.

         ![Data Structures](https://media.geeksforgeeks.org/wp-content/uploads/20240809123741/Insertion-at-the-End-in-Doubly-Linked-List-copy.webp)

      ```cpp title="doublyLL.cpp"
    #include <iostream>
using namespace std;

// Node structure
class Node {
public:
    int data;
    Node* prev;
    Node* next;

    Node(int val) {
        data = val;
        prev = nullptr;
        next = nullptr;
    }
};

// Doubly Linked List class
class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoublyLinkedList() {
        head = nullptr;
        tail = nullptr;
    }

    // Insert at the end
    void append(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
            return;
        }
        tail->next = newNode;
        newNode->prev = tail;
        tail = newNode;
    }

    // Insert at the beginning
    void prepend(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
            return;
        }
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    // Delete a node with specific value
    void deleteNode(int val) {
        Node* temp = head;
        while (temp) {
            if (temp->data == val) {
                if (temp == head) head = temp->next;
                if (temp == tail) tail = temp->prev;
                if (temp->prev) temp->prev->next = temp->next;
                if (temp->next) temp->next->prev = temp->prev;
                delete temp;
                return;
            }
            temp = temp->next;
        }
        cout << "Node with value " << val << " not found.\n";
    }

    // Traverse forward
    void displayForward() {
        Node* temp = head;
        cout << "Forward: ";
        while (temp) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }

    // Traverse backward
    void displayBackward() {
        Node* temp = tail;
        cout << "Backward: ";
        while (temp) {
            cout << temp->data << " ";
            temp = temp->prev;
        }
        cout << endl;
    }
};

// Main function to test
int main() {
    DoublyLinkedList dll;
    dll.append(10);
    dll.append(20);
    dll.append(30);
    dll.prepend(5);

    dll.displayForward();   // Output: 5 10 20 30
    dll.displayBackward();  // Output: 30 20 10 5

    dll.deleteNode(20);
    dll.displayForward();   // Output: 5 10 30

    return 0;
}
      ```
    ``` output title="output"
Forward: 5 10 20 30
Backward: 30 20 10 5
Forward: 5 10 30

    ```
  </TabItem>

  <TabItem value="circular" label="Circular Linked List">
  `A circular linked list` is a special type of linked list where all the nodes are connected to form a circle. Unlike a regular linked list, which ends with a node pointing to NULL, the last node in a circular linked list points back to the first node. This means that you can keep traversing the list without ever reaching a NULL value.

  # Two types of Circular Linked List
  - **Circular Singly Linked List**
  - **Circular Doubly Linked List**
<Tabs>
  <TabItem value="circular" label="Circular Singly Linked List">
    `In Circular Singly Linked List,` each node has just one pointer called the "next" pointer. The next pointer of the last node points back to the first node and this results in forming a circle. In this type of Linked list, we can only move through the list in one direction.

    ![Data Structures](https://media.geeksforgeeks.org/wp-content/uploads/20240806130914/Representation-of-circular-linked-list.webp)

    ```cpp title="circularSLL.cpp"
    #include <iostream>
using namespace std;

// Node structure
class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// Circular Singly Linked List class
class CircularSinglyLinkedList {
private:
    Node* tail;

public:
    CircularSinglyLinkedList() {
        tail = nullptr;
    }

    // Insert at end
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!tail) {
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
            tail = newNode;
        }
    }

    // Delete a node with given value
    void deleteNode(int val) {
        if (!tail) return;

        Node* curr = tail->next;
        Node* prev = tail;

        do {
            if (curr->data == val) {
                if (curr == tail && curr->next == tail) {
                    // Only one node
                    delete curr;
                    tail = nullptr;
                } else {
                    prev->next = curr->next;
                    if (curr == tail)
                        tail = prev;
                    delete curr;
                }
                return;
            }
            prev = curr;
            curr = curr->next;
        } while (curr != tail->next);

        cout << "Node with value " << val << " not found.\n";
    }

    // Display the list
    void display() {
        if (!tail) {
            cout << "List is empty.\n";
            return;
        }

        Node* temp = tail->next;
        cout << "Circular List: ";
        do {
            cout << temp->data << " ";
            temp = temp->next;
        } while (temp != tail->next);
        cout << endl;
    }
};

// Main function
int main() {
    CircularSinglyLinkedList csll;
    csll.insert(10);
    csll.insert(20);
    csll.insert(30);
    csll.insert(40);

    csll.display(); // Output: 10 20 30 40

    csll.deleteNode(20);
    csll.display(); // Output: 10 30 40

    csll.deleteNode(10);
    csll.display(); // Output: 30 40

    csll.deleteNode(100); // Not found

    return 0;
}
    ```
```output title="output"
Circular List: 10 20 30 40
Circular List: 10 30 40
Circular List: 30 40
Node with value 100 not found.
```
  </TabItem>

  <TabItem value="circularD" label="Circular Doubly Linked List">
    `In circular doubly linked list,` each node has two pointers prev and next, similar to doubly linked list. The prev pointer points to the previous node and the next points to the next node. Here, in addition to the last node storing the address of the first node, the first node will also store the address of the last node.

     ![Data Structures](https://media.geeksforgeeks.org/wp-content/uploads/20240806145223/Representation-of-circular-doubly-linked-list.webp)

    ``` cpp title="circularDLL.cpp"
#include <iostream>
using namespace std;

// Node definition
class Node {
public:
    int data;
    Node* next;
    Node* prev;

    Node(int val) {
        data = val;
        next = prev = nullptr;
    }
};

// Circular Doubly Linked List class
class CircularDoublyLinkedList {
private:
    Node* head;

public:
    CircularDoublyLinkedList() {
        head = nullptr;
    }

    // Insert at end
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            head->next = head;
            head->prev = head;
            return;
        }
        Node* tail = head->prev;
        tail->next = newNode;
        newNode->prev = tail;
        newNode->next = head;
        head->prev = newNode;
    }

    // Delete node with given value
    void deleteNode(int val) {
        if (!head) return;

        Node* curr = head;
        do {
            if (curr->data == val) {
                if (curr->next == curr) {
                    delete curr;
                    head = nullptr;
                    return;
                }
                curr->prev->next = curr->next;
                curr->next->prev = curr->prev;
                if (curr == head)
                    head = curr->next;
                delete curr;
                return;
            }
            curr = curr->next;
        } while (curr != head);

        cout << "Node with value " << val << " not found.\n";
    }

    // Display forward
    void displayForward() {
        if (!head) {
            cout << "List is empty.\n";
            return;
        }
        Node* temp = head;
        cout << "Forward: ";
        do {
            cout << temp->data << " ";
            temp = temp->next;
        } while (temp != head);
        cout << endl;
    }

    // Display backward
    void displayBackward() {
        if (!head) {
            cout << "List is empty.\n";
            return;
        }
        Node* tail = head->prev;
        Node* temp = tail;
        cout << "Backward: ";
        do {
            cout << temp->data << " ";
            temp = temp->prev;
        } while (temp != tail);
        cout << endl;
    }
};

// Main function
int main() {
    CircularDoublyLinkedList cdll;
    cdll.insert(10);
    cdll.insert(20);
    cdll.insert(30);
    cdll.insert(40);

    cdll.displayForward();   // Output: 10 20 30 40
    cdll.displayBackward();  // Output: 40 30 20 10

    cdll.deleteNode(20);
    cdll.displayForward();   // Output: 10 30 40

    cdll.deleteNode(10);
    cdll.displayForward();   // Output: 30 40

    cdll.deleteNode(100);    // Output: Not found

    return 0;
}

    ```
    ```output title="output"
Forward: 10 20 30 40
Backward: 40 30 20 10
Forward: 10 30 40
Forward: 30 40
Node with value 100 not found.

    ```
  </TabItem>

  </Tabs>

  </TabItem>
</Tabs>

````
