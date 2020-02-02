#!/bin/bash

NAMESPACE=$1
GRAPHCMSID="$(dotenv -p GRAPHCMSID)"
GRAPHCMSURL="$(dotenv -p GRAPHCMSURL)"
APIURL="$(dotenv -p APIURL)"
APIKEY="$(dotenv -p APIKEY)"
PROJECTID="$(dotenv -p PROJECTID)"
BRANCH="$(dotenv -p BRANCH)"
CDNBASE="$(dotenv -p CDNBASE)"
domain="$(dotenv -p domain)"
clientId="$(dotenv -p clientId)"
clientSecret="$(dotenv -p clientSecret)"
redirectUri="$(dotenv -p redirectUri)"
postLogoutRedirectUri="$(dotenv -p postLogoutRedirectUri)"
cookieSecret="$(dotenv -p cookieSecret)"
BACKEND_URL="$(dotenv -p BACKEND_URL)"
GRAPHCMSTOKEN="$(dotenv -p GRAPHCMSTOKEN)"

env_name_array=(GRAPHCMSID GRAPHCMSURL APIURL APIKEY PROJECTID BRANCH CDNBASE domain clientId clientSecret redirectUri postLogoutRedirectUri cookieSecret BACKEND_URL GRAPHCMSTOKEN)

for i in ${env_name_array[*]}
do
    
    l_now_env_name=$NAMESPACE\_$i
    l_now_formatted_env_name=$(echo "$l_now_env_name" | tr '[:upper:]' '[:lower:]')
    
    echo $l_now_formatted_env_name ${!i}
    now secret add $l_now_formatted_env_name ${!i}
done
