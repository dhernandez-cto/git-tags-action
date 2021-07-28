# Gity Tags javascript action

This action retrieve the next release candidate number for a version by searching in the git tags.

## Inputs

## `version`

**Required** The version to search for. `"1.0.0"`.

## Outputs

## `next-rc-number`

The next release candidate number for the `version`

## Example usage

    uses: belcebus/git-tags-action@main
      with:
      version: '1.0.0'
