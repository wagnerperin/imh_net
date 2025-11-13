# imh_net
IMH Social Network

## Instructions to Run this Project

### Check nodejs 22.x

1) Open powershell and enter to Ubuntu on WSL

```console
wsl -d Ubuntu
```

2) Check node version

```console
node --version
```

If no version shown, you have to [install nodejs on you machine](https://itsfoss.gitlab.io/post/how-to-install-nodejs-on-ubuntu-2404-2204-or-2004/).

**Obs:** Remember to install version 22.x of nodejs.

If version shown it's < 22.x you have to [update nodejs on your machine](https://askubuntu.com/questions/1529145/how-to-update-node-js-to-the-latest-version-in-ubuntu-22-04). 

### Check if mongod service is running

```console
sudo systemctl status mongod
```

If no service mongod, you have to [install mongod on your machine](https://linuxgenie.net/install-mongodb-ubuntu-24-04/).

**Obs:** Remember to install version 8 of mongodb.

If command ok but no message 'running' are shown, then, start mongod service:

```console
sudo systemctl start mongod
```

### Update you repository
After sincronize your repo, update the local repository:

```console
cd ~/imh_net
git clone <repo_link>
```

If no folder imh_net, you have to clone:
```console
cd ~
git clone <repo_link>
```

### Install dependencies

```console
npm install -D
```

### Run the project on dev mode

```console
npm run dev
```