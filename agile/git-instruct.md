Here's an updated version of your organized tech stack and setup instructions, including guidelines for branching:

---

## 📚 Project Resources

### 💾 Main Repository
- **Flowise-KB-Bot:** [Link to Main Repository]

### 🛠️ Setup Instructions

#### Development Environment Setup
1. **Prerequisites:**
   - Node.js (version 14 or higher)
   - Python (version 3.8 or higher)
   - Docker (latest version)

2. **Installation Steps:**
   ```bash
   git clone https://github.com/your-org/flowise-kb-bot.git
   cd flowise-kb-bot
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the required environment variables as specified in `.env.example`.

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

#### Database Setup
- **Database Configuration Doc:** [Link to Database Configuration Doc]

#### Pinecone Environment Setup
- **Pinecone Setup Doc:** [Link to Pinecone Setup Doc]

#### Troubleshooting
- **Troubleshooting Guide:** [Link to Troubleshooting Guide]

### 🧑‍💻 Development Guidelines

#### Branching Strategy
1. **Branch Naming Convention:**
   - Feature branches should follow the format: `devname/featurename`
   - Example: `john/implement-upload-api`
   
2. **Main Branches:**
   - `main`: The production-ready code.
   - `develop`: The latest development code.

3. **Feature Branches:**
   - Create a new branch for each feature or bug fix from `develop`.
   - Merge back into `develop` via pull requests.

4. **Branching Workflow:**
   - **Step 1:** Checkout the `develop` branch.
     ```bash
     git checkout develop
     ```
   - **Step 2:** Pull the latest changes.
     ```bash
     git pull origin develop
     ```
   - **Step 3:** Create a new feature branch.
     ```bash
     git checkout -b devname/featurename
     ```
   - **Step 4:** Make your changes and commit them.
     ```bash
     git add .
     git commit -m "Description of your changes"
     ```
   - **Step 5:** Push your feature branch to the remote repository.
     ```bash
     git push origin devname/featurename
     ```
   - **Step 6:** Create a pull request to merge your feature branch into `develop`.

5. **Pull Request Guidelines:**
   - Ensure your code follows the project’s coding standards.
   - Write clear and concise commit messages.
   - Include a detailed description of the changes in the pull request.
   - Request at least one review from another team member.
   - Address any feedback or requested changes promptly.

#### Code Reviews
- **Purpose:** Ensure code quality and consistency.
- **Guidelines:**
  - Review the logic, structure, and style of the code.
  - Check for potential bugs or issues.
  - Ensure that the code follows the project’s coding standards.
  - Verify that all new features have corresponding tests.
  - Provide constructive feedback and suggestions.

---

By including these setup instructions and development guidelines, your team will have a clear understanding of how to set up their development environments, follow the branching strategy, and maintain code quality through consistent review practices. This structure promotes efficient collaboration and helps ensure the project progresses smoothly.