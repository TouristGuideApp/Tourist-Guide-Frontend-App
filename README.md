
## Social Radio 2.0 - Custom Frontend
*Developer: Symeon Sideris (sideris@europeanschoolradio.eu)*

Please **ALWAYS** use branches for changes and **DON'T** push to master

## Live Version
You can find the live version of the master at the following URL:
https://next.europeanschoolradio.eu

## Development Installation
You first need to install nodejs (npm).
Clone this repository and run

    npm install
Then run

    npm run dev
## Production Installation
You need PM2 to daemonize this application as a service. Find more below:
https://pm2.keymetrics.io/

Clone this repository and run:

    npm install
Then run the following command in order to create an optimized production build:

    npm run build

Finally, in order to start this app with PM2 run:

    pm2 start npm --name "sr2" -- start

You can then read the following in order to auto-start after system reboot:
https://pm2.keymetrics.io/docs/usage/startup/
