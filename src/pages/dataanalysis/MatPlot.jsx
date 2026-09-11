import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

export default function Matplotlib() {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Matplotlib', href: '/dataanalysis/matplotlib' },
          { label: 'Matplotlib' }
        ]}
        title="Matplotlib"
        readTime="25 min read"
        level="Beginner"
        updated="September 2026"
      />

      {/* 1. Introduction */}
      <h2>1. What is Matplotlib?</h2>

      <p>
        <strong>Matplotlib</strong> is a Python library used to create
        <strong> graphs, charts, and visualizations</strong>.
      </p>

      <p>It is commonly used in:</p>

      <ul>
        <li>Data Analysis</li>
        <li>Machine Learning</li>
        <li>Data Science</li>
        <li>Scientific Computing</li>
        <li>Statistics</li>
        <li>Research</li>
      </ul>

      <p>Matplotlib can create many types of visualizations:</p>

      <ul>
        <li>Line plots</li>
        <li>Bar charts</li>
        <li>Scatter plots</li>
        <li>Histograms</li>
        <li>Pie charts</li>
        <li>Multiple plots</li>
      </ul>

      <p>The most commonly used module is <code>pyplot</code>.</p>

      <CodeBlock filename="import_matplotlib.py">{`import matplotlib.pyplot as plt`}</CodeBlock>

      <p>Here:</p>

      <CodeBlock filename="matplotlib_structure.txt">{`matplotlib
    ↓
pyplot
    ↓
plt`}</CodeBlock>

      <p>
        <code>plt</code> is simply a short name (alias) that we use to access
        Matplotlib functions.
      </p>

      {/* 2. Installation */}
      <h2>2. Installing Matplotlib</h2>

      <p>If Matplotlib is not installed, install it using:</p>

      <CodeBlock filename="install_matplotlib.txt">{`!pip install matplotlib`}</CodeBlock>

      <h3>What does pip install mean?</h3>

      <p>
        <code>pip</code> is Python's package manager. It is used to install
        Python libraries and packages.
      </p>

      <CodeBlock filename="pip_flow.txt">{`pip
 ↓
Install
 ↓
Matplotlib`}</CodeBlock>

      <h3>Jupyter Notebook / Google Colab</h3>

      <CodeBlock filename="jupyter_install.txt">{`!pip install matplotlib`}</CodeBlock>

      <h3>Command Prompt / Terminal</h3>

      <CodeBlock filename="terminal_install.txt">{`pip install matplotlib`}</CodeBlock>

      <p>
        In a normal terminal, you usually do not need the <code>!</code>.
      </p>

      {/* 3. Import */}
      <h2>3. Importing Matplotlib</h2>

      <CodeBlock filename="import.py">{`import matplotlib.pyplot as plt`}</CodeBlock>

      <p>
        This imports the <code>pyplot</code> module.
      </p>

      <p>Instead of writing:</p>

      <CodeBlock filename="without_alias.py">{`matplotlib.pyplot.plot()`}</CodeBlock>

      <p>we can write:</p>

      <CodeBlock filename="with_alias.py">{`plt.plot()`}</CodeBlock>

      <p>
        This is possible because we gave <code>pyplot</code> the short name
        <code> plt</code>.
      </p>

      {/* 4. Line Plot */}
      <h2>4. Simple Line Plot</h2>

      <p>
        A line plot is one of the most commonly used Matplotlib visualizations.
        It is useful for showing trends or changes in values.
      </p>

      <CodeBlock filename="line_plot.py">{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]

y = [2, 4, 6, 8, 10]

plt.plot(
    x,
    y,
    color='blue',
    marker='o',
    linestyle='-',
    linewidth=2,
    markersize=8
)

plt.xlabel('X axis')
plt.ylabel('Y axis')

plt.grid(True)

plt.title('Simple Line Plot')

plt.show()`}</CodeBlock>

      {/* 5. X and Y */}
      <h2>5. Creating X and Y Values</h2>

      <CodeBlock filename="x_y_values.py">{`x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]`}</CodeBlock>

      <p>Here:</p>

      <ul>
        <li><code>x</code> contains X-axis values.</li>
        <li><code>y</code> contains Y-axis values.</li>
      </ul>

      <p>Matplotlib pairs them like this:</p>

      <CodeBlock filename="data_pairs.txt">{`X    Y
↓    ↓
1 →  2
2 →  4
3 →  6
4 →  8
5 → 10`}</CodeBlock>

      <p>Therefore, the points are:</p>

      <CodeBlock filename="points.txt">{`(1,2)
(2,4)
(3,6)
(4,8)
(5,10)`}</CodeBlock>

      {/* 6. plot */}
      <h2>6. plt.plot()</h2>

      <p>
        <code>plt.plot()</code> creates a line plot.
      </p>

      <CodeBlock filename="basic_plot.py">{`plt.plot(x, y)`}</CodeBlock>

      <p>Example:</p>

      <CodeBlock filename="plot_example.py">{`plt.plot([1, 2, 3], [2, 4, 6])`}</CodeBlock>

      <p>
        Matplotlib connects the points with a line.
      </p>

      <CodeBlock filename="line_plot_concept.txt">{`Y
│
│          ●
│       /
│     ●
│   /
│ ●
└──────────── X`}</CodeBlock>

      {/* 7. Color */}
      <h2>7. color</h2>

      <CodeBlock filename="color.py">{`color='blue'`}</CodeBlock>

      <p>
        The <code>color</code> parameter controls the color of the line.
      </p>

      <CodeBlock filename="color_example.py">{`plt.plot(x, y, color='blue')`}</CodeBlock>

      <p>Some commonly used colors are:</p>

      <CodeBlock filename="colors.txt">{`'red'
'blue'
'green'
'black'
'purple'
'orange'`}</CodeBlock>

      {/* 8. Marker */}
      <h2>8. marker</h2>

      <CodeBlock filename="marker.py">{`marker='o'`}</CodeBlock>

      <p>
        A marker shows the individual data points on a graph.
      </p>

      <p>
        <code>marker='o'</code> produces circular points.
      </p>

      <p>Common markers:</p>

      <table>
        <thead>
          <tr>
            <th>Marker</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>'o'</code></td>
            <td>Circle</td>
          </tr>
          <tr>
            <td><code>'s'</code></td>
            <td>Square</td>
          </tr>
          <tr>
            <td><code>'^'</code></td>
            <td>Triangle</td>
          </tr>
          <tr>
            <td><code>'*'</code></td>
            <td>Star</td>
          </tr>
          <tr>
            <td><code>'+'</code></td>
            <td>Plus</td>
          </tr>
          <tr>
            <td><code>'x'</code></td>
            <td>X</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="marker_example.py">{`plt.plot(x, y, marker='o')`}</CodeBlock>

      <CodeBlock filename="marker_concept.txt">{`●────●────●────●────●`}</CodeBlock>

      {/* 9. Line style */}
      <h2>9. linestyle</h2>

      <CodeBlock filename="linestyle.py">{`linestyle='-'`}</CodeBlock>

      <p>
        The <code>linestyle</code> parameter controls the style of the
        connecting line.
      </p>

      <table>
        <thead>
          <tr>
            <th>Style</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>'-'</code></td>
            <td>Solid line</td>
          </tr>
          <tr>
            <td><code>'--'</code></td>
            <td>Dashed line</td>
          </tr>
          <tr>
            <td><code>':'</code></td>
            <td>Dotted line</td>
          </tr>
          <tr>
            <td><code>'-.'</code></td>
            <td>Dash-dot line</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock filename="dashed_line.py">{`plt.plot(x, y, linestyle='--')`}</CodeBlock>

      {/* 10. linewidth */}
      <h2>10. linewidth</h2>

      <CodeBlock filename="linewidth.py">{`linewidth=2`}</CodeBlock>

      <p>
        <code>linewidth</code> controls the thickness of the line.
      </p>

      <CodeBlock filename="linewidth_examples.py">{`linewidth=1   # Thin
linewidth=3   # Thicker
linewidth=5   # Very thick`}</CodeBlock>

      {/* 11. markersize */}
      <h2>11. markersize</h2>

      <CodeBlock filename="markersize.py">{`markersize=8`}</CodeBlock>

      <p>
        <code>markersize</code> controls the size of the markers.
      </p>

      <CodeBlock filename="markersize_example.py">{`plt.plot(x, y, marker='o', markersize=8)`}</CodeBlock>

      <p>
        A larger number produces larger markers.
      </p>

      {/* 12. Combined */}
      <h2>12. Combining plot() Parameters</h2>

      <CodeBlock filename="combined_plot.py">{`plt.plot(
    x,
    y,
    color='blue',
    marker='o',
    linestyle='-',
    linewidth=2,
    markersize=8
)`}</CodeBlock>

      <p>This means:</p>

      <CodeBlock filename="plot_parameters.txt">{`plot x and y
   ↓
blue line
   ↓
circle markers
   ↓
solid line
   ↓
line thickness = 2
   ↓
marker size = 8`}</CodeBlock>

      {/* 13. xlabel */}
      <h2>13. plt.xlabel()</h2>

      <CodeBlock filename="xlabel.py">{`plt.xlabel('X axis')`}</CodeBlock>

      <p>
        <code>plt.xlabel()</code> sets the label of the X-axis.
      </p>

      <CodeBlock filename="xlabel_example.py">{`plt.xlabel('Days')`}</CodeBlock>

      {/* 14. ylabel */}
      <h2>14. plt.ylabel()</h2>

      <CodeBlock filename="ylabel.py">{`plt.ylabel('Y axis')`}</CodeBlock>

      <p>
        <code>plt.ylabel()</code> sets the label of the Y-axis.
      </p>

      <CodeBlock filename="ylabel_example.py">{`plt.ylabel('Sales')`}</CodeBlock>

      {/* 15. title */}
      <h2>15. plt.title()</h2>

      <CodeBlock filename="title.py">{`plt.title('Simple Line Plot')`}</CodeBlock>

      <p>
        <code>plt.title()</code> adds a title at the top of the graph.
      </p>

      <CodeBlock filename="title_example.py">{`plt.title('Monthly Sales')`}</CodeBlock>

      {/* 16. grid */}
      <h2>16. plt.grid(True)</h2>

      <CodeBlock filename="grid.py">{`plt.grid(True)`}</CodeBlock>

      <p>
        <code>plt.grid(True)</code> adds grid lines to the graph.
        Grid lines make values easier to read.
      </p>

      <h3>Turn grid on</h3>

      <CodeBlock filename="grid_on.py">{`plt.grid(True)`}</CodeBlock>

      <h3>Turn grid off</h3>

      <CodeBlock filename="grid_off.py">{`plt.grid(False)`}</CodeBlock>

      {/* 17. show */}
      <h2>17. plt.show()</h2>

      <CodeBlock filename="show.py">{`plt.show()`}</CodeBlock>

      <p>
        <code>plt.show()</code> displays the graph.
      </p>

      <p>
        It is generally good practice to put it at the end of a plot.
      </p>

      <h3>Complete Flow</h3>

      <CodeBlock filename="plot_flow.txt">{`Create data
     ↓
plt.plot()
     ↓
xlabel / ylabel
     ↓
grid
     ↓
title
     ↓
show()`}</CodeBlock>

      {/* 18. Multiple plots */}
      <h2>18. Multiple Plots</h2>

      <p>
        Matplotlib can create multiple plots inside a single figure.
      </p>

      <CodeBlock filename="multiple_plots.py">{`import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]

y1 = [1, 4, 9, 16, 25]
y2 = [1, 2, 3, 4, 5]

plt.figure(figsize=(10, 5))

plt.subplot(1, 2, 1)

plt.plot(
    x,
    y1,
    color='red',
    marker='o',
    linestyle='-',
    linewidth=2,
    markersize=8
)

plt.title("Plot 1")

plt.subplot(1, 2, 2)

plt.plot(
    x,
    y1,
    color='red',
    marker='o',
    linestyle='-',
    linewidth=2,
    markersize=8
)

plt.title("Plot 2")

plt.show()`}</CodeBlock>

      {/* 19. figure */}
      <h2>19. plt.figure()</h2>

      <CodeBlock filename="figure.py">{`plt.figure(figsize=(10, 5))`}</CodeBlock>

      <p>
        <code>plt.figure()</code> creates a new figure or canvas for your
        plots.
      </p>

      <p>
        <code>figsize</code> controls the size of the figure.
      </p>

      <CodeBlock filename="figsize.txt">{`figsize=(10, 5)

width  = 10 inches
height = 5 inches`}</CodeBlock>

      <p>
        Therefore:
      </p>

      <CodeBlock filename="wide_figure.py">{`plt.figure(figsize=(10, 5))`}</CodeBlock>

      <p>creates a wide figure.</p>

      {/* 20. subplot */}
      <h2>20. plt.subplot()</h2>

      <p>
        <code>plt.subplot()</code> is used to create multiple plots inside
        one figure.
      </p>

      <CodeBlock filename="subplot.py">{`plt.subplot(1, 2, 1)`}</CodeBlock>

      <p>The three numbers mean:</p>

      <CodeBlock filename="subplot_formula.txt">{`subplot(rows, columns, position)`}</CodeBlock>

      <p>Therefore:</p>

      <CodeBlock filename="subplot_meaning.txt">{`plt.subplot(1, 2, 1)

1 row
2 columns
position 1`}</CodeBlock>

      <p>Conceptually:</p>

      <CodeBlock filename="subplot_layout.txt">{`┌─────────────┬─────────────┐
│   Plot 1    │   Plot 2    │
│      1      │      2      │
└─────────────┴─────────────┘`}</CodeBlock>

      <p>
        <code>plt.subplot(1, 2, 2)</code> selects the second position.
      </p>

      {/* 21. Understanding subplot */}
      <h2>21. Understanding subplot()</h2>

      <CodeBlock filename="subplot_2x2.py">{`plt.subplot(2, 2, 1)`}</CodeBlock>

      <p>This means:</p>

      <CodeBlock filename="subplot_2x2_meaning.txt">{`2 rows
2 columns
position 1`}</CodeBlock>

      <p>The layout becomes:</p>

      <CodeBlock filename="subplot_2x2_layout.txt">{`┌───────┬───────┐
│   1   │   2   │
├───────┼───────┤
│   3   │   4   │
└───────┴───────┘`}</CodeBlock>

      <CodeBlock filename="subplot_positions.py">{`plt.subplot(2, 2, 1)   # top-left

plt.subplot(2, 2, 2)   # top-right

plt.subplot(2, 2, 3)   # bottom-left

plt.subplot(2, 2, 4)   # bottom-right`}</CodeBlock>

      <h3>Easy Formula</h3>

      <CodeBlock filename="subplot_formula.txt">{`subplot(rows, columns, position)`}</CodeBlock>

      {/* 22. Bar Chart */}
      <h2>22. Bar Chart</h2>

      <p>
        A <strong>bar chart</strong> is used to compare different categories.
      </p>

      <CodeBlock filename="bar_chart.py">{`categories = ['A', 'B', 'C', 'D', 'E']

values = [10, 15, 7, 12, 9]

plt.bar(categories, values, color='green')

plt.title('Bar Chart')

plt.xlabel('Categories')
plt.ylabel('Values')

plt.show()`}</CodeBlock>

      {/* 23. bar */}
      <h2>23. plt.bar()</h2>

      <p>
        <code>plt.bar()</code> creates a bar chart.
      </p>

      <p>Basic syntax:</p>

      <CodeBlock filename="bar_syntax.py">{`plt.bar(x, height)`}</CodeBlock>

      <p>
        <code>categories</code> are the categories, while
        <code>values</code> are their corresponding heights.
      </p>

      <CodeBlock filename="bar_data.txt">{`A → 10
B → 15
C → 7
D → 12
E → 9`}</CodeBlock>

      {/* 24. Bar color */}
      <h2>24. color in Bar Chart</h2>

      <CodeBlock filename="bar_color.py">{`plt.bar(
    categories,
    values,
    color='green'
)`}</CodeBlock>

      <p>
        The <code>color</code> parameter sets the color of the bars.
      </p>

      {/* 25. Histogram */}
      <h2>25. Histogram</h2>

      <p>
        A histogram represents the distribution of numerical data by dividing
        values into intervals called <strong>bins</strong> and counting how
        many values fall into each interval.
      </p>

      <CodeBlock filename="histogram.py">{`data = [
    1, 2, 2, 3, 3,
    3, 4, 4, 4, 4,
    5, 5, 5, 5, 5
]

plt.hist(
    data,
    bins=5,
    color='blue',
    edgecolor='black'
)

plt.title('Histogram')

plt.show()`}</CodeBlock>

      {/* 26. hist */}
      <h2>26. plt.hist()</h2>

      <p>
        <code>plt.hist()</code> creates a histogram.
      </p>

      <CodeBlock filename="hist_syntax.py">{`plt.hist(data)`}</CodeBlock>

      <p>
        Unlike a bar chart, a histogram is mainly used for
        <strong> numerical distributions</strong>.
      </p>

      <p>Examples include:</p>

      <ul>
        <li>Marks of students</li>
        <li>Height of people</li>
        <li>Age distribution</li>
        <li>Salary distribution</li>
      </ul>

      {/* 27. bins */}
      <h2>27. bins</h2>

      <CodeBlock filename="bins.py">{`bins=5`}</CodeBlock>

      <p>
        A <strong>bin</strong> is an interval or range into which data is
        grouped.
      </p>

      <p>Conceptually:</p>

      <CodeBlock filename="bins_concept.txt">{`Range
 ↓

1 ─ 2
2 ─ 3
3 ─ 4
4 ─ 5
5 ─ 6`}</CodeBlock>

      <p>
        The histogram counts how many values fall into each bin.
      </p>

      <h3>Why are bins important?</h3>

      <p>
        Different bin sizes can make a distribution look very different.
      </p>

      <CodeBlock filename="different_bins.py">{`bins=5    # 5 bins

bins=10   # 10 bins

bins=20   # 20 bins`}</CodeBlock>

      {/* 28. edgecolor */}
      <h2>28. edgecolor</h2>

      <CodeBlock filename="edgecolor.py">{`edgecolor='black'`}</CodeBlock>

      <p>
        <code>edgecolor</code> sets the color of the edges or borders of
        histogram bars.
      </p>

      <p>
        This makes individual bins easier to see.
      </p>

      {/* 29. Scatter */}
      <h2>29. Scatter Plot</h2>

      <p>
        A scatter plot displays individual data points.
      </p>

      <CodeBlock filename="scatter_plot.py">{`x = [1, 2, 3, 4, 5]

y = [2, 3, 4, 5, 6]

plt.scatter(
    x,
    y,
    color='purple',
    marker='o'
)

plt.title('Scatter Plot')

plt.xlabel('X')
plt.ylabel('Y')

plt.show()`}</CodeBlock>

      {/* 30. scatter */}
      <h2>30. plt.scatter()</h2>

      <p>
        <code>scatter()</code> creates a scatter plot.
      </p>

      <p>Each pair becomes a point:</p>

      <CodeBlock filename="scatter_points.txt">{`(1,2)
(2,3)
(3,4)
(4,5)
(5,6)`}</CodeBlock>

      <p>
        Scatter plots are especially useful for understanding the
        <strong> relationship between two numerical variables</strong>.
      </p>

      <p>Examples:</p>

      <ul>
        <li>Hours studied ↔ Exam marks</li>
        <li>Height ↔ Weight</li>
        <li>Experience ↔ Salary</li>
      </ul>

      {/* 31. Scatter marker */}
      <h2>31. marker in Scatter Plot</h2>

      <CodeBlock filename="scatter_marker.py">{`marker='o'`}</CodeBlock>

      <p>
        This makes each point circular.
      </p>

      <CodeBlock filename="scatter_marker_example.py">{`plt.scatter(x, y, marker='o')`}</CodeBlock>

      {/* 32. Pie */}
      <h2>32. Pie Chart</h2>

      <p>
        A pie chart represents values as <strong>parts of a whole</strong>.
      </p>

      <CodeBlock filename="pie_chart.py">{`labels = ['A', 'B', 'C', 'D']

sizes = [15, 30, 45, 10]

colors = [
    'gold',
    'yellowgreen',
    'lightcoral',
    'lightskyblue'
]

explode = (0.1, 0, 0, 0)

plt.pie(
    sizes,
    labels=labels,
    autopct='%1.1f%%',
    colors=colors,
    explode=explode
)

plt.axis('equal')

plt.title('Pie Chart')

plt.show()`}</CodeBlock>

      {/* 33. labels */}
      <h2>33. labels</h2>

      <CodeBlock filename="pie_labels.py">{`labels = ['A', 'B', 'C', 'D']`}</CodeBlock>

      <p>
        <code>labels</code> contains the names of the pie-chart sections.
      </p>

      {/* 34. sizes */}
      <h2>34. sizes</h2>

      <CodeBlock filename="pie_sizes.py">{`sizes = [15, 30, 45, 10]`}</CodeBlock>

      <p>
        <code>sizes</code> contains the numerical values represented by each
        slice.
      </p>

      <CodeBlock filename="pie_total.txt">{`15 + 30 + 45 + 10 = 100`}</CodeBlock>

      <p>Therefore:</p>

      <CodeBlock filename="pie_percentages.txt">{`A → 15%
B → 30%
C → 45%
D → 10%`}</CodeBlock>

      {/* 35. colors */}
      <h2>35. colors</h2>

      <CodeBlock filename="pie_colors.py">{`colors = [
    'gold',
    'yellowgreen',
    'lightcoral',
    'lightskyblue'
]`}</CodeBlock>

      <p>
        This defines the colors for the individual slices.
      </p>

      <p>
        The first color corresponds to the first label, the second color to
        the second label, and so on.
      </p>

      {/* 36. explode */}
      <h2>36. explode</h2>

      <CodeBlock filename="explode.py">{`explode = (0.1, 0, 0, 0)`}</CodeBlock>

      <p>
        <code>explode</code> is used to separate or pull out a slice from
        the center.
      </p>

      <CodeBlock filename="explode_meaning.txt">{`A → 0.1
B → 0
C → 0
D → 0`}</CodeBlock>

      <p>
        Therefore, the first slice A moves slightly outward.
      </p>

      <h3>Why use explode?</h3>

      <p>
        It is useful when you want to highlight an important category.
      </p>

      {/* 37. pie */}
      <h2>37. plt.pie()</h2>

      <CodeBlock filename="pie_function.py">{`plt.pie(
    sizes,
    labels=labels,
    autopct='%1.1f%%',
    colors=colors,
    explode=explode
)`}</CodeBlock>

      <p>This creates the pie chart.</p>

      <h3>sizes</h3>

      <p>
        Controls the size of each slice.
      </p>

      <h3>labels</h3>

      <p>
        Displays the names of the categories.
      </p>

      <h3>colors</h3>

      <p>
        Controls the colors of the slices.
      </p>

      <h3>explode</h3>

      <p>
        Moves selected slices outward.
      </p>

      {/* 38. autopct */}
      <h2>38. autopct</h2>

      <p>
        <code>autopct</code> displays the percentage inside each pie slice.
      </p>

      <CodeBlock filename="autopct.py">{`autopct='%1.1f%%'`}</CodeBlock>

      <p>For example:</p>

      <CodeBlock filename="autopct_output.txt">{`A → 15.0%
B → 30.0%
C → 45.0%
D → 10.0%`}</CodeBlock>

      <h3>Understanding %1.1f%%</h3>

      <p>
        <code>%1.1f</code> means displaying a floating-point number with
        one decimal place.
      </p>

      <p>
        The final <code>%%</code> means displaying the percentage symbol.
      </p>

      <CodeBlock filename="autopct_format.txt">{`'%1.1f%%'

15.0%
30.0%
45.0%
10.0%`}</CodeBlock>

      {/* 39. axis equal */}
      <h2>39. plt.axis('equal')</h2>

      <CodeBlock filename="axis_equal.py">{`plt.axis('equal')`}</CodeBlock>

      <p>
        <code>plt.axis('equal')</code> makes the X and Y axes use equal
        scaling.
      </p>

      <p>
        For a pie chart, this helps keep the chart circular rather than
        stretched into an oval.
      </p>

      <p>
        Therefore, it is commonly used with pie charts.
      </p>

      {/* 40. Complete pie */}
      <h2>40. Complete Pie Chart</h2>

      <CodeBlock filename="complete_pie_chart.py">{`import matplotlib.pyplot as plt

labels = ['A', 'B', 'C', 'D']

sizes = [15, 30, 45, 10]

colors = [
    'gold',
    'yellowgreen',
    'lightcoral',
    'lightskyblue'
]

explode = (0.1, 0, 0, 0)

plt.pie(
    sizes,
    labels=labels,
    autopct='%1.1f%%',
    colors=colors,
    explode=explode
)

plt.axis('equal')

plt.title('Pie Chart')

plt.show()`}</CodeBlock>

      <p>The resulting chart contains:</p>

      <CodeBlock filename="pie_result.txt">{`A → 15.0%
B → 30.0%
C → 45.0%
D → 10.0%`}</CodeBlock>

      <p>
        The A slice is slightly separated from the center.
      </p>

      {/* 41. Difference */}
      <h2>41. Difference Between Main Plot Types</h2>

      <p>
        This is extremely important for interviews and practical data
        analysis.
      </p>

      <table>
        <thead>
          <tr>
            <th>Plot</th>
            <th>Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>plot()</code></td>
            <td>Trends or changes over X</td>
          </tr>
          <tr>
            <td><code>bar()</code></td>
            <td>Comparing categories</td>
          </tr>
          <tr>
            <td><code>hist()</code></td>
            <td>Distribution of numerical data</td>
          </tr>
          <tr>
            <td><code>scatter()</code></td>
            <td>Relationship between two variables</td>
          </tr>
          <tr>
            <td><code>pie()</code></td>
            <td>Parts of a whole</td>
          </tr>
        </tbody>
      </table>

      <h3>Easy Way to Remember</h3>

      <CodeBlock filename="plot_types.txt">{`Line       → Trend
Bar        → Comparison
Histogram  → Distribution
Scatter    → Relationship
Pie        → Percentage / Part of whole`}</CodeBlock>

      {/* 42. plot vs scatter */}
      <h2>42. plot() vs scatter()</h2>

      <p>
        This is a common interview question.
      </p>

      <h3>Line Plot</h3>

      <CodeBlock filename="line_vs_scatter.py">{`plt.plot(x, y)`}</CodeBlock>

      <p>
        Points are generally connected by lines.
      </p>

      <p>Useful for:</p>

      <ul>
        <li>Time → Temperature</li>
        <li>Day → Sales</li>
        <li>Year → Population</li>
      </ul>

      <h3>Scatter Plot</h3>

      <CodeBlock filename="scatter_vs_line.py">{`plt.scatter(x, y)`}</CodeBlock>

      <p>
        Points are displayed individually.
      </p>

      <p>Useful for finding relationships:</p>

      <ul>
        <li>Study Hours → Marks</li>
        <li>Height → Weight</li>
        <li>Experience → Salary</li>
      </ul>

      {/* 43. Bar vs histogram */}
      <h2>43. Bar Chart vs Histogram</h2>

      <p>
        This is another important distinction.
      </p>

      <h3>Bar Chart</h3>

      <p>
        A bar chart is used for <strong>categories</strong>.
      </p>

      <CodeBlock filename="bar_categories.py">{`Product A → 10
Product B → 20
Product C → 15`}</CodeBlock>

      <CodeBlock filename="bar_code.py">{`plt.bar(categories, values)`}</CodeBlock>

      <h3>Histogram</h3>

      <p>
        A histogram is used for <strong>numerical distributions</strong>.
      </p>

      <CodeBlock filename="age_distribution.py">{`Age:
18, 19, 20, 21, 22, 22, 23...`}</CodeBlock>

      <CodeBlock filename="hist_code.py">{`plt.hist(data)`}</CodeBlock>

      <h3>Key Difference</h3>

      <CodeBlock filename="bar_vs_hist.txt">{`Bar chart
   ↓
Categories

Histogram
   ↓
Numerical distribution`}</CodeBlock>

      {/* 44. Cheat Sheet */}
      <h2>44. Complete Matplotlib Cheat Sheet</h2>

      <CodeBlock filename="matplotlib_cheat_sheet.py">{`import matplotlib.pyplot as plt

# Line plot
plt.plot(x, y)

# Line color
plt.plot(x, y, color='blue')

# Marker
plt.plot(x, y, marker='o')

# Line style
plt.plot(x, y, linestyle='--')

# Line width
plt.plot(x, y, linewidth=2)

# Marker size
plt.plot(x, y, markersize=8)

# X-axis label
plt.xlabel('X axis')

# Y-axis label
plt.ylabel('Y axis')

# Title
plt.title('My Plot')

# Grid
plt.grid(True)

# Display plot
plt.show()

# Figure size
plt.figure(figsize=(10, 5))

# Multiple plots
plt.subplot(1, 2, 1)

# Bar chart
plt.bar(categories, values)

# Histogram
plt.hist(data, bins=5)

# Scatter plot
plt.scatter(x, y)

# Pie chart
plt.pie(sizes, labels=labels)

# Equal axis
plt.axis('equal')`}</CodeBlock>

      {/* 45. Mental Model */}
      <h2>45. Complete Mental Model</h2>

      <p>
        When creating a Matplotlib visualization, think about the process
        like this:
      </p>

      <CodeBlock filename="matplotlib_mental_model.txt">{`                  MATPLOTLIB
                       │
                 import pyplot
                       │
                      plt
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      LINE            BAR          SCATTER
    plot()           bar()        scatter()
        │              │              │
      Trend        Comparison    Relationship
        │              │              │
        └──────────────┼──────────────┘
                       │
                  Other charts
                       │
                 ┌─────┴─────┐
                 ↓           ↓
             HISTOGRAM      PIE
               hist()      pie()
                 │           │
            Distribution  Part of whole`}</CodeBlock>

      <h3>After Creating the Plot</h3>

      <CodeBlock filename="visualization_flow.txt">{`Create Plot
     ↓
xlabel / ylabel
     ↓
title
     ↓
grid
     ↓
customize
     ↓
show()`}</CodeBlock>

      {/* Important commands */}
      <h2>Most Important Matplotlib Commands</h2>

      <CodeBlock filename="important_commands.py">{`plt.plot()       # Line chart
plt.bar()        # Bar chart
plt.hist()       # Histogram
plt.scatter()    # Scatter plot
plt.pie()        # Pie chart
plt.subplot()    # Multiple plots
plt.figure()     # Create / size a figure
plt.xlabel()     # X-axis label
plt.ylabel()     # Y-axis label
plt.title()      # Plot title
plt.grid()       # Grid
plt.show()       # Display plot`}</CodeBlock>

      {/* Revision Table */}
      <h2>Quick Revision Table</h2>

      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Purpose</th>
            <th>Easy Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>plt.plot()</code></td>
            <td>Line chart</td>
            <td>Show trends</td>
          </tr>
          <tr>
            <td><code>plt.bar()</code></td>
            <td>Bar chart</td>
            <td>Compare categories</td>
          </tr>
          <tr>
            <td><code>plt.hist()</code></td>
            <td>Histogram</td>
            <td>Show distribution</td>
          </tr>
          <tr>
            <td><code>plt.scatter()</code></td>
            <td>Scatter plot</td>
            <td>Show relationships</td>
          </tr>
          <tr>
            <td><code>plt.pie()</code></td>
            <td>Pie chart</td>
            <td>Show parts of a whole</td>
          </tr>
          <tr>
            <td><code>plt.subplot()</code></td>
            <td>Multiple plots</td>
            <td>Create plot layouts</td>
          </tr>
          <tr>
            <td><code>plt.figure()</code></td>
            <td>Figure</td>
            <td>Create/size canvas</td>
          </tr>
          <tr>
            <td><code>plt.xlabel()</code></td>
            <td>X-axis label</td>
            <td>Name X-axis</td>
          </tr>
          <tr>
            <td><code>plt.ylabel()</code></td>
            <td>Y-axis label</td>
            <td>Name Y-axis</td>
          </tr>
          <tr>
            <td><code>plt.title()</code></td>
            <td>Title</td>
            <td>Add graph title</td>
          </tr>
          <tr>
            <td><code>plt.grid()</code></td>
            <td>Grid</td>
            <td>Make values easier to read</td>
          </tr>
          <tr>
            <td><code>plt.show()</code></td>
            <td>Display</td>
            <td>Show the graph</td>
          </tr>
        </tbody>
      </table>

      {/* Interview Questions */}
      <h2>Interview Questions</h2>

      <h3>1. What is Matplotlib?</h3>
      <p>
        Matplotlib is a Python library used to create graphs, charts and
        visualizations.
      </p>

      <h3>2. What is pyplot?</h3>
      <p>
        <code>pyplot</code> is a Matplotlib module that provides functions
        for creating and customizing plots.
      </p>

      <h3>3. Why do we use plt?</h3>
      <p>
        <code>plt</code> is a short alias for <code>matplotlib.pyplot</code>.
      </p>

      <h3>4. What is the difference between plot() and scatter()?</h3>
      <p>
        <code>plot()</code> generally connects points with lines and is useful
        for showing trends, while <code>scatter()</code> displays individual
        points and is useful for understanding relationships between variables.
      </p>

      <h3>5. What is the difference between bar chart and histogram?</h3>
      <p>
        A bar chart is mainly used for categorical data, while a histogram is
        used to show the distribution of numerical data.
      </p>

      <h3>6. What is a bin in a histogram?</h3>
      <p>
        A bin is an interval or range into which numerical values are grouped.
      </p>

      <h3>7. What does figsize do?</h3>
      <p>
        <code>figsize</code> controls the width and height of a Matplotlib
        figure.
      </p>

      <h3>8. What does subplot() do?</h3>
      <p>
        <code>subplot()</code> allows us to create multiple plots inside a
        single figure.
      </p>

      <h3>9. What does autopct do in a pie chart?</h3>
      <p>
        <code>autopct</code> displays percentages inside the pie-chart slices.
      </p>

      <h3>10. Why is plt.axis('equal') used?</h3>
      <p>
        It keeps the X and Y axes equally scaled, which helps a pie chart
        remain circular instead of appearing stretched.
      </p>

      {/* Final Summary */}
      <h2>Summary</h2>

      <p>
        Matplotlib is one of the fundamental visualization libraries in
        Python. Before moving to visualization libraries such as
        <strong> Pandas plotting, Seaborn</strong>, or visualizing ML datasets,
        you should understand these core Matplotlib functions.
      </p>

      <CodeBlock filename="final_matplotlib_summary.txt">{`Matplotlib
    ↓
pyplot
    ↓
plt
    ↓
┌──────────────┬──────────────┬──────────────┐
↓              ↓              ↓
plot()         bar()          scatter()
Trend          Comparison     Relationship
│
├── hist() → Distribution
│
└── pie()  → Part of whole`}</CodeBlock>

      <p>
        These are the core Matplotlib foundations you need before moving into
        visualization with Pandas, Seaborn and machine-learning datasets.
      </p>

      <PageNav
        prev={{ label: 'Data Manipulation', path: '/dataanalysis/data-manipulation' }}
        next={{ label: 'Seaborn', path: '/python/seaborn' }}
      />

    </DocPage>
  );
}