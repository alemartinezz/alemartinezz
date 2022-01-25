### 0. Installl
```bash
sudo pacman -S install samba
sudo apt install samba -y
```

### 1. adapt share path and set up config file
```bash
sudo mkdir /opt/compartida
sudo nano /etc/samba/smb.conf
testparm
```

### 2. start service
```bash
sudo systemctl enable smbd
sudo systemctl start smbd
sudo systemctl enable nmbd
sudo systemctl start nmbd
```
```bash
sudo smbcontrol all reload-config
sudo systemctl restart smbd nmbd`
```

### 3. create user and add to smb group
```
sudo groupadd efinanzas
sudo useradd ale
sudo passwd ale
sudo gpasswd -a ale efinanzas
```

### 4. smb enable
```bash
sudo passwd root
su root
smbpasswd -a ale
smbpasswd -e ale
cat /etc/group
```

### 5. Folder's permission
```bash
sudo mkdir /opt/compartida
sudo chmod -R 775 /opt/compartida
sudo chgrp -R efinanzas /opt/compartida
```

### 6. Connect
```bash
smb://hostname/share_folder/
smbclient -L host
```

**LOGS**

`sudo cat /var/log/samba/smb.log`

### Uninstall
```bash
sudo apt remove --purge samba
find / -name "samba"
sudo rm -rf /var/lib/samba
sudo rm -rf /etc/samba
sudo rm -rf /usr/share/samba
sudo rm -rf /var/cache/samba
```

```bash
sudo apt-get remove --purge smbclient libsmbclient
sudo apt-get install smbclient libsmbclient
```

**in Arch**
```bash
sudo yaourt -Rcns samba -y
```

**errors**

1. user not foundreiniciar servicio cifs / reiniciar pc ?
2. failed to retrieve share list from server invalid argument // Couldn't find user in passdbsu rootsmbpasswd -a chapo

## Config file
```bash
sudo nano /etc/samba/smb.conf
```

```bash
[global]

server string = samba_server
interfaces = lo enp0s3
bind interfaces only = No
server role = standalone server
log file = /var/log/samba/smb.log
max log size = 10000
smb ports = 445
disable netbios = Yes
log level = 3 passdb:5 auth:5
idmap config * : backend ? tdb
tls enabled = yes
client max protocol = SMB3
read raw = Yes
write raw = Yes
use sendfile = true
oplocks = yes
kernel oplocks = yes
aio write size = 1

[home]
valid users = @g_home
comment = no trespassing
path = /opt/compartida
browseable = yes
writeable = yes
read only = no
guest ok = no
```