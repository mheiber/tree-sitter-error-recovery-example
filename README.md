# Tree Sitter Error Recovery Example

Example of a tree-sitter grammar with bad error recovery, so I can learn how to write a better grammar.

See test in test/corpus/examples.

This example of an Erlang-style function definition parses fine:

```
main() ->
    call().
```

but leaving out just two characters produces just an ERROR node without much structure:

```
main() ->
    call(
```

```
    (ERROR
      (name)
      (args)
      (name))

```

## Install

npm install

## Run tests

npm generate && npm test
