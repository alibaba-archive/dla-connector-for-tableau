#!/bin/bash

replace_config() {
    file=$1
    host=$2
    username=$3
    password=$4
    cat $file | sed "s/__SERVER__/${host}/g;s/__USERNAME__/${username}/g;s/__PASSWORD__/${password}/g" > /tmp/$file
    mv /tmp/$file $file
}


if [ $# != 3 ] ; then
    echo "USAGE: $0 <host> <username> <password>"
    exit 1;
fi

cd tds

for file in `ls`
do
    replace_config $file $@
done

cd ..

