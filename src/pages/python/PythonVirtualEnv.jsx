import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { DocPage, DocHeader, PageNav } from '../../components/DocLayout';

const PythonVirtualEnv = () => {
  return (
    <DocPage>

      <DocHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Python', href: '/python/intro' },
          { label: 'Virtual Environment' }
        ]}
        title="Virtual Environment (venv)"
        readTime="10 min read"
        level="Beginner"
        updated="May 2026"
      />

      <h2>Virtual Environment (venv)</h2>

      <ul>
        <li>
          <p>
            A virtual environment is an isolated Python environment where
            packages can be installed separately for each project.
          </p>
        </li>

        <li>
          <p>
            It helps avoid conflicts between different package versions.
          </p>
        </li>

        <li>
          <p>
            Virtual environments are considered a best practice in Python
            development.
          </p>
        </li>
      </ul>

      <h2>Why Virtual Environment is Needed?</h2>

      <ul>
        <li>
          <p>
            Different projects may require different versions of the same
            package.
          </p>
        </li>

        <li>
          <p>
            Installing packages globally can create conflicts.
          </p>
        </li>

        <li>
          <p>
            Virtual environments keep project dependencies isolated.
          </p>
        </li>
      </ul>

      <h3>1. Example of Package Conflict</h3>

      <CodeBlock filename="package_conflict.txt">{`Project A needs:

numpy version 1.20

Project B needs:

numpy version 2.0

If both are installed globally,
they may conflict with each other.

Virtual environments solve this problem.`}</CodeBlock>

      <h2>Creating Virtual Environment</h2>

      <h3>2. Create Virtual Environment</h3>

      <CodeBlock filename="create_venv.py">{`<span class="cmt"># Create virtual environment</span>

python -m venv myenv`}</CodeBlock>

      <ul>
        <li>
          <p>
            Here, <code>myenv</code> is the name of the virtual environment.
          </p>
        </li>
      </ul>

      <h2>Activating Virtual Environment</h2>

      <h3>3. Activate Virtual Environment (Windows)</h3>

      <CodeBlock filename="activate_windows.py">{`<span class="cmt"># Activate virtual environment on Windows</span>

myenv\\Scripts\\activate`}</CodeBlock>

      <h3>4. Activate Virtual Environment (macOS/Linux)</h3>

      <CodeBlock filename="activate_linux.py">{`<span class="cmt"># Activate virtual environment on macOS/Linux</span>

source myenv/bin/activate`}</CodeBlock>

      <h2>Deactivate Virtual Environment</h2>

      <h3>5. Deactivate venv</h3>

      <CodeBlock filename="deactivate.py">{`<span class="cmt"># Deactivate virtual environment</span>

deactivate`}</CodeBlock>

      <h2>Installing Packages</h2>

      <h3>6. Install Package using pip</h3>

      <CodeBlock filename="install_package.py">{`<span class="cmt"># Install package</span>

pip install numpy

pip install requests`}</CodeBlock>

      <h3>7. Check Installed Packages</h3>

      <CodeBlock filename="pip_list.py">{`<span class="cmt"># See installed packages</span>

pip list`}</CodeBlock>

      <h3>8. Remove Installed Package</h3>

      <CodeBlock filename="uninstall_package.py">{`<span class="cmt"># Uninstall package</span>

pip uninstall numpy`}</CodeBlock>

      <h2>requirements.txt File</h2>

      <ul>
        <li>
          <p>
            requirements.txt stores all project dependencies.
          </p>
        </li>

        <li>
          <p>
            Helps other developers install the same packages easily.
          </p>
        </li>
      </ul>

      <h3>9. Create requirements.txt</h3>

      <CodeBlock filename="requirements_create.py">{`<span class="cmt"># Create requirements.txt</span>

pip freeze > requirements.txt`}</CodeBlock>

      <h3>10. Install Packages from requirements.txt</h3>

      <CodeBlock filename="requirements_install.py">{`<span class="cmt"># Install packages from requirements.txt</span>

pip install -r requirements.txt`}</CodeBlock>

      <h2>Common Commands</h2>

      <CodeBlock filename="common_commands.txt">{`Task                          Command

Create venv                   python -m venv myenv

Activate (Windows)            myenv\\Scripts\\activate

Activate (Linux/macOS)        source myenv/bin/activate

Deactivate                    deactivate

Install package               pip install package_name

See packages                  pip list

Uninstall package             pip uninstall package_name`}</CodeBlock>

      <h2>Advantages of Virtual Environment</h2>

      <ul>
        <li>
          <p>
            Prevents package conflicts.
          </p>
        </li>

        <li>
          <p>
            Keeps project dependencies isolated.
          </p>
        </li>

        <li>
          <p>
            Makes projects portable and reproducible.
          </p>
        </li>

        <li>
          <p>
            Improves project management.
          </p>
        </li>
      </ul>

      <h2>Most Asked Interview Questions</h2>

      <ul>
        <li>
          <p>
            What is a virtual environment in Python?
          </p>
        </li>

        <li>
          <p>
            Why virtual environment is important?
          </p>
        </li>

        <li>
          <p>
            Difference between global installation and virtual environment.
          </p>
        </li>

        <li>
          <p>
            What is requirements.txt used for?
          </p>
        </li>
      </ul>

      <PageNav
        prev={{ label: 'Modules & Packages', path: '/python/modules' }}
        next={{ label: 'Iterators', path: '/python/iterators' }}
      />

    </DocPage>
  );
};

export default PythonVirtualEnv;