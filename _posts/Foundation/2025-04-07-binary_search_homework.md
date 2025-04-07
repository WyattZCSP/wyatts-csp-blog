---
layout: post  
title: Binary Search
description: Homework and Popcorn hacks from Binary Search lesson
type: issues  
comments: true  
---

# Popcorn Hacks

## Popcorn Hack 1 

The procedure BinarySearch(numList, target) correctly implements a binary search algorithm on the list of numbers numList. The procedure returns an index here target occurs in numList, or -1 if target does not occur in numList.

Which of the following conditions must be met in order for the procedure to work as intended? Explain why.

a) The length of numList must be even
b) The list numList must not contain any duplicate values
c) The values in numList must be in sorted order
d) The value of target must not be equal to -1

Correct Answer: C

## Popcorn Hack 2

Which of the following statements correctly describes a disadvantage of binary search compared to linear search? Explain why your answer is correct and why the others are wrong.

a) Binary search takes more time on average than linear search  
b) Binary search cannot be used on unsorted lists without modifications  
c) Binary search always returns the first occurrence of the target  
d) Binary search can only be used on lists with unique values  

Correct Answer: B

## Popcorn Hack 3

```py def binary_search(char_list, target):
    left = 0
    right = len(char_list) - 1

    while left <= right:
        mid = (left + right) // 2
        if char_list[mid] == target:
            return mid
        elif char_list[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Target not found

# Example usage
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(binary_search(letters, 'c'))  # Output: 2
```

# Homework

```py import pandas as pd

# Step 1: Create the dataset manually (since we're not using a CSV file)
data = pd.DataFrame({
    "Product": [
        "Notebook", "Pen", "Pencil", "Backpack", "Calculator", "Eraser",
        "Binder", "Marker", "Scissors", "Glue Stick", "Ruler", "Highlighter",
        "Stapler", "Tape", "Paper Clips"
    ],
    "Price": [
        2.99, 1.5, 0.99, 25.00, 15.75, 0.5,
        3.99, 2.25, 4.99, 1.25, 1.99, 2.5,
        6.49, 1.75, 0.89
    ]
})

# Step 2: Drop rows with missing values
data_cleaned = data.dropna()

# Step 3: Sort the data by 'Price'
data_sorted = data_cleaned.sort_values(by="Price")

# Step 4: Extract sorted prices as a list
price_list = data_sorted["Price"].tolist()

# Step 5: Preview the sorted data
print("First few rows of sorted data:")
print(data_sorted.head())
print("Original row count:", len(data))
print("Cleaned row count:", len(data_cleaned))

# Step 6: Binary Search Function
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

# Step 7: Search for specific prices
search_prices = [1.25, 6.49, 10.00]

print("\nSearch Results:")
for price in search_prices:
    index = binary_search(price_list, price)
    if index != -1:
        print(f"Price ${price} found at index {index} in sorted list.")
    else:
        print(f"Price ${price} not found in the list.")

# Explanation
print("\nExplanation:")
print("This code loads and cleans a dataset of school supplies, sorts the products by price,")
print("and extracts the price column into a list. It uses binary search to efficiently look for")
print("specific price values. Binary search is fast because it repeatedly divides the list in half,")
print("but it only works on sorted data.")
```

