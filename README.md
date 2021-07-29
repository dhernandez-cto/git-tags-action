# Git Tag Number

This action retrieve the next tag number for a version by searching in the git
tags. Searchs for all the tags an filter them by the `version` parameter. Then
return the next tag number.

## Inputs

## `version`

**Required** The version to search for in the remote tags list. 

E.g.: `version: "1.0.0-RC"`

## Outputs

## `next-tag-number`

The next tag number for the git tag `version`.

E.g.: given a git repository tag list like this one:

    1.0.0 | 1.0.1 | 1.0.2-RC-1 | 1.0.2-RC-2

Calling this action with the parameter `version: 1.0.2-RC` will return `3`

## `new-tag`

The full tag label compound of `version` plus `-next-tag-number`.

E.g.: given a git repository tag list like this one:

    1.0.0 | 1.0.1 | 1.0.2-RC-1 | 1.0.2-RC-2

Calling this action with the parameter `version: 1.0.2-RC` will return 
`1.0.2-RC-3`

## Example usage

    uses: belcebus/git-tags-action@main
      with:
      version: '1.0.0-RC'
