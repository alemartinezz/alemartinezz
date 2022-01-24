# Programs
sudo apt update -y && sudo apt upgrade -y && sudo apt autoremove -y
sudo apt install wget curl nano neovim net-tools traceroute git tree make zip unzip nmap tcpdump mtr dpkg neofetch snap -y

# Alias
nano ~/.bash_profile
ls=ls -la

# oh-my-zsh
sudo apt install zsh -y
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH\_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Fonts
nano .zshrc
THEMES="powerlevel10k/powerlevel10k"
source .zshrc
