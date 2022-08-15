# Data manipulation of excel or csv files by Rophi and Lawal
import sys
import pandas as pd

file = sys.argv[1]
first = sys.argv[2]
second = sys.argv[3]
color = ["red", "cyan", "purple", "gray", "orange", "pink", "blue", "green", "olive", "brown", "darkred",
         "darkslategrey", "navy", "lightsteelblue", "forestgreen", "indigo", "darksalmon", "cornsmilk", "tan", "lime",
         "lightgray", "antiquewhite", "darkgoldenrod", "goldenrod", "plum", "lavender", "slategrey", "darkmagenta",
         "olivedrab", "cadetblue", "magenta", "limegreen", "powderblue", "beige", "bisque"]
values = []
index = []


# Update code to check for file extension
# If file is a csv it will be converted to an excel because the syntax for excel in pandas is a lot much easier
filepath = '..\\client\\public\\files\\'+file

if file[file.index('.')]=='.csv':
    df = pd.read_csv(filepath)
    if second=='with':
        print('files\\'+file)
else:
    df = pd.read_excel(filepath)

# Highlights duplicate and creates a new file 'highlight.xlsx'
def highlight():
    df.style.apply(colorscheme).to_excel('..\\client\\public\\files\\highlight.xlsx', index=False)
    print('files\\highlight.xlsx')


# Returns an array which is used to determine the colors of the duplicate rows
def colorscheme(cell):
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
def remove():
    ls = []
    for arr in index:
        for i in range(1, len(arr)):
            ls.append(arr[i])

    df.drop(ls).to_excel("..\\client\\public\\files\\remove.xlsx", index=False)

    print('files\\highlight.xlsx')


def checker(indx):
    if len(values) > 0:
        for i in range(0, len(values)):
            if (df.values[indx] == values[i]).all():
                return True
        return False
    return False


# This for loop checks for duplicates
# Stores the duplicate value in the values list and the index of the duplicates in the index list
for row1 in range(0, len(df.index)):
    dup_index = []

    if not checker(row1):
        dup_index.append(row1)
        for row2 in range(row1+1, len(df.index)):
            if (df.values[row1] == df.values[row2]).all():
                dup_index.append(row2)

    if len(dup_index) > 1:
        values.append(df.values[row1])
        index.append(dup_index)

    
if first=='remove':
    remove()
else:
    highlight()
