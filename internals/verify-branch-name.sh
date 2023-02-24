#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^((fix|feat)\/[a-z0-9\-]+)$'

message="Branch names should start with feat/ or fix/ be lower case and can contain numbers or -"

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; then
    echo "$message"
    exit 1
fi

exit 0
