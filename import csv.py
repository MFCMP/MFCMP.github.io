import csv

def parse_expenses(file_path):
    expenses = []
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            expenses.append({
                'date': row['Date'],
                'category': row['Category'],
                'amount': float(row['Amount']),
                'description': row['Description']
            })
    return expenses

if __name__ == "__main__":
    file_path = 'expenses.csv'
    expenses = parse_expenses(file_path)
    for expense in expenses:
        print(expense)