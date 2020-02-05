#!/bin/bash

NAMESPACE=$1

env_name_array=(GRAPHCMSID GRAPHCMSURL APIURL APIKEY PROJECTID BRANCH CDNBASE domain clientId clientSecret redirectUri postLogoutRedirectUri cookieSecret BACKEND_URL GRAPHCMSTOKEN)

for i in ${env_name_array[*]}
do
    
    l_now_env_name=$NAMESPACE\_$i
    l_now_formatted_env_name=$(echo "$l_now_env_name" | tr '[:upper:]' '[:lower:]')
    
    echo $l_now_formatted_env_name 
    now secret rm $l_now_formatted_env_name  -y
done