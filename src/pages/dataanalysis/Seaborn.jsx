import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function Seaborn() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Seaborn', href: '/dataanalysis/seaborn' },
          { label: 'Seaborn' }
        ]}
        title="Seaborn"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <h2>1. What is Seaborn?</h2>

      <p>
        <strong>Seaborn</strong> is a Python data visualization library built
        on top of <strong>Matplotlib</strong>.
      </p>

      <p>
        It is mainly used for creating attractive and informative statistical
        graphs with less code.
      </p>

      <p>Seaborn is commonly used in:</p>

      <ul>
        <li>Data Analysis</li>
        <li>Data Science</li>
        <li>Machine Learning</li>
        <li>Statistics</li>
        <li>Exploratory Data Analysis (EDA)</li>
      </ul>

      <p>
        Seaborn works especially well with <strong>Pandas DataFrames</strong>.
      </p>

      <h3>Simple Idea</h3>

      <CodeBlock filename="seaborn_idea.txt">{`Pandas DataFrame
       ↓
     Seaborn
       ↓
Visualization
       ↓
Understand Data`}</CodeBlock>

      {/* 2. Installation */}
      <h2>2. Installing Seaborn</h2>

      <p>
        If Seaborn is not installed, install it using:
      </p>

      <CodeBlock filename="install_seaborn.txt">{`pip install seaborn`}</CodeBlock>

      <p>
        In Jupyter Notebook or Google Colab, you can use:
      </p>

      <CodeBlock filename="jupyter_install.txt">{`!pip install seaborn`}</CodeBlock>

      <p>
        In Command Prompt or Terminal, normally use:
      </p>

      <CodeBlock filename="terminal_install.txt">{`pip install seaborn`}</CodeBlock>

      {/* 3. Import */}
      <h2>3. Importing Seaborn</h2>

      <CodeBlock filename="import_seaborn.py">{`import seaborn as sns`}</CodeBlock>

      <p>
        Here <code>sns</code> is the commonly used short name or alias for
        Seaborn.
      </p>

      <p>
        Instead of writing:
      </p>

      <CodeBlock filename="without_alias.py">{`seaborn.scatterplot()`}</CodeBlock>

      <p>
        we can write:
      </p>

      <CodeBlock filename="with_alias.py">{`sns.scatterplot()`}</CodeBlock>

      {/* 4. Seaborn vs Matplotlib */}
      <h2>4. Seaborn vs Matplotlib</h2>

      <p>
        Seaborn is built on top of Matplotlib, but it provides a higher-level
        interface for statistical visualization.
      </p>

      <table>
        <thead>
          <tr>
            <th>Matplotlib</th>
            <th>Seaborn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lower-level visualization library</td>
            <td>Higher-level visualization library</td>
          </tr>
          <tr>
            <td>More manual customization</td>
            <td>Many attractive defaults</td>
          </tr>
          <tr>
            <td>General-purpose plotting</td>
            <td>Statistical data visualization</td>
          </tr>
          <tr>
            <td>Works with many data formats</td>
            <td>Works especially well with Pandas DataFrames</td>
          </tr>
        </tbody>
      </table>

      <h3>Easy Way to Remember</h3>

      <CodeBlock filename="matplotlib_vs_seaborn.txt">{`Matplotlib
    ↓
More control

Seaborn
    ↓
Easy + attractive statistical visualization`}</CodeBlock>

      {/* 5. Sample Dataset */}
      <h2>5. Loading Sample Datasets</h2>

      <p>
        Seaborn provides several built-in datasets that are useful for learning
        and practicing visualization.
      </p>

      <CodeBlock filename="load_dataset.py">{`import seaborn as sns

df = sns.load_dataset('tips')

print(df.head())`}</CodeBlock>

      <p>
        The <code>tips</code> dataset contains information about restaurant
        bills and tips.
      </p>

      <h3>Common Seaborn Datasets</h3>

      <ul>
        <li><code>tips</code></li>
        <li><code>iris</code></li>
        <li><code>titanic</code></li>
        <li><code>penguins</code></li>
        <li><code>flights</code></li>
      </ul>

      <CodeBlock filename="dataset_examples.py">{`tips = sns.load_dataset('tips')

iris = sns.load_dataset('iris')

titanic = sns.load_dataset('titanic')

penguins = sns.load_dataset('penguins')

flights = sns.load_dataset('flights')`}</CodeBlock>

      {/* 6. Line Plot */}
      <h2>6. Line Plot</h2>

      <p>
        A line plot is used to show trends or changes in data.
      </p>

      <CodeBlock filename="lineplot.py">{`import seaborn as sns
import matplotlib.pyplot as plt

sns.lineplot(
    x=[1, 2, 3, 4, 5],
    y=[2, 4, 6, 8, 10]
)

plt.title('Simple Line Plot')

plt.show()`}</CodeBlock>

      <p>
        Seaborn's <code>lineplot()</code> creates a line graph while providing
        useful default styling.
      </p>

      {/* 7. Scatter */}
      <h2>7. Scatter Plot</h2>

      <p>
        A scatter plot displays individual data points and is useful for
        understanding the relationship between two variables.
      </p>

      <CodeBlock filename="scatterplot.py">{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip'
)

plt.title('Total Bill vs Tip')

plt.show()`}</CodeBlock>

      <p>
        Here, Seaborn automatically takes the values from the DataFrame
        columns.
      </p>

      {/* 8. hue */}
      <h2>8. hue</h2>

      <p>
        <code>hue</code> is one of the most useful Seaborn parameters.
      </p>

      <p>
        It allows us to represent different categories using different
        colors.
      </p>

      <CodeBlock filename="hue.py">{`sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip',
    hue='sex'
)

plt.show()`}</CodeBlock>

      <p>
        Here, the <code>sex</code> column determines the category represented
        by different colors.
      </p>

      <h3>Simple Mental Model</h3>

      <CodeBlock filename="hue_concept.txt">{`hue
 ↓
Category
 ↓
Different visual representation`}</CodeBlock>

      {/* 9. Bar Plot */}
      <h2>9. Bar Plot</h2>

      <p>
        A bar plot is useful for comparing values across categories.
      </p>

      <CodeBlock filename="barplot.py">{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

sns.barplot(
    data=df,
    x='day',
    y='total_bill'
)

plt.title('Average Bill by Day')

plt.show()`}</CodeBlock>

      <p>
        Seaborn automatically performs useful statistical aggregation for a
        bar plot.
      </p>

      {/* 10. Count Plot */}
      <h2>10. Count Plot</h2>

      <p>
        A count plot shows how many observations belong to each category.
      </p>

      <CodeBlock filename="countplot.py">{`sns.countplot(
    data=df,
    x='day'
)

plt.title('Number of Records by Day')

plt.show()`}</CodeBlock>

      <p>
        For example, it can tell us how many records belong to each day.
      </p>

      <h3>Easy Difference</h3>

      <CodeBlock filename="bar_vs_count.txt">{`barplot()
   ↓
Compare values

countplot()
   ↓
Count observations`}</CodeBlock>

      {/* 11. Histogram */}
      <h2>11. Histogram</h2>

      <p>
        A histogram shows the distribution of numerical data.
      </p>

      <CodeBlock filename="histplot.py">{`sns.histplot(
    data=df,
    x='total_bill'
)

plt.title('Distribution of Total Bill')

plt.show()`}</CodeBlock>

      <p>
        It divides numerical values into intervals called bins.
      </p>

      <h3>Using bins</h3>

      <CodeBlock filename="histogram_bins.py">{`sns.histplot(
    data=df,
    x='total_bill',
    bins=10
)

plt.show()`}</CodeBlock>

      {/* 12. KDE */}
      <h2>12. KDE</h2>

      <p>
        <strong>KDE</strong> stands for <strong>Kernel Density Estimate</strong>.
      </p>

      <p>
        It provides a smooth estimate of the distribution of numerical data.
      </p>

      <CodeBlock filename="kde.py">{`sns.kdeplot(
    data=df,
    x='total_bill'
)

plt.title('KDE Plot')

plt.show()`}</CodeBlock>

      <p>
        KDE is useful when you want to understand the overall shape of a
        distribution.
      </p>

      {/* 13. Box Plot */}
      <h2>13. Box Plot</h2>

      <p>
        A box plot is useful for understanding the distribution of numerical
        data and identifying possible outliers.
      </p>

      <CodeBlock filename="boxplot.py">{`sns.boxplot(
    data=df,
    x='day',
    y='total_bill'
)

plt.title('Bill Distribution by Day')

plt.show()`}</CodeBlock>

      <h3>What can a Box Plot show?</h3>

      <ul>
        <li>Median</li>
        <li>Spread of data</li>
        <li>Quartiles</li>
        <li>Possible outliers</li>
      </ul>

      <CodeBlock filename="boxplot_concept.txt">{`        ─── Outlier
           ●

       ┌─────────┐
       │         │
       │   ───── │ ← Median
       │         │
       └─────────┘
           │
           │
       Whisker`}</CodeBlock>

      {/* 14. Violin Plot */}
      <h2>14. Violin Plot</h2>

      <p>
        A violin plot combines information about a distribution with a
        box-plot-like summary.
      </p>

      <CodeBlock filename="violinplot.py">{`sns.violinplot(
    data=df,
    x='day',
    y='total_bill'
)

plt.title('Bill Distribution by Day')

plt.show()`}</CodeBlock>

      <p>
        It is useful when you want to see the shape and density of a
        distribution.
      </p>

      {/* 15. Pair Plot */}
      <h2>15. Pair Plot</h2>

      <p>
        A pair plot creates multiple plots to show relationships between
        numerical variables in a dataset.
      </p>

      <CodeBlock filename="pairplot.py">{`df = sns.load_dataset('iris')

sns.pairplot(df)

plt.show()`}</CodeBlock>

      <p>
        It is especially useful during <strong>Exploratory Data Analysis
        (EDA)</strong>.
      </p>

      <h3>Using hue with Pair Plot</h3>

      <CodeBlock filename="pairplot_hue.py">{`sns.pairplot(
    df,
    hue='species'
)

plt.show()`}</CodeBlock>

      <p>
        The <code>hue</code> parameter allows us to visually separate
        different categories.
      </p>

      {/* 16. Heatmap */}
      <h2>16. Heatmap</h2>

      <p>
        A heatmap represents numerical values using different shades of color.
      </p>

      <p>
        It is commonly used to visualize a correlation matrix.
      </p>

      <CodeBlock filename="heatmap.py">{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('iris')

correlation = df.select_dtypes('number').corr()

sns.heatmap(
    correlation,
    annot=True
)

plt.title('Correlation Heatmap')

plt.show()`}</CodeBlock>

      <h3>annot</h3>

      <CodeBlock filename="annot.py">{`annot=True`}</CodeBlock>

      <p>
        <code>annot=True</code> displays the numerical values inside the
        heatmap cells.
      </p>

      {/* 17. Correlation */}
      <h2>17. Correlation Heatmap</h2>

      <p>
        A correlation value describes how two numerical variables are related.
      </p>

      <CodeBlock filename="correlation.py">{`correlation = df.select_dtypes('number').corr()

print(correlation)`}</CodeBlock>

      <p>
        The correlation matrix can then be visualized using:
      </p>

      <CodeBlock filename="correlation_heatmap.py">{`sns.heatmap(
    correlation,
    annot=True
)

plt.show()`}</CodeBlock>

      <h3>Simple Understanding</h3>

      <CodeBlock filename="correlation_meaning.txt">{`Positive correlation
       ↓
Variables tend to increase together

Negative correlation
       ↓
One tends to increase when the other decreases

Near zero
       ↓
Weak linear relationship`}</CodeBlock>

      {/* 18. Styling */}
      <h2>18. Seaborn Themes</h2>

      <p>
        Seaborn provides themes that can make plots look cleaner and more
        attractive.
      </p>

      <CodeBlock filename="theme.py">{`sns.set_theme()`}</CodeBlock>

      <p>
        You can also specify a style.
      </p>

      <CodeBlock filename="styles.py">{`sns.set_style('darkgrid')`}</CodeBlock>

      <p>Common styles include:</p>

      <CodeBlock filename="seaborn_styles.txt">{`'darkgrid'
'whitegrid'
'dark'
'white'
'ticks'`}</CodeBlock>

      {/* 19. Figure Size */}
      <h2>19. Figure Size</h2>

      <p>
        Seaborn works together with Matplotlib, so you can use Matplotlib
        functions to control the figure size.
      </p>

      <CodeBlock filename="figure_size.py">{`import matplotlib.pyplot as plt

plt.figure(figsize=(10, 5))

sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip'
)

plt.show()`}</CodeBlock>

      {/* 20. Titles */}
      <h2>20. Titles and Labels</h2>

      <p>
        Seaborn creates the visualization, while Matplotlib functions can be
        used to add titles and axis labels.
      </p>

      <CodeBlock filename="labels.py">{`sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip'
)

plt.xlabel('Total Bill')
plt.ylabel('Tip')
plt.title('Total Bill vs Tip')

plt.show()`}</CodeBlock>

      {/* 21. Multiple plots */}
      <h2>21. Multiple Plots</h2>

      <p>
        Seaborn plots can be combined with Matplotlib's subplot system.
      </p>

      <CodeBlock filename="multiple_plots.py">{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)

sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip'
)

plt.title('Scatter Plot')

plt.subplot(1, 2, 2)

sns.boxplot(
    data=df,
    x='day',
    y='total_bill'
)

plt.title('Box Plot')

plt.show()`}</CodeBlock>

      {/* 22. DataFrame columns */}
      <h2>22. Using Seaborn with Pandas</h2>

      <p>
        One of Seaborn's biggest advantages is its simple integration with
        Pandas DataFrames.
      </p>

      <CodeBlock filename="seaborn_pandas.py">{`import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('sales.csv')

sns.scatterplot(
    data=df,
    x='advertising',
    y='sales'
)

plt.show()`}</CodeBlock>

      <p>
        Instead of manually passing separate lists of X and Y values, we can
        directly specify DataFrame column names.
      </p>

      {/* 23. Style parameters */}
      <h2>23. Important Seaborn Parameters</h2>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>data</code></td>
            <td>Specifies the DataFrame or dataset</td>
          </tr>
          <tr>
            <td><code>x</code></td>
            <td>Specifies the X-axis variable</td>
          </tr>
          <tr>
            <td><code>y</code></td>
            <td>Specifies the Y-axis variable</td>
          </tr>
          <tr>
            <td><code>hue</code></td>
            <td>Separates categories visually</td>
          </tr>
          <tr>
            <td><code>bins</code></td>
            <td>Controls histogram intervals</td>
          </tr>
          <tr>
            <td><code>annot</code></td>
            <td>Displays values in a heatmap</td>
          </tr>
        </tbody>
      </table>

      {/* 24. Plot types */}
      <h2>24. Main Seaborn Plot Types</h2>

      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>sns.lineplot()</code></td>
            <td>Trends</td>
          </tr>
          <tr>
            <td><code>sns.scatterplot()</code></td>
            <td>Relationships</td>
          </tr>
          <tr>
            <td><code>sns.barplot()</code></td>
            <td>Category comparison</td>
          </tr>
          <tr>
            <td><code>sns.countplot()</code></td>
            <td>Category counts</td>
          </tr>
          <tr>
            <td><code>sns.histplot()</code></td>
            <td>Distribution</td>
          </tr>
          <tr>
            <td><code>sns.kdeplot()</code></td>
            <td>Smooth distribution</td>
          </tr>
          <tr>
            <td><code>sns.boxplot()</code></td>
            <td>Distribution and outliers</td>
          </tr>
          <tr>
            <td><code>sns.violinplot()</code></td>
            <td>Distribution shape and density</td>
          </tr>
          <tr>
            <td><code>sns.pairplot()</code></td>
            <td>Relationships between variables</td>
          </tr>
          <tr>
            <td><code>sns.heatmap()</code></td>
            <td>Matrix / correlation visualization</td>
          </tr>
        </tbody>
      </table>

      {/* 25. Plot selection */}
      <h2>25. Which Plot Should You Use?</h2>

      <CodeBlock filename="plot_selection.txt">{`Trend
 ↓
lineplot()

Relationship
 ↓
scatterplot()

Category comparison
 ↓
barplot()

Category count
 ↓
countplot()

Numerical distribution
 ↓
histplot()

Smooth distribution
 ↓
kdeplot()

Outliers / spread
 ↓
boxplot()

Distribution shape
 ↓
violinplot()

Many variable relationships
 ↓
pairplot()

Correlation matrix
 ↓
heatmap()`}</CodeBlock>

      {/* 26. Seaborn + Matplotlib */}
      <h2>26. Seaborn + Matplotlib</h2>

      <p>
        Seaborn and Matplotlib are often used together.
      </p>

      <CodeBlock filename="seaborn_matplotlib.py">{`import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('tips')

sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip',
    hue='sex'
)

plt.xlabel('Total Bill')
plt.ylabel('Tip')
plt.title('Total Bill vs Tip')

plt.grid(True)

plt.show()`}</CodeBlock>

      <p>
        A simple way to understand their relationship is:
      </p>

      <CodeBlock filename="relationship.txt">{`Seaborn
   ↓
Creates attractive statistical plot
   ↓
Matplotlib
   ↓
Provides additional customization
   ↓
Final Visualization`}</CodeBlock>

      {/* 27. Complete EDA Example */}
      <h2>27. Complete Seaborn EDA Example</h2>

      <p>
        The following example demonstrates several common Seaborn operations
        using the Titanic dataset.
      </p>

      <CodeBlock filename="seaborn_eda.py">{`import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = sns.load_dataset('titanic')

# Display first rows
print(df.head())

# Set Seaborn theme
sns.set_theme()

# Count plot
sns.countplot(
    data=df,
    x='class'
)

plt.title('Passengers by Class')
plt.show()

# Scatter plot
sns.scatterplot(
    data=df,
    x='age',
    y='fare',
    hue='sex'
)

plt.title('Age vs Fare')
plt.show()

# Box plot
sns.boxplot(
    data=df,
    x='class',
    y='fare'
)

plt.title('Fare Distribution by Class')
plt.show()`}</CodeBlock>

      {/* 28. Cheat Sheet */}
      <h2>28. Complete Seaborn Cheat Sheet</h2>

      <CodeBlock filename="seaborn_cheat_sheet.py">{`import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = sns.load_dataset('tips')

# Set theme
sns.set_theme()

# Line plot
sns.lineplot(data=df, x='day', y='total_bill')

# Scatter plot
sns.scatterplot(data=df, x='total_bill', y='tip')

# Scatter plot with category
sns.scatterplot(
    data=df,
    x='total_bill',
    y='tip',
    hue='sex'
)

# Bar plot
sns.barplot(data=df, x='day', y='total_bill')

# Count plot
sns.countplot(data=df, x='day')

# Histogram
sns.histplot(data=df, x='total_bill')

# Histogram with bins
sns.histplot(data=df, x='total_bill', bins=10)

# KDE plot
sns.kdeplot(data=df, x='total_bill')

# Box plot
sns.boxplot(data=df, x='day', y='total_bill')

# Violin plot
sns.violinplot(data=df, x='day', y='total_bill')

# Pair plot
sns.pairplot(df)

# Pair plot with hue
sns.pairplot(df, hue='sex')

# Correlation
correlation = df.select_dtypes('number').corr()

# Heatmap
sns.heatmap(correlation, annot=True)

# Matplotlib customization
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('My Plot')
plt.show()`}</CodeBlock>

      {/* 29. Mental Model */}
      <h2>29. Complete Mental Model</h2>

      <CodeBlock filename="seaborn_mental_model.txt">{`                    SEABORN
                       │
                       ↓
               Import as sns
                       │
                       ↓
                Load / Prepare Data
                       │
                       ↓
             ┌─────────┴─────────┐
             ↓                   ↓
        Relationship         Distribution
             │                   │
       scatterplot()        histplot()
             │              kdeplot()
             │              boxplot()
             │              violinplot()
             ↓
        Categories
             │
       barplot()
       countplot()
             │
             ↓
       Multiple Variables
             │
        pairplot()
             │
             ↓
       Correlation
             │
        heatmap()
             │
             ↓
       Matplotlib
             │
             ↓
      Customize + Show`}</CodeBlock>

      {/* 30. Easy Memory */}
      <h2>30. Easy Way to Remember</h2>

      <CodeBlock filename="easy_memory.txt">{`Line       → Trend

Scatter    → Relationship

Bar        → Comparison

Count      → Count categories

Histogram  → Distribution

KDE        → Smooth distribution

Box        → Spread + Outliers

Violin     → Distribution shape

Pair       → Many relationships

Heatmap    → Matrix / Correlation`}</CodeBlock>

      {/* 31. Interview Questions */}
      <h2>31. Interview Questions</h2>

      <h3>1. What is Seaborn?</h3>

      <p>
        Seaborn is a Python data visualization library built on top of
        Matplotlib. It is mainly used for statistical data visualization.
      </p>

      <h3>2. Why is Seaborn used?</h3>

      <p>
        Seaborn makes it easier to create attractive and informative
        statistical visualizations with less code.
      </p>

      <h3>3. What is the common alias for Seaborn?</h3>

      <p>
        The commonly used alias is <code>sns</code>.
      </p>

      <CodeBlock filename="seaborn_alias.py">{`import seaborn as sns`}</CodeBlock>

      <h3>4. What is the relationship between Seaborn and Matplotlib?</h3>

      <p>
        Seaborn is built on top of Matplotlib and provides a higher-level
        interface for statistical visualization.
      </p>

      <h3>5. What is hue in Seaborn?</h3>

      <p>
        <code>hue</code> is used to visually separate different categories
        using different colors.
      </p>

      <h3>6. What is a count plot?</h3>

      <p>
        A count plot shows how many observations belong to each category.
      </p>

      <h3>7. What is a heatmap?</h3>

      <p>
        A heatmap represents numerical values using different shades of color.
        It is commonly used to visualize correlation matrices.
      </p>

      <h3>8. What is pairplot()?</h3>

      <p>
        <code>pairplot()</code> creates multiple plots showing relationships
        between variables in a dataset.
      </p>

      <h3>9. What is KDE?</h3>

      <p>
        KDE stands for Kernel Density Estimate. It provides a smooth estimate
        of the distribution of numerical data.
      </p>

      <h3>10. Why is Seaborn useful with Pandas?</h3>

      <p>
        Seaborn can directly use Pandas DataFrame columns through parameters
        such as <code>data</code>, <code>x</code>, <code>y</code>, and
        <code>hue</code>.
      </p>

      {/* 32. Summary */}
      <h2>32. Summary</h2>

      <p>
        Seaborn is an important Python visualization library for
        <strong> Data Analysis, Data Science, Machine Learning and EDA</strong>.
      </p>

      <p>
        It works on top of Matplotlib and makes statistical visualization
        easier.
      </p>

      <CodeBlock filename="final_summary.txt">{`Pandas DataFrame
       ↓
     Seaborn
       ↓
Choose visualization
       ↓
┌──────────┬──────────┬───────────┐
↓          ↓          ↓
Trend    Relationship Distribution
↓          ↓          ↓
line      scatter     hist
                      kde
                      box
                      violin
       │
       ↓
Categories
       ↓
bar / count
       │
       ↓
Multiple variables
       ↓
pairplot
       │
       ↓
Correlation
       ↓
heatmap
       │
       ↓
Matplotlib customization
       │
       ↓
Final Visualization`}</CodeBlock>

      <p>
        Once you understand Seaborn, you can use it together with
        <strong> Pandas and Matplotlib</strong> to perform effective
        Exploratory Data Analysis and visualize machine-learning datasets.
      </p>

      <PageNav
        prev={{ label: 'Matplotlib', path: '/python/matplotlib' }}
        next={{ label: '', path: '' }}
      />

    </DocPage>
  );
}