# Data manipulation of two excel files or csv files by Henry & Adesewa
import pandas as pd
import numpy as np

input1 = input('File 1: ')
input2 = input('File 2: ')
duplicates = input('Type "y" for Duplicates "n" for Non-Duplicates or "b" for both: ')

file1 = pd.read_excel(input1 + ".xlsx")
file2 = pd.read_excel(input2 + ".xlsx")


#this function compares rows from each file for duplicates and non_duplicates(based on user input)
def compareRows(num, is_dupes):
    if is_dupes and (np.array_equal(file1.values[num], file2.values[num])):
        return file1.values[num]
    elif not(is_dupes) and not(np.array_equal(file1.values[num], file2.values[num])):
        return file1.values[num]
    else: return []
    
#this generally generate a document based on user input
def generate_document(is_duplicate, name):
    rows = file1.index.stop + 1
    values = []

    # compare rows
    for i in range(0, rows - 1):
        # get list of dupes or non_dupes.
        if len(compareRows(i, is_duplicate)): 
            values.append(compareRows(i, is_duplicate)) 
    

    title = file1.columns
    new_df = pd.DataFrame(values)
    new_df.columns = file1.columns

    new_df.to_excel(name + '.xlsx', index=False)

#returning two files
if duplicates == 'b': 
    generate_document(True, 'duplicates')
    generate_document(False, 'non_duplicates')
    #return one file
else:
    dup_state = (duplicates == 'y')
    generate_document(
        True if dup_state else False, 
        'duplicates' if dup_state else "non_duplicates"
    )