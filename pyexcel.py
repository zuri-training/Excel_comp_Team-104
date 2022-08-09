# Data manipulation of excel or csv files by Rophi and Lawal
import sys
import pandas as pd

files = ["ref.xlsx", "remove.xlsx"]
values = []
index = []
lengths = []
color = ["red", "cyan", "purple", "grey", "orange", "pink", "blue", "green"]


def checker(df, indx):
    if len(values) > 0:
        for i in range(0, len(values)):
            if (df.values[indx] == values[i]).all():
                return True
        return False
    return False


# Highlights duplicate and creates a new file 'highlight.xlsx'
def highlight(df):
    df.style.apply(colorscheme(df)).to_excel('highlight.xlsx', index_col=False)


# Returns an array which is used to determine the colors of the duplicate rows
def colorscheme(df):
    ls = []

    for i in range(0, len(df.index)):
        for j in range(0, len(index)):
            if i in index[j]:
                ls.append(f"background-color:{color[j]}")
                break
            elif j == len(index) - 1:
                ls.append("")

    return ls


# Removes duplicate rows and creates a new file 'remove.xlsx'
def remove(df):
    ls = []
    for arr in index:
        for i in range(1, len(arr)):
            ls.append(arr[i])

    df.drop(ls).to_excel("remove.xlsx", index_col=False)


# highlight()

def looper(df):
    # This for loop checks for duplicates
    # Stores the duplicate value in the values list and the index of the duplicates in the index list
    for row1 in range(0, len(df.index)):
        dup_index = []

        if not checker(df, row1):
            dup_index.append(row1)
            for row2 in range(row1 + 1, len(df.index)):
                if (df.values[row1] == df.values[row2]).all():
                    dup_index.append(row2)

        if len(dup_index) > 1:
            values.append(df.values[row1])
            index.append(dup_index)


def main():
    if (len(files) > 0):
        if (len(files) == 1):
            # Update code to check for file extension
            # If file is a csv it will be converted to an excel because the syntax for excel in pandas is a lot much easier
            df = pd.read_excel(files[0], index_col=False)

            looper(df)
        else:
            # Check if files have the same header and breaks out it they aren't the same
            for i in range(1, len(files)):
                if ((pd.read_excel(files[0], index_col=False)).columns != (pd.read_excel(files[i], index_col=False)).columns).all():
                    print("Excel file column headers are not the same")
                    break

            # Puts the length of each excel file in a the lengths list
            df = None
            for file in files:
                lengths.append(len(pd.read_excel(file, index_col=False)))
                df = pd.concat([df, pd.read_excel(file, index_col=False)], ignore_index=True)

            # df is now the combination of all the files
            # now we do what we would have done if it were a single excel file
            # Check the code for is the files was only 1
            looper(df)
            print(values)
            print(index)
            print(lengths)




    else:
        print("No File Sent")


main()
