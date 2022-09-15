module.exports = grammar({
  name: 'micro_erlang',
  rules: {
    source_file: $ => $.fun,
    name: $ => seq(token(/[a-z]/), repeat(token(/[a-z]/))),
    fun: $ => seq(
        field("name", $.name),
        field("args", $.args),
        field("body", $.clause_body),
        "."
    ),
    args: $ => '()',
    _expr: $ => choice($.call),
    call: $ => seq(
        field("fn", $.name),
        token('('),
        token(')')
    ),
    clause_body: $ => seq('->', $._expr),
  }
});
