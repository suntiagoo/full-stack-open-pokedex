# 11.1 Warming up

## Answers

**1.** As mentioned earlier, some common steps in a continuous integration (CI) setup include static code linting, testing, and compilation.

For the current Python ecosystem, the tools used for these CI steps are:

- Static Code Linting - **Flake 8**
  Flake8 is a powerful command-line utility and modular Python code linter that enforces style consistency, checks for syntax errors, and measures code complexity. It serves as a wrapper around PyFlakes, pycodestyle, and McCabe, combining their checks into a single tool for efficient code analysis.

- Testing - **Pytest**
  Pytest is an open-source Python testing framework that enables developers to write simple, readable, and scalable test cases. It is widely used for unit testing, functional testing, and API testing.

- Building - **Heroku**
  Heroku is a cloud-based Platform as a Service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. By managing servers, infrastructure, and runtime environments, Heroku allows teams to focus on code rather than infrastructure maintenance. It is widely used for deploying modern web apps, APIs, and microservices, ranging from simple prototypes to enterprise-level applications.

**2.** Besides Jenkins and GitHub Actions, the current alternatives for configuring continuous integration are GitLab CI/CD and Azure DevOps.

**3.** The most suitable option for our configuration is the cloud, for several reasons, primarily its complexity, followed by cost and maintainability. To choose the best option, the most important thing is to understand the problem domain, as this provides information about the type of project, the technologies that should be used such as the language, framework, execution environment, and the number of personnel according to the complexity, which ultimately define the choice between self-hosted or cloud-based.
