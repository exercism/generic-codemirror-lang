**PLEASE NOTE: These instructions are for Exercism Admins only. Maintainers should request that admins create a new analyzer for them. Please create a new topic on the [forum](https://forum.exercism.org).**

---

# Exercism Analyzer Template

This repository is a [template repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) for creating a [CodeMirror grammar][grammar] for [Exercism][exercism] tracks.

To create a new CodeMirror grammar, use the `bin/bootstrap.sh` script:

```shell
LANGUAGE="<LANGUAGE NAME>" SLUG="<LANGUAGE_SLUG>" bin/bootstrap.sh
```

For example:

```shell
LANGUAGE="Common Lisp" SLUG="common-lisp" bin/bootstrap.sh
```

This will automatically:

1. Create the codemirror grammar repository
1. Setup access for the `maintainers-admin`, `guardians` and track team
1. Setup branch protection rules
1. Give this repository access to the secrets required to deploy the image
1. Disable merge and rebase commits

## Deployment

After the grammar has been published to NPM, follow the
[enable language instructions](https://exercism.org/docs/building/tracks/new/syntax-highlighting/dynamic#h-enable-language).
