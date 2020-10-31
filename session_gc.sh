#!/bin/bash
/usr/bin/find /var/local/php5_session -mindepth 1 -maxdepth 1 -type f -cmin +$(/usr/lib/php5/maxlifetime) -print0 -exec rm {} \; >/dev/null 2>&1
