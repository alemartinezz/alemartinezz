****# Git cmd****

- **Push to a branch**

`git push origin branchname`

- **See branches**

`git branch`

- **Create a branch**

`git branch branchname`

- **Move to a branch**

`git checkout branchname`

- **See all the commits**

`git log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`

****Same command as alias****

`git config --global alias.lg "log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`

`git show-branchgitk`

# Git Setup

## **- Initial Setup**

****0. Login locally****

`git config --global user.name "your_username"

git config --global user.email "your_github@email.com"

git config --global core.editor code`

****1. Generate and register ssh keys****

`mkdir ~/.ssh && cd ~/.ssh
ssh-keygen -o
cat ~/.ssh/id_rsa.pub`

****2. Copy and paste keys in GitHub account:****

`Settings -> SSH and GPG keys -> New key -> Paste`

****3. Check****

`ssh -T git@github.com`

## **- Once you're setted up**

****0. Clone repo****

`# Clone repo
git clone git@github.com:alemartinezz/FI-Prog1-Obligatorio1.git
cd repo_name

# Add remote (optional)
git remote add alias git@github.com:username/repo_name.git
git remote set-url alias git@github.com:username/repo_name.git

# Config credentials
git config --global credential.helper store`

****1. Commit your changes****

`git add .
git commit -m "changes"
git push -u alias master`

****2. Start a repo from scratch (Create new repo)****

1. Create the repo on your GitHub account
2. Upload the repo

`touch README.md
git init
git remote add repo_name git@github.com:username/repo_name.git
git remote set-url repo_name git@github.com:username/repo_name.git
git add .
git commit -m "first commit"
git push -u repo_name master`

# Origin

`origin` is an **alias** *on your system* for a particular remote repository. It's not actually a property of that repository.By doing:

`git push origin branchname`

you're saying to push to the `origin` repository. There's no requirement to name the remote repository `origin`: in fact the same repository could have a different alias for another developer.Remotes are simply an **alias** that store the URL of repositories. You can see what URL belongs to each remote by using:

`git remote -v`

In the `push` command, you can use *remotes* or you can simply use a *URL* directly. An example that uses the URL:

`git push git@github.com:git/git.git master`

# **# Create a branch from an existing branch**

---

Creates MyFeature branch off dev.

`git checkout -b myFeature develop`

Do your work and then commit

`git commit -am "Your message"`

Push your new branch

`git push origin myFeature`

Now merge your changes to dev without a fast-forward

`git checkout dev
git merge --no-ff myFeature`

Now push changes to the main branch

`git push origin dev`
