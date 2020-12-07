#!/bin/bash

os:windows-10
    - docker
        - caprover
            - nginx
            - mariadb
            - wordpress-phpfm
                - query-monitor
                - new-relic
                - gonzales
                - autoptimize (minifier)
                - w3-total-cache
            - varnish
            - redis
    - gitkraken
    - vscode
    - virtualbox
        - os:debian
            - bash:terminology
                - git
                - ssh
 