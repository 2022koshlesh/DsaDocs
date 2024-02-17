---
sidebar_position: 2
---

# Pandas

## What is Pandas?
- `Pandas` is a Python library used for working with **data sets**.

- It has functions for **analyzing**, **cleaning**, **exploring**, and **manipulating data**.

- The name `Pandas` has a reference to both **Panel Data**, and **Python Data Analysis** and was created by **Wes McKinney** in **2008**.

#

:::info
The source code for Pandas is located at this github repository https://github.com/pandas-dev/pandas
:::

#

## Why Use Pandas?

- Pandas allows us to **analyze** big data and make **conclusions** based on statistical theories.

- Pandas can **clean messy data sets**, and make them **readable** and **relevant**.

- Relevant data is very important in **data science**.

#

:::note
Data Science is a branch of computer science where we study how to store, use and analyze data for deriving information from it.
:::

#

## Installation

Open `cmd` and Type

```cmd
pip install pandas
```

## Importing Pandas

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Without Alias" default>
    Once `Pandas` is installed, import it in your applications by adding the import keyword:

    ```python title="Hello.py"
    import pandas
    ```
  </TabItem>
  <TabItem value="orange" label="With Alias">
    `Pandas` is usually imported under the pd alias.

    ```python title="Hello.py"
    import pandas as pd
    ```    
    
    :::info

    In Python alias are an alternate name for referring to the same thing

:::
  </TabItem>
</Tabs>

#

## Checking Pandas Version

The version string is stored under __version__ attribute.

```python title="HelloPandas.py"
import pandas as pd
print(pd.__version__)
```

#
