import pandas as pd

# Load the CSV file
df = pd.read_csv('SAN MAR DATA.csv')

# Filter out rows where column 'E' is 'S', 'M', 'L', or 'XS'
filtered_df = df[~df['SIZE'].isin(['XS', 'S', 'M', 'L', 'XS', '4XL'])]

# Save the cleaned DataFrame to a new CSV file
filtered_df.to_csv('output.csv', index=False)
